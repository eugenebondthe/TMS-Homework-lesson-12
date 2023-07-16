import Car from "./Car";

export class BMW extends Car {
  constructor(
    carName: string,
    engineType: string,
    maxSpeed: number,
    mileAge: number,
    protected doorsQuantity: number
  ) {
    super(carName, engineType, maxSpeed, mileAge);
    this.doorsQuantity = doorsQuantity;
  }

  isSuitableBodyType(value: string) {
    let result = 0;
    switch (value) {
      case "coupe":
        result = 2;
        break;
      case "sedan":
        result = 4;
        break;
      case "hatchback":
        result = 3;
        break;
      default:
        throw new Error("Incorrect car body type.");
    }
    return result === this.doorsQuantity
      ? "This car matches your needs."
      : "This car doesn't match your needs.";
  }
}
