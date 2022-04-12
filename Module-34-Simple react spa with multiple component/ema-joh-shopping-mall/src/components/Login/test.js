const name ="asi f";
const nameToArrayConvertion = name.split("");

console.log(nameToArrayConvertion);

const newArray=[];
for (let i = (nameToArrayConvertion.length - 1); i > -1; i--) {
    const element = nameToArrayConvertion[i];
    if(element !== " "){
        newArray.push(element);
    }
}
console.log(newArray);

const myNumber = newArray[1].toLowerCase();
console.log(myNumber)
if(myNumber === "a" || myNumber === "e" || myNumber === "i" || myNumber === "o" || myNumber === "u"){
    console.log("Yes")
}
else{
    console.log("No")
}
