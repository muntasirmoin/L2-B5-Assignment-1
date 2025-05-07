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

````
 type Student = {
       id: number;
       name: string;
   }

   type Course = {
       course: string;
   }

   type StudentCourse = Student & Course;

   const studentActiveCourse: StudentCourse  = {
       id: 1,
       Name: 'Muntasir',
       course: "Math'

   }
   ```
````
