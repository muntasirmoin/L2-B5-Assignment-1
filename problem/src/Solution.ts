// problem 1
{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    }
    return input.toUpperCase();
  }

  const result = formatString("Hello");
  const result2 = formatString("Hello", true);
  const result3 = formatString("Hello", false);

  console.log(result);
  console.log(result2);
  console.log(result3);
}

// problem 2
{
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
  const result = filterByRating(books);
  console.log(result);
}

// problem 3
{
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
  }

  const result1 = concatenateArrays(["a", "b"], ["c"], ["E"]);
  const result2 = concatenateArrays([1, 2], [3, 4], [5]);

  console.log(result1);
  console.log(result2);
}

// problem 4
{
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
  const result1 = myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
  const result2 = myCar.getModel(); // Output: "Model: Corolla"
  console.log(result1);
  console.log(result2);
}

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
  const result1 = processValue("hello"); // Output: 5
  const result2 = processValue(10); // Output: 20
  console.log(result1);
  console.log(result2);
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

  const result1: Product[] = [
    { name: "Pen", price: 12 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];
  console.log(getMostExpensiveProduct(result1));
}

// problem 7

{
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

  const result1: string = getDayType(Day.Monday);
  const result2: string = getDayType(Day.Sunday);
  const result3: string = getDayType(Day.Wednesday);
  const result4: string = getDayType(Day.Saturday);
  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
}

//problem 8
{
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

  squareAsync(4)
    .then((result) => console.log(result))
    .catch((error) => console.error(error.message));

  squareAsync(-1)
    .then((result) => console.log(result))
    .catch((error) => console.error(error.message));
}
