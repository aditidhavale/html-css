//1chap-var & data types
console.log("Aditi Dhavale");
console.log("Hello")
// variables-declared using var-old method , let , const keywords
let age=20;
console.log(age)
let price=99.9
console.log(price)
isFollow=true
console.log(isFollow)
//Data types=number,string,boolean,undefined,null,BigInt,Symbol(Primitive data types)other is non-primitive ex-object
let x;
let y=BigInt(123)
let z=Symbol("hello")
//object data type-key:value pair
const student ={//student=object name
    fullName:"Aditi",
    age : 20,
    cgpa : 8.31,
    isPass:"Pass"
};
console.log(student);
//2 methods to access values using keys
console.log(student["age"])
console.log(student.fullName)
student.age=student.age + 1
console.log(student);


//chap2-operators & conditional statements
//1-Arithmetic operators-> +,-,*,/,modulo(%),exponent(**),Increment,Decrement
let a=8;
let b=10;
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a%b=",a%b)
console.log("a**b=",a**b)
console.log("a=",++a)
console.log("a=",a--)
//2-Assignment-> =,+=,-=,*=,%=,**=
let c=6;
console.log("c=",c+=4)
console.log("c=",c-=4)
console.log("c=",c*=4)
console.log("c=",c%=4)
console.log("c=",c**=4)
//3-Comparison-> ==,!=,>,>=,<,<=
let u=8;
let v=7;
console.log(u==v)
console.log(u!=v)
console.log(u>=v)
console.log(u>v)
console.log(u<=v)
console.log(u<v)
//4-logical-> &&,||,!
let cond1=a<b;//true
let cond2=a===8//true
let cond3=b===4//false
console.log("and=",cond1&&cond2)
console.log("or=",cond1||cond3)
console.log("not=",!(cond1))
//if 
let age2=25;
if(age2 > 18){
    console.log("you can vote")
}
//if-else
let mode="dark";
let color;
if(mode=="dark"){
    color="black";
}
else{
    color="white"
}
console.log(color)
//else-if
let mode2="blue";
let color2;
if(mode2=="dark"){
    color2="black";
}
else if(mode2=="blue"){
    color2="blue";
}
else if(mode2=="pink"){
    color2=="pink";
}
else{
    color="white";
}
console.log(color2)
//ternary operator
let result=age2>=18?"adult":"not adult"
console.log(result)

//chap-3 Loops & Strings
//for loop
for(let i=1;i<=5;i++){
    console.log("Aditi!")
}
let sum=0;
for(let i=0;i<=5;i++){
    sum=sum+i;
}
console.log("sum=",sum)
//while loop
let j=1;
while(j<=5){
    console.log("j=",j)
    j++;
}
//do-while loop
let k=11;
do{
    console.log("k=",k)
    k++;
}
while(k<=15);
//for-of loop(used for string & arrays)
let str="Aditi";
let size=0;
for(let s of str){
    console.log("s=",s);
    size++;
}
console.log(size)
//for-in loop(used for objects & arrays)
let students = {
    name:"Aditi",
    age:20,
    cgpa:8.2,
    isPass:true,
};
for (let t in  students) {
    console.log(t,students[t]);
}
//Strings
let string="AditiGaneshDhavale"
console.log(string.length)
console.log(string[6])
//Template literals->special type of strings
let splString=`This is a template literal`
console.log(splString)
let obj={
    item:"pen",
    price:10,
};
console.log("the cost of",obj.item,"is",obj.price,"rupees")//lengthy one , so we can make it simpler by using template literal
let output=`the cost of ${obj.item} is ${obj.price} rupees`//using template literal
console.log(output)
//string methods(block of code that does work which is alloted to it) i.e string functions
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.trim())//removes whitespaces
console.log(string.slice(0,5))//ending index is not included means it will give till 4 index only
console.log(string.concat(str))
console.log(string.replace("Aditi","Apurva"))
console.log(string.charAt(9))

//chap-4  Arrays-collection of items
let marks=[23,45,67,89,46,78,37,84]
console.log(marks)
console.log(marks[5])
marks[5]=80
console.log(marks)
for(let idx=0;idx<marks.length;idx++){
    console.log(marks[idx])
}
for(let element of marks){
    console.log(element)
}
let cities=["ichalkaranji","satara","mumbai","pune","sangali","miraj"]
for(let city of cities){
    console.log(city.toUpperCase())
}
//array methods
console.log(cities.push("kolhapur"))//add items at end
console.log(cities)
console.log(cities.pop())//removes item from last & return it
console.log(cities.toString())
console.log(cities.concat(marks))
console.log(cities.unshift("banglore"))
console.log(cities)//add items at starting
console.log(cities.shift())//delete items at start
console.log(cities.slice(0,4))
console.log(cities.splice(2,3,101,102))
console.log(cities)

//chap-5 Functions(block of code that performs specific task & can be invoked whenever needed)
function myFunction(){//func definition
    console.log("Welcome")
    console.log("We are learning Java Script")
}
myFunction()//func call or func invoke
myFunction()
function addition(x,y){//parameters or arguments are passed
    let add=x+y;
    console.log(add)
}
addition(10,10)
//arrow functions-compact way of writing func & they are part of modern Js
const arrowSum=(a,b)=>{
    console.log(a+b)
}
arrowSum(11,23)
//for - each loop in arrays
//call-back is a func that is passed as an argument to another function
let arr=[1,2,3,4,5,6,7,8,9]
// arr.forEach(function printVal(val){
//     console.log(val)
// } )
arr.forEach((val)=>{
    console.log(val)
})
//more array methods-part pf modern JS(map,filter,reduce)
let num=[45,67,39,76,87,44,98]
num.map((val)=>{//similar to for-each but difference is , this method return new array & for-each does not return new array
    console.log(val)
})
let newArr=num.map((val)=>{
    return val*val
})
console.log(newArr)
let evenArr=num.filter((val)=>{//according to condition it gives new array
    return val%2==0
})
console.log(evenArr)
const finalArr=num.reduce((res,curr)=>{//perform operation on array & returns single value  means we can calculate sum,avg,max element etc.
   return res+curr
})
console.log(finalArr)
const Maxelement=num.reduce((prev,curr)=>{
    return prev>curr ? prev:curr
})
console.log(Maxelement)