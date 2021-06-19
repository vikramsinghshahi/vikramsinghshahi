//['Hello', 'World'] will become {0: "Hello", 1: "World"}


/*function arrayToObj(array){
 let final = {};

 for( let i=0; i< array.length; i++ ){
   final[i] = array[i]
 }

 return final

}*/

/*console.log( arrayToObj(['Hello', 'World']))



function arrayToObj(array){
  return array.reduce((acc, cv, index) =>{
    acc[index] = cv

    return acc
  },{})
 
 }*/
 

//["vikram" ,"shahi"] to ["ihahs" ,"markiv"]

//

/*function reverseArray(arr){
  return arr.sort()
}

console.log(reverseArray(["vikram" ,"singh" ,"shahi"]))*/


/* let numbers = [1, 2, 3];




let newNumber = numbers.map((ele) => ele) 

console.log(newNumber);*/


/*let numbers =  [1, 2, 3];

let newNumber = [ ];

for( let number of numbers){
  newNumber.push(number)
}*/




//console.log(i('Programmer'))
//assert.strictEqual(i('Phone'), 'iPhone');
/*(i('Phone'), 'iPhone');
    assert.strictEqual(i('World'), 'iWorld');
    assert.strictEqual(i('Human'), 'iHuman');
    assert.strictEqual(i('Programmer'), 'iProgrammer');*/

    /*The word should not begin with the letter "I", for example Inspire.
The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
The first letter should not be lowercase, for example road.*/


/*function isSameLanguage(list) {

  }


  console.log(isSameLanguage(list1))*/

  /*var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ];


  function isSameLanguage(list) {
    let final = list.map((ele) => ele.language)// ["JavaScript" ,"JavaScript" ,"JavaScript"]
   
      return final.every((ele , i , a ) =>ele ===a[0]);
    
}

  console.log(isSameLanguage(list1))

  //console.log(list1.filter((ele) => ele.language.startsWith("J")))*/

  /*function isAgeDiverse(list) {
    let final = list.map((ele) => ele.age)// [19,29,39,40,59,60]


    return final.every((v,i,a)=>v!==a[0]);
  }
  */


  /*const list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
  ];*/


  
// console.log(isAgeDiverse(list2));
  //console.log(isAgeDiverse(list3));

 /*const list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
  ];

  const list3 = [
    { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
    { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
  ];


  console.log(isAgeDiverse(list2));
 */


/*let newArray = [ 
           { first : "name" , last : "vikram"},
           { first: "shahai" , last : "singh"}

]
console.log( newArray.map((ele) => ele.last))*/

//console.log(list1.filter((ele) =>ele.language == "JavaScript"))


/*let info = [
  {
    employee: 'Nicole',
    total: 13,
    lineItems: {
      elements: [
        {
          name: 'Burger',
          price: 8,
        },
        {
          name: 'Lamb',
          price: 6.5,
        },
      ],
    },
  },
  {
    employee: 'Dan',
    total: 11,
    lineItems: {
      elements: [
        {
          name: 'Lamb',
          price: 4.5,
        },
        {
          name: 'Meatballs',
          price: 6.5,
        },
      ],
    },
  },
];*/

/*let clone = [
  {
    ...info[0],
    lineItems: {
      elements: [
        {
          ...info[0].lineItems.elements[0],
        },
        {
          ...info[0].lineItems.elements[1],
        },
      ],
    },
  },
  {
    ...info[1],
    lineItems: {
      elements: [
        {
          ...info[1].lineItems.elements[0],
        },
        {
          ...info[1].lineItems.elements[1],
        },
      ],
    },
  },
];*/

/*let newInfo =
 [ {...info[0], 
     lineItems : {
       elements : [
         {
           ...info[0].lineItems.elements[0]
         },
         {
           ...info[1].lineItems.elements[1]
         }
       ]
     }  
  } ,

{...info[1] ,
   lineItems : {
     elements : [
       {
         ...info[1].lineItems.elements[0]
       },
       {
         ...info[1].lineItems.elements[1]
       }
     ]
   }
} 
];*/


/*let num = [1, 2, 3 , 5] //log 1, 2, 3, 5

 num[0] = "log1"

console.log(num.toString()) */



