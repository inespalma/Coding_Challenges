class Fan {
  #isOn;
  #intensityLevel;

  constructor() {
    this.#intensityLevel = 5;
    this.#isOn = false;
  }

  increaseSpeed() {
    if (this.#intensityLevel < 10) {
      this.#intensityLevel += 1;
    }
  }

  decreaseSpeed() {
    if (this.#intensityLevel > 1) {
      this.#intensityLevel -= 1;
    }
  }

  togglePower() {
    this.#isOn = !this.#isOn;
  }

  get isOn() {
    return this.#isOn;
  }

  get intensityLevel() {
    return this.#intensityLevel;
  }
}

const fan = new Fan();

fan.increaseSpeed();
console.log(fan.intensityLevel);
// Output: 6

fan.increaseSpeed();
console.log(fan.intensityLevel);
// Output: 7

fan.decreaseSpeed();
console.log(fan.intensityLevel);
// Output: 6

fan.decreaseSpeed();
console.log(fan.intensityLevel);
// Output: 5
