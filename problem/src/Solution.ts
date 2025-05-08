// problem 1

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
}

console.log("Problem 1");
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));

// problem 2

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const result = items.filter((items) => items.rating >= 4);

  return result;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log("Problem 2");

console.log(filterByRating(books));

// problem 3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

console.log("Problem 3");
console.log(concatenateArrays(["a", "b"], ["c"], ["E"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

// problem 4

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log("Problem 4");
console.log(myCar.getInfo());
console.log(myCar.getModel());

//problem 5

{
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value * 2;
    }
    return 0;
  }

  console.log("Problem 5");
  console.log(processValue("hello"));
  console.log(processValue(10));
}

// problem 6
{
  interface Product {
    name: string;
    price: number;
  }
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }

    return products.reduce((maxProduct, currentProduct) => {
      return currentProduct.price > maxProduct.price
        ? currentProduct
        : maxProduct;
    });
  }

  console.log("Problem 6");
  console.log(
    getMostExpensiveProduct([
      { name: "Pen", price: 12 },
      { name: "Notebook", price: 25 },
      { name: "Bag", price: 50 },
    ])
  );
}

// problem 7

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

console.log("Problem 7");
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));

//problem 8

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error("Error: Negative number not allowed"));
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
}
console.log("Problem 8");
squareAsync(4)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));

squareAsync(-1)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
