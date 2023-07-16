export default class Car {
  constructor(
    protected carName: string,
    protected engineType: string,
    protected maxSpeed: number,
    protected mileAge: number
  ) {
    this.carName = carName;
    this.engineType = engineType;
    this.maxSpeed = maxSpeed;
    this.mileAge = mileAge;
  }

  isFastEnough(value: number) {
    try {
      return value <= this.maxSpeed ? true : false;
    } catch {
      throw new Error("The number is not defined");
    }
  }
}
