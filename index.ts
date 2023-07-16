import { BMW } from "./BMW";
import { Toyota } from "./Toyota";

const m5Comp = new BMW("BMW M5 Competition", "M60B50, Petrol", 328, 50000, 4);
const supraA90 = new Toyota("Toyota Supra A90", "B58", 280, 76000, 340);

console.log(m5Comp.isFastEnough(250));
console.log(m5Comp.isSuitableBodyType("hatchback"));
console.log(supraA90.isFastEnough(300));