/*[1, 3, 4, 5, 6] ==> [1, 3, 4, 5, 6]

.map()


[1, 3, 4, 5, 6] ==> 38
.reduce()

[1, 3, 4, 5, 6] ==> {0: 1, 1: 3, 2: 4, 3: 5, 4: 5, 5: 6}
.reduce()

[1, 3, 4, 5, 6] ==> ['one', 'three', 'four', 'five', 'six']
map()

["work", "touched tree", "pizza", "running", "television"] ==> output is a string // toString()


["work", "touched tree", "pizza", "running", "television"] ==> output is a number// 

["work", "touched tree", "pizza", "running", "television"] ==> output is an object // .reduce

["work", "touched tree", "pizza", "running", "television"] ==> ['w', 't', 'p', 'r', 't'] // .map 

["work", "touched tree", "pizza", "running", "television"] ==> log all the elements of the array*/ 

/*for( i = 0; i< element.length ; i++){
  console.log(element[i]);
}*/

//let element = ["work", "touched tree", "pizza", "running", "television"];

/*for( i = 0; i< element.length ; i++){
  console.log(element[i]);
}*/

/*function solution(str, ending){
 if(str.split("").pop() === ending.split("").pop() ){
   return true
 }else { return false}

}*/

/*function solution(str, ending){
  return str.endsWith(ending)
 
 }
*/
//console.log(solution('abcde', 'cde'))//, true)
//console.log(solution('abcde', 'abc'))//, false)
//console.log(solution('sumo', 'omo'))//

/*function addArrays(array1, array2) {
  if( array1.length !== array2.length ){
    return Error()
  }else {
    let final = array1.map((num, idx) => {
      return num + array2[idx];
     } )
  
   return final
  } 
};

  console.log(addArrays([4,5],[2,5,4,5])); */

 /* function generateShape(integer){
    let string = "";
   for (let i = 1; i <= integer; i++) { // external loop
     for (let j = 0; j < integer; j++) { // internal loop
       string += "+";
     }
     string += "\n";
   }
   let newString = string.slice(0, -1);

     return newString
   }

   console.log(generateShape(3))*/

//et numbers = [1, 2,3,4,5,6]


  // let let evenArr = []

  /*for(let i = 0 ; i< numbers.length ; i++){
    if( i % 2 == 0){
      let evenArr.push(numbers[i])
    }
  }

  console.log(let evenArr)*/


  
 // function name(arg1, arg2){
  //code
  //}

/*let evenArr = [2, 4, 6]

lastNum = 3

sum =[]
   
  for( let i =0 ; i< evenArr.length; i++){
    sum.push(lastNum* evenArr[i])
  }

  console.log(sum)


  var name = 10;
  var name2 = 2;
  var name3 = 3;
  var name4 = 4;
  var name5 = 5;
  var name6 = 6;
  var name = 10;

  
 
 
 function name(arg1, arg2){
 //code
 } */


/* let nameNewArr = [{ first: "vikram" , last : "shahi"},
             { first: "rahul" , last : "tyagi"}  ];*/

let users = [ {first : "Arya", age : 18 },
              {first: "Raj", age : 25 }]

/*for(let i=0; i< users.length ; i++ ){
  console.log(users[i].first)
  console.log(users[i].age)
};


for(let i=0; i< users.length ; i++ ){
  console.group(users[i].first)
  console.log(users[i].first)
  console.log(users[i].age)
  console.groupEnd()
}; */



/*console.time("creatingData");

var data = [];

for(let i=0 ; i < 100000000; i++){
  data.push(i);
}

console.timeEnd("creatingData");*/

/*console.log("Hello %cWorld!" ,"color:tomato; font-size : 30px; background: black")*/

//console.dir(users)

/*var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];


var answer = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];


function greetDevelopers(list) {

  final = list.map((ele) => {
    ele.greeting = 'Hi Sofia, what do you like the most about Java?'

    return ele;
  }
}





console.log(greetDevelopers(list1)) */



/*if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/

function bmi(weight, height) {
  let BMI = (weight/height**2)
  
  if( BMI <= 18.5){
    return "Underweight"
  } else if (BMI <= 25.0){
    return "Normal"
  }else if (BMI  <= 30.0){
    return "Overweight"
 }else if (BMI > 30 ){
  return "Obese"
} else {
  return "enter a valid number"
}

}
 console.log(bmi(80, 1.80))