import { cabins, getSeasonalPrice } from "./data";
import { getCustomPricesForCabin } from "./db";

interface PriceInput {
  cabinId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  pets?: number;
}

export async function calculateServerPrice(input: PriceInput): Promise<number> {
  const cabin = cabins.find((c) => c.id === input.cabinId);
  if (!cabin) throw new Error("Cabaña no encontrada");

  const startDate = new Date(input.checkIn);
  const endDate = new Date(input.checkOut);
  const nights = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (nights < cabin.minStay || nights > cabin.maxStay) {
    throw new Error("Número de noches fuera de rango");
  }

  const customPrices = await getCustomPricesForCabin(input.cabinId);
  const customPriceMap = new Map(customPrices.map((cp) => [cp.date, cp.price]));

  let base = 0;
  const currentDate = new Date(startDate);

  while (currentDate < endDate) {
    const dayOfWeek = currentDate.getDay();
    const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;

    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
    const custom = customPriceMap.get(dateStr);

    let nightPrice: number;
    if (custom !== undefined) {
      nightPrice = custom;
    } else {
      const seasonal = getSeasonalPrice(cabin, currentDate);
      nightPrice = isWeekend ? seasonal.priceWeekend : seasonal.pricePerNight;
    }

    base += nightPrice;
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const extraGuestCount = Math.max(0, input.guests - 2);
  const extraGuests = extraGuestCount * cabin.extraGuestPrice * nights;

  let subtotal = base + extraGuests;

  let discount = 0;
  if (nights >= 7 && cabin.weeklyDiscount) {
    discount = Math.round((subtotal * cabin.weeklyDiscount) / 100);
    subtotal -= discount;
  }

  const cleaning = cabin.cleaningFee;
  const petsFee = (input.pets || 0) * 5;
  const total = Math.round(subtotal + cleaning + petsFee);

  return total;
}
