const companyPersons = [
    {name: 'John', salary: 100},
    {name: 'Mary', salary: 200},
    {name: 'Peter', salary: 300}
];

const totalSalary = companyPersons.reduce((sum, person)=>sum+ person.salary, 0);
console.log(totalSalary);