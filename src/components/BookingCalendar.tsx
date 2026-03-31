"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { cabins, pool, type Cabin } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import PaymentScreen from "./PaymentScreen";

interface BookingState {
  cabinId: string;
  startDate: Date | null;
  endDate: Date | null;
  guests: number;
  name: string;
  email: string;
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

const WEEKDAYS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];
const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

function MiniCalendar({
  year,
  month,
  onMonthChange,
  startDate,
  endDate,
  onDateClick,
  bookedDates,
}: {
  year: number;
  month: number;
  onMonthChange: (dir: number) => void;
  startDate: Date | null;
  endDate: Date | null;
  onDateClick: (date: Date) => void;
  bookedDates: Date[];
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
          {MONTHS[month]} {year}
        </h4>
        <button
          onClick={() => onMonthChange(1)}
          className="p-2 hover:bg-beige rounded-lg transition-colors text-text-muted hover:text-text-dark"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS.map((d) => (
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

  const [booking, setBooking] = useState<BookingState>({
    cabinId: initialCabinId,
    startDate: null,
    endDate: null,
    guests: 2,
    name: "",
    email: "",
    phone: "",
  });

  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<"dates" | "details" | "payment">("dates");
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [formErrors, setFormErrors] = useState<{ email?: string; phone?: string }>({});

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
    if (nights === 0) return { base: 0, extraGuests: 0, cleaning: 0, discount: 0, total: 0 };

    let base = 0;
    const currentDate = new Date(booking.startDate!);
    const endDate = new Date(booking.endDate!);

    while (currentDate < endDate) {
      const dayOfWeek = currentDate.getDay();
      const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;

      const nightPrice = isWeekend
        ? selectedCabin.priceWeekend
        : selectedCabin.pricePerNight;

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
    const total = Math.round(subtotal + cleaning);

    return { base, extraGuests, cleaning, discount, total };
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
    const errors: { email?: string; phone?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[\d\s()-]{7,}$/;

    if (!emailRegex.test(booking.email)) {
      errors.email = "Introduce un email válido";
    }
    if (!phoneRegex.test(booking.phone)) {
      errors.phone = "Introduce un teléfono válido (mín. 7 dígitos)";
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
        name: "",
        email: "",
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
              ¡Reserva Confirmada!
            </h3>
            <p className="text-text-muted text-lg mb-2">
              Hemos recibido tu solicitud para{" "}
              <strong>{selectedCabin.name}</strong>
            </p>
            <p className="text-text-muted">
              {booking.startDate?.toLocaleDateString("es-ES")} →{" "}
              {booking.endDate?.toLocaleDateString("es-ES")} · {nights} noches ·{" "}
              <strong>{totalPrice}€</strong>
            </p>
            <p className="text-primary font-medium mt-4">
              Te enviaremos un email de confirmación en breve.
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
          subtitle="Reserva tu escapada"
          title="Calendario de Disponibilidad"
          description="Selecciona tu cabaña, elige las fechas y disfruta."
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
                {cabin.name}
              </button>
            ))}
            <button
              onClick={() => {
                setBooking({
                  ...booking,
                  cabinId: "piscina",
                  startDate: null,
                  endDate: null,
                });
                setStep("dates");
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                booking.cabinId === "piscina"
                  ? "bg-accent text-primary-dark shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {pool.name}
            </button>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          {step === "payment" ? (
            <PaymentScreen
              cabinId={booking.cabinId}
              cabinName={selectedCabin.name}
              checkIn={formatDateISO(booking.startDate!)}
              checkOut={formatDateISO(booking.endDate!)}
              nights={nights}
              guests={booking.guests}
              totalPrice={totalPrice}
              name={booking.name}
              email={booking.email}
              phone={booking.phone}
              onBack={() => setStep("details")}
              onSuccess={handlePaymentSuccess}
            />
          ) : step === "dates" ? (
            <div className="grid md:grid-cols-2">
              {/* Calendar */}
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-text-dark mb-6">
                  Selecciona tus fechas
                </h3>
                <MiniCalendar
                  year={calendarYear}
                  month={calendarMonth}
                  onMonthChange={handleMonthChange}
                  startDate={booking.startDate}
                  endDate={booking.endDate}
                  onDateClick={handleDateClick}
                  bookedDates={bookedDates}
                />
                <div className="flex gap-4 mt-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-primary rounded" /> Seleccionado
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-primary/15 rounded" /> Rango
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-red-100 rounded relative">
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full" />
                    </span>{" "}
                    Reservado
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="p-6 sm:p-8 bg-beige/50 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-text-dark mb-2">
                    {selectedCabin.name}
                  </h3>
                  <p className="text-text-muted text-sm mb-6">
                    {selectedCabin.shortDescription}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Entrada</span>
                      <span className="font-medium text-text-dark">
                        {booking.startDate
                          ? booking.startDate.toLocaleDateString("es-ES", {
                              weekday: "short",
                              day: "numeric",
                              month: "short",
                            })
                          : "Selecciona fecha"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Salida</span>
                      <span className="font-medium text-text-dark">
                        {booking.endDate
                          ? booking.endDate.toLocaleDateString("es-ES", {
                              weekday: "short",
                              day: "numeric",
                              month: "short",
                            })
                          : "Selecciona fecha"}
                      </span>
                    </div>

                    {/* Guests */}
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-muted">Huéspedes</span>
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
                  </div>

                  {nights > 0 && (
                    <div className="border-t border-beige-dark pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">
                          Alojamiento × {nights} noches
                        </span>
                        <span className="font-medium">{priceBreakdown.base}€</span>
                      </div>
                      {priceBreakdown.extraGuests > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-text-muted">
                            {booking.guests - 2} pers. extra × {selectedCabin.extraGuestPrice}€/día × {nights} noches
                          </span>
                          <span className="font-medium">{priceBreakdown.extraGuests}€</span>
                        </div>
                      )}
                      {priceBreakdown.discount > 0 && (
                        <div className="flex justify-between text-sm text-green-600">
                          <span>Dto. semanal (-{selectedCabin.weeklyDiscount}%)</span>
                          <span className="font-medium">-{priceBreakdown.discount}€</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">Limpieza</span>
                        <span className="font-medium">{priceBreakdown.cleaning}€</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-primary border-t border-beige-dark pt-2">
                        <span>Total</span>
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
                  Continuar Reserva
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
                ← Cambiar fechas
              </button>

              <h3 className="font-display text-2xl font-bold text-text-dark mb-2">
                Completa tu Reserva
              </h3>
              <p className="text-text-muted text-sm mb-6">
                {selectedCabin.name} ·{" "}
                {booking.startDate?.toLocaleDateString("es-ES")} →{" "}
                {booking.endDate?.toLocaleDateString("es-ES")} · {nights} noches
                · <strong>{totalPrice}€</strong>
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1.5">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    value={booking.name}
                    onChange={(e) =>
                      setBooking({ ...booking, name: e.target.value })
                    }
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 border border-beige-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={booking.email}
                    onChange={(e) => {
                      setBooking({ ...booking, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                    }}
                    placeholder="tu@email.com"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${
                      formErrors.email ? "border-red-400" : "border-beige-dark"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={booking.phone}
                    onChange={(e) => {
                      setBooking({ ...booking, phone: e.target.value });
                      if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                    }}
                    placeholder="+34 600 000 000"
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
                disabled={!booking.name || !booking.email || !booking.phone}
                className={`w-full mt-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  booking.name && booking.email && booking.phone
                    ? "bg-primary text-white hover:bg-primary-light hover:shadow-xl"
                    : "bg-beige-dark text-text-muted cursor-not-allowed"
                }`}
              >
                Ir al Pago · {totalPrice}€
              </button>

              <p className="text-center text-text-muted text-xs mt-4">
                Recibirás un email de confirmación. Cancelación gratuita hasta
                48h antes.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
