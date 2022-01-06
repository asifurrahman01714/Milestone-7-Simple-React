const nums = [10, 20, 30, 40, 50, 10,5,5];
const result = nums.filter(num => num > 20);
console.log(result);

const seeIndex = nums.indexOf(30);
console.log(seeIndex);

const filterSameValues = nums.filter((num, index) => {
    console.log(num, nums.indexOf(num), index)
    return nums.indexOf(num) === index;
});
console.log(filterSameValues);