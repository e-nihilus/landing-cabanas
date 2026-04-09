"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { cabins, pool, type Cabin, getSeasonalPrice } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import PaymentScreen from "./PaymentScreen";
import { useTranslations, useLocale } from "next-intl";

interface BookingState {
  cabinId: string;
  startDate: Date | null;
  endDate: Date | null;
  guests: number;
  pets: number;
  name: string;
  phone: string;
}

interface BookingCalendarProps {
  initialProperty?: Cabin | null;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isDateInRange(date: Date, start: Date, end: Date) {
  return date >= start && date <= end;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday start
}

// Generate all dates between two ISO date strings
function generateDatesBetween(checkIn: string, checkOut: string): Date[] {
  const dates: Date[] = [];
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const current = new Date(start);
  while (current < end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

function MiniCalendar({
  year,
  month,
  onMonthChange,
  startDate,
  endDate,
  onDateClick,
  bookedDates,
  weekdays,
  months,
}: {
  year: number;
  month: number;
  onMonthChange: (dir: number) => void;
  startDate: Date | null;
  endDate: Date | null;
  onDateClick: (date: Date) => void;
  bookedDates: Date[];
  weekdays: string[];
  months: string[];
}) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(year, month, d));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => onMonthChange(-1)}
          className="p-2 hover:bg-beige rounded-lg transition-colors text-text-muted hover:text-text-dark"
        >
          ‹
        </button>
        <h4 className="font-display text-lg font-semibold text-text-dark">
          {months[month]} {year}
        </h4>
        <button
          onClick={() => onMonthChange(1)}
          className="p-2 hover:bg-beige rounded-lg transition-colors text-text-muted hover:text-text-dark"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekdays.map((d) => (
          <div
            key={d}
            className="text-center text-xs font-medium text-text-muted py-2"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((date, i) => {
          if (!date) {
            return <div key={`empty-${i}`} />;
          }

          const isPast = date < today;
          const isBooked = bookedDates.some((b) => isSameDay(b, date));
          const isDisabled = isPast || isBooked;
          const isStart = startDate && isSameDay(date, startDate);
          const isEnd = endDate && isSameDay(date, endDate);
          const isInRange =
            startDate && endDate && isDateInRange(date, startDate, endDate);
          const isToday = isSameDay(date, today);

          return (
            <button
              key={date.toISOString()}
              disabled={isDisabled}
              onClick={() => onDateClick(date)}
              className={`relative aspect-square flex items-center justify-center text-sm rounded-lg transition-all duration-200 ${
                isDisabled
                  ? "text-text-muted/40 cursor-not-allowed"
                  : isStart || isEnd
                  ? "bg-primary text-white font-bold shadow-md"
                  : isInRange
                  ? "bg-primary/15 text-primary font-medium"
                  : isToday
                  ? "bg-accent/20 text-accent font-bold ring-2 ring-accent/50"
                  : "text-text-dark hover:bg-beige cursor-pointer"
              }`}
            >
              {date.getDate()}
              {isBooked && !isPast && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BookingCalendar({
  initialProperty,
}: BookingCalendarProps) {
  const initialCabinId = initialProperty?.id || cabins[0].id;
  const t = useTranslations("Booking");
  const td = useTranslations("Data");
  const locale = useLocale();

  const [booking, setBooking] = useState<BookingState>({
    cabinId: initialCabinId,
    startDate: null,
    endDate: null,
    guests: 2,
    pets: 0,
    name: "",
    phone: "",
  });

  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<"dates" | "details" | "payment">("dates");
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [customPrices, setCustomPrices] = useState<{ date: string; price: number }[]>([]);
  const [formErrors, setFormErrors] = useState<{ phone?: string }>({});

  // Fetch booked dates from backend
  const fetchBookedDates = useCallback(async (cabinId: string) => {
    try {
      const res = await fetch(`/api/reservations?cabinId=${cabinId}`);
      const data = await res.json();
      const dates: Date[] = [];
      for (const range of data.booked || []) {
        const generated = generateDatesBetween(range.checkIn, range.checkOut);
        dates.push(...generated);
      }
      setBookedDates(dates);
      setCustomPrices((data.customPrices || []).map((cp: any) => ({ date: cp.date, price: cp.price })));
    } catch {
      setBookedDates([]);
    }
  }, []);

  useEffect(() => {
    fetchBookedDates(booking.cabinId);
  }, [booking.cabinId, fetchBookedDates]);

  const selectedCabin = booking.cabinId === "piscina"
    ? { name: pool.name, shortDescription: pool.description, pricePerNight: 0, capacity: 999 } as any
    : cabins.find((c) => c.id === booking.cabinId)!;

  const selectedCabinName = booking.cabinId === "piscina"
    ? td("pool.name")
    : td(`cabins.${booking.cabinId}.name`);
  const selectedCabinDescription = booking.cabinId === "piscina"
    ? td("pool.description")
    : td(`cabins.${booking.cabinId}.shortDescription`);

  const handleMonthChange = (dir: number) => {
    let newMonth = calendarMonth + dir;
    let newYear = calendarYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    } else if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    setCalendarMonth(newMonth);
    setCalendarYear(newYear);
  };

  const handleDateClick = (date: Date) => {
    if (!booking.startDate || (booking.startDate && booking.endDate)) {
      setBooking({ ...booking, startDate: date, endDate: null });
    } else {
      if (date < booking.startDate) {
        setBooking({ ...booking, startDate: date, endDate: null });
      } else {
        const diffNights = Math.ceil(
          (date.getTime() - booking.startDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        if (diffNights < 2) {
          return;
        }
        const hasBookedInRange = bookedDates.some(
          (b) => b > booking.startDate! && b < date
        );
        if (hasBookedInRange) {
          setBooking({ ...booking, startDate: date, endDate: null });
        } else {
          setBooking({ ...booking, endDate: date });
        }
      }
    }
  };

  const nights =
    booking.startDate && booking.endDate
      ? Math.ceil(
          (booking.endDate.getTime() - booking.startDate.getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  const calculatePrice = () => {
    if (nights === 0) return { base: 0, extraGuests: 0, cleaning: 0, discount: 0, petsFee: 0, total: 0 };

    let base = 0;
    const currentDate = new Date(booking.startDate!);
    const endDate = new Date(booking.endDate!);

    while (currentDate < endDate) {
      const dayOfWeek = currentDate.getDay();
      const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;

      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
      const custom = customPrices.find((cp) => cp.date === dateStr);
      let nightPrice: number;
      if (custom) {
        nightPrice = custom.price;
      } else {
        const seasonal = getSeasonalPrice(selectedCabin, currentDate);
        nightPrice = isWeekend ? seasonal.priceWeekend : seasonal.pricePerNight;
      }

      base += nightPrice;
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const extraGuestCount = Math.max(0, booking.guests - 2);
    const extraGuests = extraGuestCount * selectedCabin.extraGuestPrice * nights;

    let subtotal = base + extraGuests;

    let discount = 0;
    if (nights >= 7 && selectedCabin.weeklyDiscount) {
      discount = Math.round((subtotal * selectedCabin.weeklyDiscount) / 100);
      subtotal -= discount;
    }

    const cleaning = selectedCabin.cleaningFee;
    const petsFee = booking.pets * 5;
    const total = Math.round(subtotal + cleaning + petsFee);

    return { base, extraGuests, cleaning, discount, petsFee, total };
  };

  const priceBreakdown = calculatePrice();
  const totalPrice = priceBreakdown.total;

  const formatDateISO = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const validateForm = (): boolean => {
    const errors: { phone?: string } = {};
    const phoneRegex = /^[+]?[\d\s()-]{7,}$/;

    if (!phoneRegex.test(booking.phone)) {
      errors.phone = t("validPhone");
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleGoToPayment = () => {
    if (validateForm()) {
      setStep("payment");
    }
  };

  const handlePaymentSuccess = () => {
    setSubmitted(true);
    fetchBookedDates(booking.cabinId);
    setTimeout(() => {
      setSubmitted(false);
      setStep("dates");
      setBooking({
        cabinId: initialCabinId,
        startDate: null,
        endDate: null,
        guests: 2,
        pets: 0,
        name: "",
        phone: "",
      });
    }, 4000);
  };

  if (submitted) {
    return (
      <section id="reservas" className="py-24 px-4 bg-primary-dark">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-6xl mb-6">✅</div>
            <h3 className="font-display text-3xl font-bold text-text-dark mb-4">
              {t("confirmed")}
            </h3>
            <p className="text-text-muted text-lg mb-2">
              {t("confirmedMessage")}{" "}
              <strong>{selectedCabinName}</strong>
            </p>
            <p className="text-text-muted">
              {booking.startDate?.toLocaleDateString(locale === "es" ? "es-ES" : "en-US")} →{" "}
              {booking.endDate?.toLocaleDateString(locale === "es" ? "es-ES" : "en-US")} · {nights} {t("nights")} ·{" "}
              <strong>{totalPrice}€</strong>
            </p>
            <p className="text-primary font-medium mt-4">
              {t("confirmationEmail")}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservas" className="py-24 px-4 bg-primary-dark">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
          light
        />

        {/* Cabin selector */}
        {!initialProperty && (
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {cabins.map((cabin) => (
              <button
                key={cabin.id}
                onClick={() => {
                  setBooking({
                    ...booking,
                    cabinId: cabin.id,
                    startDate: null,
                    endDate: null,
                  });
                  setStep("dates");
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  booking.cabinId === cabin.id
                    ? "bg-accent text-primary-dark shadow-lg"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {td(`cabins.${cabin.id}.name`)}
              </button>
            ))}
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          {step === "payment" ? (
            <PaymentScreen
              cabinId={booking.cabinId}
              cabinName={selectedCabinName}
              checkIn={formatDateISO(booking.startDate!)}
              checkOut={formatDateISO(booking.endDate!)}
              nights={nights}
              guests={booking.guests}
              pets={booking.pets}
              totalPrice={totalPrice}
              name={booking.name}
              phone={booking.phone}
              onBack={() => setStep("details")}
              onSuccess={handlePaymentSuccess}
            />
          ) : step === "dates" ? (
            <div className="grid md:grid-cols-2">
              {/* Calendar */}
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-text-dark mb-6">
                  {t("selectDates")}
                </h3>
                <MiniCalendar
                  year={calendarYear}
                  month={calendarMonth}
                  onMonthChange={handleMonthChange}
                  startDate={booking.startDate}
                  endDate={booking.endDate}
                  onDateClick={handleDateClick}
                  bookedDates={bookedDates}
                  weekdays={t.raw("weekdays")}
                  months={t.raw("months")}
                />
                <div className="flex gap-4 mt-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-primary rounded" /> {t("selected")}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-primary/15 rounded" /> {t("range")}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-red-100 rounded relative">
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full" />
                    </span>{" "}
                    {t("booked")}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="p-6 sm:p-8 bg-beige/50 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-text-dark mb-2">
                    {selectedCabinName}
                  </h3>
                  <p className="text-text-muted text-sm mb-6">
                    {selectedCabinDescription}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">{t("checkIn")}</span>
                      <span className="font-medium text-text-dark">
                        {booking.startDate
                          ? booking.startDate.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
                              weekday: "short",
                              day: "numeric",
                              month: "short",
                            })
                          : t("selectDate")}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">{t("checkOut")}</span>
                      <span className="font-medium text-text-dark">
                        {booking.endDate
                          ? booking.endDate.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
                              weekday: "short",
                              day: "numeric",
                              month: "short",
                            })
                          : t("selectDate")}
                      </span>
                    </div>

                    {/* Guests */}
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-muted">{t("guests")}</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            setBooking({
                              ...booking,
                              guests: Math.max(1, booking.guests - 1),
                            })
                          }
                          className="w-7 h-7 rounded-full bg-beige-dark flex items-center justify-center text-text-dark hover:bg-primary hover:text-white transition-colors"
                        >
                          −
                        </button>
                        <span className="font-medium w-4 text-center">
                          {booking.guests}
                        </span>
                        <button
                          onClick={() =>
                            setBooking({
                              ...booking,
                              guests: Math.min(
                                selectedCabin.capacity,
                                booking.guests + 1
                              ),
                            })
                          }
                          className="w-7 h-7 rounded-full bg-beige-dark flex items-center justify-center text-text-dark hover:bg-primary hover:text-white transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Pets */}
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-muted">{t("pets")} <span className="text-xs">({t("petsInfo")})</span></span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            setBooking({
                              ...booking,
                              pets: Math.max(0, booking.pets - 1),
                            })
                          }
                          className="w-7 h-7 rounded-full bg-beige-dark flex items-center justify-center text-text-dark hover:bg-primary hover:text-white transition-colors"
                        >
                          −
                        </button>
                        <span className="font-medium w-4 text-center">
                          {booking.pets}
                        </span>
                        <button
                          onClick={() =>
                            setBooking({
                              ...booking,
                              pets: Math.min(2, booking.pets + 1),
                            })
                          }
                          className="w-7 h-7 rounded-full bg-beige-dark flex items-center justify-center text-text-dark hover:bg-primary hover:text-white transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {nights > 0 && (
                    <div className="border-t border-beige-dark pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">
                          {t("accommodation")} × {nights} {t("nights")}
                        </span>
                        <span className="font-medium">{priceBreakdown.base}€</span>
                      </div>
                      {priceBreakdown.extraGuests > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-text-muted">
                            {booking.guests - 2} {t("extraPersons")} × {selectedCabin.extraGuestPrice}{t("perDay")} × {nights} {t("nights")}
                          </span>
                          <span className="font-medium">{priceBreakdown.extraGuests}€</span>
                        </div>
                      )}
                      {priceBreakdown.discount > 0 && (
                        <div className="flex justify-between text-sm text-green-600">
                          <span>{t("weeklyDiscount")} (-{selectedCabin.weeklyDiscount}%)</span>
                          <span className="font-medium">-{priceBreakdown.discount}€</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">{t("cleaning")}</span>
                        <span className="font-medium">{priceBreakdown.cleaning}€</span>
                      </div>
                      {priceBreakdown.petsFee > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-text-muted">
                            🐾 {t("pets")} × {booking.pets} (5€)
                          </span>
                          <span className="font-medium">{priceBreakdown.petsFee}€</span>
                        </div>
                      )}
                      <div className="flex justify-between text-lg font-bold text-primary border-t border-beige-dark pt-2">
                        <span>{t("total")}</span>
                        <span>{totalPrice}€</span>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setStep("details")}
                  disabled={!booking.startDate || !booking.endDate}
                  className={`w-full mt-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    booking.startDate && booking.endDate
                      ? "bg-primary text-white hover:bg-primary-light hover:shadow-lg"
                      : "bg-beige-dark text-text-muted cursor-not-allowed"
                  }`}
                >
                  {t("continueBooking")}
                </button>
              </div>
            </div>
          ) : (
            /* Details step */
            <div className="p-6 sm:p-10 max-w-lg mx-auto">
              <button
                onClick={() => setStep("dates")}
                className="text-primary hover:text-primary-light font-medium text-sm mb-6 flex items-center gap-1"
              >
                {t("changeDates")}
              </button>

              <h3 className="font-display text-2xl font-bold text-text-dark mb-2">
                {t("completeBooking")}
              </h3>
              <p className="text-text-muted text-sm mb-6">
                {selectedCabinName} ·{" "}
                {booking.startDate?.toLocaleDateString(locale === "es" ? "es-ES" : "en-US")} →{" "}
                {booking.endDate?.toLocaleDateString(locale === "es" ? "es-ES" : "en-US")} · {nights} {t("nights")}
                · <strong>{totalPrice}€</strong>
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1.5">
                    {t("fullName")}
                  </label>
                  <input
                    type="text"
                    value={booking.name}
                    onChange={(e) =>
                      setBooking({ ...booking, name: e.target.value })
                    }
                    placeholder={t("namePlaceholder")}
                    className="w-full px-4 py-3 border border-beige-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1.5">
                    {t("phone")}
                  </label>
                  <input
                    type="tel"
                    value={booking.phone}
                    onChange={(e) => {
                      setBooking({ ...booking, phone: e.target.value });
                      if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                    }}
                    placeholder="+34 647 622 690"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${
                      formErrors.phone ? "border-red-400" : "border-beige-dark"
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <button
                onClick={handleGoToPayment}
                disabled={!booking.name || !booking.phone}
                className={`w-full mt-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  booking.name && booking.phone
                    ? "bg-primary text-white hover:bg-primary-light hover:shadow-xl"
                    : "bg-beige-dark text-text-muted cursor-not-allowed"
                }`}
              >
                {t("goToPayment")} · {totalPrice}€
              </button>

              <p className="text-center text-text-muted text-xs mt-4">
                {t("confirmationNote")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
