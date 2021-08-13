import Chance from "chance";

const random = new Chance();

export function generateACoupon(): { coupon: string } {
  return { coupon: random.guid() };
}
