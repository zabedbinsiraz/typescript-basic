"use strict";
// let myName:any = "Jabed Hossain"; //type annotation
// let myAge = 27; // type inference result is myAge: number
// myName = 12;
// console.log(myName);
// let country; // by default it is any type
// country =12;
// country =1;
// let isValid: boolean = false;
// isValid = "karim";
// object type variable
// let studentId:string | number = 23223;
// studentId ='w-2322';
// studentId = true; //not allowed
// type SN = string| number; // type alias
// let studentId: SN  = 23223;
// studentId ='w-2322';
// let person:object = {
//     name:'Jabed',
//     age:24,
//     isEmotional:true
// }
// person = {
//     age:3445
// };
// let person : {name:string, age:number, isEmotional:boolean} = {
// name:  "jabed",
// age:  23,
// isEmotional:true
// };
// person = {
//     name:'abed',
//     age:534,
//     isEmotional:false
// }
// type PersonType = {name:string, age:number, isEmotional:boolean};
// let person : PersonType  = {
//     name:  "jabed",
//     age:  23,
//     isEmotional:true
//     };
//     person = {
//         name:'abed',
//         age:534,
//         isEmotional:false
//     }
// interface Person {
//      name:string;
//      age:number;
//      hobby?:string; // ? is used for optional property in an object
// }
// let person : Person = {
//     name: 'jabed',
//     age:44
// }
//Array type
// const numbers : number = [2,2,3,43]; //wrong type
// const numbers : number[] = [2,2,3,43]; //right type
// const numbers : any[] = [2,2,3,43]; //right type
// const numbers : (number | string)[] = [34,'kabul']; //right code
// const persons : object[] = [
//     {
//         name:'kabed',
//         age:77,
//         hobby:'yes' 
//    },
//     {
//         name:'nabed',
//         age:78,
//         hobby:'no' 
//    },
//     {
//         name:'abed',
//         age:97,
//         hobby:'yes' 
//    },
// ];
//functions
// const greeting = (name:string):void =>{
//     console.log(`Hello ${name}`);
// }
// greeting('zabed');
// const add = (a:number, b:number) => {
//     return `the result ${a+b}`; // wrong
//     // return a+b; //right
// }
// console.log(add(2,3));
// const add = (a:string, b:string) => {
//     return `the result ${a+b}`; // wrong
//     // return a+b; //right
// }
// interface Person {
//     name:string;
//     age:number;
//     hobby?:string; // ? is used for optional property in an object
// }
// const introduce  = (person:Person):void =>{
//     console.log(`Hello, ${person.age} years old ${person.name}`)
// }
// introduce({
//     name:'jabed',
//     age:33
// });
//literal type(fixed value type)
// type Direction = 'left' | 'right';
// let gameDirection : Direction = "right";
// const getArray = (arr:string[]) => {
//     return arr;
// }
// getArray(['kaka']);
//Dynamic type accepting or Generics
// const getArray = <T> (arr:T[]): T[] =>{
//     return arr;
// }
// getArray <string>(['ami', 'r', 'tmi']);
// getArray<number>([1,2,3]);
// const getArray = <T,W> (arr:(T | W)[]): (T|W)[] =>{
//     return arr;
// }
// getArray <string, number>(['ami', 'r', 120]);
//enum type
// name const say.....
// enum Week {
//     sat,
//     sun,
//     mon,
//     tue,
//     wed,
//     thu,
//     fri
// }
// console.log(Week.mon); // expected result is 2
// enum Week {
//     sat='SAT',
//     sun="SUN",
//     mon="MON",
//     tue='TUE',
//     wed="WED",
//     thu="THU",
//     fri="FRI"
// }
// console.log(Week.mon); // expected result is MON
