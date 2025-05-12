"use strict";
// Task 1: Array Filtering and Mapping
const people = [
    { name: 'John', age: 25, gender: 'male' },
    { name: 'Jane', age: 22, gender: 'female' },
    { name: 'Alice', age: 30, gender: 'female' },
    { name: 'Bob', age: 27, gender: 'male' }
];
const filterAndMap = (arr) => {
    return arr
        .filter(person => person.gender !== 'female')
        .map(person => person.name);
};
console.log('Filtered Male Names:', filterAndMap(people));
