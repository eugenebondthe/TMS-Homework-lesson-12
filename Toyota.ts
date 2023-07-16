import Car from "./Car";

export class Toyota extends Car {
  constructor(
    carName: string,
    engineType: string,
    maxSpeed: number,
    mileAge: number,
    protected horsePower: number
  ) {
    super(carName, engineType, maxSpeed, mileAge);
    this.horsePower = horsePower;
  }
}
