"use strict";
// Task 1: Array Filtering and Mapping
const people = [
    { name: 'MIna', age: 25, gender: 'male' },
    { name: 'Rupa', age: 22, gender: 'female' },
    { name: 'Alice', age: 30, gender: 'female' },
    { name: 'Bob', age: 27, gender: 'male' }
];
const filterAndMap = (arr) => {
    return arr
        .filter(person => person.gender !== 'female')
        .map(person => person.name);
};
console.log('Filtered Male Names:', filterAndMap(people));
const books = [
    { title: "Javasrcipt Promblem solving 1", author: "Pritom", year: 2021 },
    { title: "Javasrcipt Promblem solving 2", author: "Mina", year: 2019 },
    { title: "Javasrcipt Promblem solving 3", author: "Rupa", year: 2020 },
    { title: "Javasrcipt Promblem solving 4", author: "Sumi", year: 2022 },
    { title: "Javasrcipt Promblem solving 5", author: "Fatima", year: 2023 },
    { title: "Javasrcipt Promblem solving 6", author: "Korim", year: 2018 }
];
const getBookTitles = (bookList) => {
    return bookList.map(book => book.title);
};
console.log("Book Titles:", getBookTitles(books));
// Task 3: Function Composition
const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;
// Compose: square -> double -> add 5
const composedFunction = (num) => {
    const squared = square(num);
    const doubled = double(squared);
    const finalResult = addFive(doubled);
    return finalResult;
};
console.log("Composed Result (for 3):", composedFunction(3));
// Task 7: Unique Values
const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 6];
const getUniqueValues = (arr) => {
    return Array.from(new Set(arr));
};
const uniqueNumbers = getUniqueValues(numbers);
console.log("Unique Numbers:", uniqueNumbers);
// Task 8: Find Maximum Value
const findMaxValue = (arr) => {
    return Math.max(...arr);
};
const num = [23, 89, 12, 67, 45, 90, 33];
const maxValue = findMaxValue(num);
console.log("Maximum Value:", maxValue);
