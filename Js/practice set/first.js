//P set=1 create const object called product to store info shown in picture
//2. create const object called profile to store nfo given in picture
const product ={
    name : "Parker Jotter Standard Ball Pen",
    price : 270,
    rating : 4.5,
    offer : 5
};
console.log(product)
const profile = {
    name : "Aditi",
    followers:567,
    following:58,
    isFollow:true
};
console.log(profile)
console.log(typeof profile.name)

//set2 1.get input a no. using prompt(enter a no.).check if no. is multiple of 5 or not
//2.give grade to students according to marks
//  let number=prompt("enter the number")
// if (number%5==0){
//     console.log("it is multiple of 5")
// }
// else{
//     console.log("not multiple")
// }
// let score=prompt("enter students marks")
// if(score>90 && score<100){
//     console.log("grade=A")
// }
// else if(score>70 && score<89){
//     console.log("grade=B")
// }
// else if(score>60 && score<69){
//     console.log("grade=C")
// }
// else if(score>50 && score<59){
//     console.log("grade=D")
// }
// else if(score>0 && score<49){
//     console.log("grade=F")
// }
// else{
//     console.log("enter valid marks")
// }

//set-3 1.print all even no. from 0 to 100
//2.create a game & ask user to keep guessing game no. unitl user enters correct value
for(let num=0;num<=100;num++){
     if(num%2==0){
        console.log(num)
     }
}
// let gameNum=11;
// let userNum=prompt("guess the game number:")
// while(userNum != gameNum){
//     userNum= prompt("Wrong number!Guess again")
// }
// console.log("You entered the right number")


//set-4 1.prompt user to enter full name.make the name in format "@aditidhavale02"
//let string=prompt("enter your full name:")
//console.log("@"+ string + string.length)

//set-5 1.[85,97,44,37,76,60]find average
//2- items=[250,645,300,900,50].all items have 10% offer.change array to store final price after applying offer 
let marks=[85,97,44,37,76,60]
let sum=0;
for(let val of marks){
    sum=sum+val;
}
console.log("average=",sum/marks.length)
let items=[250,645,300,900,50]
let i=0;
for(let val of items){
    console.log(`value at index ${i}=${val}`)
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after applying offer=${items[i]}`)
    i++;
}                                   
let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
console.log(company.shift())
console.log(company.splice(1,1,"Ola"))
console.log(company)
console.log(company.push("Amazon"))
console.log(company)

//set-6 1.create a func that takes string as a argument & returns no. of vowels in string
//2.create arrow func for the same 
function vowels(str){
     //  let count=0;
    //    for(let char=0; char<str.length; char++){
    //     console.log(str[char])
    //     count++;
    let count=0;
    for(const char of str){
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"||char=="A"){
            count++;
        }
    }
 console.log(count)
}
vowels("Aditi")
const countVow=(str)=>{
    let count=0;
    for(const char of str){
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"||char=="A"){
            count++;
        }
    }
 console.log(count)
}
countVow("aaradhya")
let num=[4,8,2,9,6,4]
num.forEach((num)=>{
    console.log(num*num)
})

//set-8 1.array of marks.filter marks 90+
//2.take "n" i/p from user.create array from 1 to n.calculate sum & product of array elements using reduce method
let studMarks=[45,67,28,95,56,98,51,93,64,96]
let finalArr=studMarks.filter((val)=>{
    return val>90
}) 
console.log(finalArr)
let n=prompt("enter a number=");
let arr=[];
for(let l=1; l<=n; l++){
    arr[l-1]=l;
}
console.log(arr);
const sumArr=arr.reduce((prev , curr)=>{
    return prev+curr
})
console.log(sumArr)
const prodArr=arr.reduce((prev , curr)=>{
    return prev*curr
})
console.log(prodArr)