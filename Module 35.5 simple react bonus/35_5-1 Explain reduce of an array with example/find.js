const nums = [10, 20, 30, 40, 50];
const result = nums.find(num => num > 20);
console.log(result);

const students = [
    { id: 1, name: "Tuan" },
    { id: 2, name: "Tuan2" },
    { id: 3, name: "Tuan3" },
    { id: 4, name: "Tuan4" },
]
const findStudent1 = students.find(student => student.id === 2);
console.log(findStudent1);

const findStudent2 = students.find(student => student.name === 'Tuan3');
console.log(findStudent2);