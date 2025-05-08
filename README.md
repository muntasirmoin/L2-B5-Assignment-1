# 1. What are some differences between interfaces and types in TypeScript?

## Differences between interfaces and types in TypeScript

- The interface is a way to define the structure of an object. <br/>
  A type is like a label that describes the shape of data such as string, number, boolean etc.

- Interface is less flexible compared to type.

- Use interface for defining object shapes. <br/>
  Use type for unions, intersections, and complex type manipulations.

# 2. What is the use of the keyof keyword in TypeScript? Provide an example.

## keyof keyword

In TypeScript the keyof keyword is a type of operator. keyof keyword is used to extract the key type from an object type.

### Example

```
type Book = {
    title: string;
    author: string;
    year: number;
};

type BookKeys = keyof Book;
// BookKeys is "title" | "author" | "year"
```

# 3. Explain the difference between any, unknown, and never types in TypeScript.

## Difference between any, unknown, and never types in TypeScript

- In type any, Any value can be assigned to a variable any. </br> Type unknown use when we don't know the type & want to ensure type safety. </br> Type never is commonly used for functions indicating that never return a value.

- Example: </br>

  - any

  ```
    let input: any = 42;
    input = "42"
  ```

  - unknown

  ```
  let input : unknown = "Bangladesh"

  ```

  - never

  ```
    function input (input: string) : never {

    }
  ```

# 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

## Use of enums :

- enums allow to define a set of named constants. Using enums improve readability, type safety & maintainability of code. TypeScript provides both numeric & string based enums.
- Example of a numeric & string enum :

  ```
   //numeric
   enum Input {
          Zero,
          One,
          Two,
  }

  let num: Number = Input.One;
  console.log(num); //Output: 1
  ```

```
// string

enum Input {
Zero,
One,
Two,
}

let num: Input = Input.One;
console.log(Input[num]); //Output: One


```

# 7. Provide an example of using union and intersection types in TypeScript.

## Union

A union type describes a value that can be one of several types. We use the vertical bar (|) to separate each type, so number | string | boolean is the type of a value that can be a number, a string, or a boolean.
Union types in TypeScript allow us to define a variable or parameter that can hold values of multiple types.

### Example:

````

type student = {
id: number;
name:string;
gender: 'male' | 'female';
bloodGroup: 'O+' | 'A+' | 'A-';
}

    const Student_1 : student = {
        id: 12,
        name: 'Muntasir Moin Chowdhury',
        gender: 'male',
        bloodGroup: 'A+'
    }

    ```

````

## Intersection

Intersection types are closely related to union types, but they are used very differently. An intersection type combines multiple types into one. An intersection type creates a new type by combining multiple existing types. The intersection type is made using the '&' operator.

### Example

```

type Student = {
id: number;
name: string;
}

type Course = {
course: string;
}

type StudentCourse = Student & Course;

const studentActiveCourse: StudentCourse = {
id: 1,
Name: 'Muntasir',
course: "Math'

}

```

```

```

```

```
