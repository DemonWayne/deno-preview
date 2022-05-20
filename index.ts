class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  introduce() {
    console.log(`Hi, ${this.name}`);
  }
}

new Person('DemonWayne').introduce();
