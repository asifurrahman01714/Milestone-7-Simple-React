const name ="asi f";
const nameToArrayConvertion = name.split("");

// Converting the string to an Array
console.log(nameToArrayConvertion);

// Declaring a blank Array
const newArray=[];
for (let i = (nameToArrayConvertion.length - 1); i > -1; i--) {
    const element = nameToArrayConvertion[i];
    if(element !== " "){
        // Pushing or Input the element to the blank newArray reversely
        newArray.push(element);
    }
}
// Checking the newArray. Now there is no space in the array
console.log(newArray);

// Converting array elements to lower case
const myNumber = newArray[1].toLowerCase();
console.log(myNumber)
if(myNumber === "a" || myNumber === "e" || myNumber === "i" || myNumber === "o" || myNumber === "u"){
    console.log("Yes")
}
else{
    console.log("No")
}
