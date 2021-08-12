import Chance from "chance";

const random = new Chance();

export function generateACoupon() {
  return random.guid();
}
