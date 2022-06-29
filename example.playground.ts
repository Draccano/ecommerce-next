
// interface Person {
//     name: string
//     age: number
// } 
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }
} 
// type Person = {
//     name: string,
//     age: number
// }

type PersonLoggerFn = 
  (name: string, age?: number) => string


export default function play() {
    const name: string = "Filip";
    const age: number = 30;

    const person: Person = {
        name: "John",
        age: 34
    }

    const logPersonInfo: PersonLoggerFn = (
      personName: string,
      personAge: number = 0
    ): string => {
      const info = 'Name: ' + personName + ', age: ' + personAge;
      console.log(info);
      return info;
    };

    function logPersonInfo2(person: Person) {
      const info = 'Name: ' + person.name + ', age: ' + person.age;
      console.log(info);
      return info;
    }

    const person = new Person("Edward", 40)

    const log = logPersonInfo(name, age);
    logPersonInfo2(person);

}