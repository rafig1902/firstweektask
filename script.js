////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result
 let  w = 12 
      y = 8  
console.log(w * y); 
// Second way
let result1 = 12 * 8
console.log(result1);

// 2.Divide 10 by 2 add result to variables x, and console x:
 let result2 = 10 / 2
  x = result2 
  console.log(x);
  // 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.
 let num1 = 20
  num2 = 17 
  console.log(num1 + num2);
/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

  let firstname = 'Rafig'
      surname = 'Mammadzada'
      birth = '2003'
     
      let info = [firstname,surname,birth]

      console.log(info);
// 5.Console the remainder(%) when 17 is divided by 12.

let num3 = 17
  num2 = 12

console.log(num3 % num2);
console.log(17 % 12);
// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again and reassign value Gence,console result
let cityName = 'Baku'
   cityName = "Ganca"
   console.log(cityName);

   ////// TASK 2 //////////////

// let a = 1, b = 1;
// let c = ++a;  
// let d = b++;

// console.log(c); // ?
// console.log(d); // ?
// console.log(b); // ?


   
         // qisa olaraq desek c -nin qiymeti teyin olunanda a nin uzerine 1 gelinir sora teyin olunur yeni 1+1   
       // burda ise d -nin qiymeti teyin olunanda b nin qiymeti verilir daha sonra b nin qiymetinin uzerine 1 gelinir 
       // c=2(a+1),d=1(b), b nin qiymeti dye teyin olunandan sora uzerine bir gelinir.
   
   
    ////////////// TASK 3 //////////////

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // ?  -- cavab 5 di *= isaresi o demekdiki anin qiymetini 2 ye vur ve alinan qiymeti yeni a deyisenini qiymeti teyin ele neticede a deyisenin qiymeti 4 olur x daki +1 eliyir 5


////////////// TASK 4 //////////////

// console.log('test1', test); // ?  -- islemez cunki test deyiseni belirlememisiy
// {
//     let test = "something"
//     console.log('test2', test); // ?  -- test2 stringdi zaten testdeki something qaytaracaq
// }
// console.log('test3', test);  // ?  -- islemez test teyin olunmayib (yuxarda teyin olunan scope icersindedir deye bura aidiyyati yoxdur)


// console.log('test1', test);  // ? -- islemez test variabli yoxdu
// {
//     var test = "something"
//     console.log('test2', test); // ? --something cixardacaq test i onsuz stringdi
// }
// console.log('test3', test); // ?  -- buda cixardacaq eyni seyi cunki var scope zad tanimir.


////////////// TASK 5 //////////////

//Find the type of all the following cases

// let name = "Ulfat" - string
// let surname = Zakirli - (zakirli deyiseni teiyn olunmuyub )
// let year = 2000 --number
// year = "2000" --string
// let city;  --undefined
// let qualification = null -- null
// let obj = { name: 'ulfat' } --object
// let arr = ['a', 'b', 'c']   --object (array)

////////////// TASK 6 //////////////
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'
 
let sum = 0
const result11 = arr1.map((item)=> sum = sum + item)
console.log(result11);
console.log(sum);
// 2.Add two numbers (10,88) to end of arr1 (push methods)

arr1.push(10,88)
console.log(arr1);
//3.Remove first two numbers from arr1
arr1.shift()
arr1.shift()
console.log(arr1);
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
arr1.unshift(0,9,11)
console.log(arr1);
// 5.Remove four numbers in front of arr1(shift)
arr1.shift()
arr1.shift()
arr1.shift()
arr1.shift()
console.log(arr1);


////////////// TASK 7 //////////////

const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// 1.Console values from "Rufet" to "Fuad"
const cavab = arr2.filter((item,index) => index > 1 )
console.log(cavab);
// 2.Change Gulshen to Rovshen
const index = arr2.indexOf('Gulshen');
if (index !== -1) {                              //burda biraz internetden komey aldim bele sey elediyimizi xatrlamadim videolardada tapa bilmedim.
  arr2[index] = 'Rovshen'
}
console.log(arr2);

// 3.Console each name with map
 
arr2.map(item => console.log(item));

// 4.Console only names which is Anar
const nameanar = arr2.filter((item,index) => item == 'Anar')
console.log(nameanar);

// 5.Console all names where name is Anar change it to "Perviz"
const newArr = arr2.map(name => (name === "Anar" ? "Perviz" : name));
console.log(newArr);                                                     //burdada :(((
  // 6.Console second to last value of arr2
  const cavab99 = arr2.filter((item,index) => index >= 1)
  console.log(cavab99);
  // 7.Console length of arr2
  console.log(arr2.length);



////////////// TASK 8 //////////////
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// (use typeof), like this: filter((item) => typeof item === 'string')

// 1.Show only numbers

const netice = arr3.filter((item,index) => typeof item === 'number')
console.log(netice);

// 2.Show only true values
const bic = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false];

const trueValues = arr3.filter(item => item);

console.log(trueValues);
// 2.Show only false values

const falseValues = arr3.filter(item => !item);

console.log(falseValues);
// 4.Show only strings
const netice15 = arr3.filter((item,index) => typeof item === 'string')
console.log(netice15);

////////////// TASK 8 //////////////
const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)

const evennum = numbers.filter((item,index) => item % 2 == 0)
console.log(evennum);


// 2.Console (only odd numbers)
const oddnum = numbers.filter((item,index) => item % 2 != 0)
console.log(oddnum);




////////////// TASK 9 //////////////
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]

const newarray = arr4.filter((item,index) => typeof item == 'number')
console.log(newarray);
const newarray1 = newarray.map((item,index) => item + 10)
console.log(newarray1);

const newarray3 = arr4.filter((item,index) => typeof item == 'string')
console.log(newarray3);
const newarray4 = newarray3.map((item,index) => item + ' is string')
console.log(newarray4);

const newarray33 = arr4.filter((item,index) => item = !item )
console.log(newarray33);
const newarray55 = newarray33.map((item,index) => item + ' is a falsy values')
console.log(newarray55);

const finalarray = newarray1 + " " + newarray4 + " " + newarray55 
console.log(finalarray);



// 2.Sum all numbers of arr4
let summ = 0

const cemi = newarray1.map((item,index) => summ = summ + item)
console.log(summ);

// 3.Count only the values that are true

const array = arr4.filter((item,index) => item = item)
console.log(array);

// 4.Count only the values that are string
const stringarray = arr4.filter((item,index) => typeof item == 'string')
console.log(stringarray);

// 5.Count only the values that are false

const false1 = arr4.filter((item,index) => item = !item)
console.log(false1);


////////////// TASK 10 //////////////
// 1.Create a object add your name, surname, age and city.
// 2.Then change name to "Jhon"

const obj = {
  email: 'ulfat@gmail.com',
  info: {
      gender: 'Male',
      loc: {
          city: "Baku",
          street: 'Nizami 22',
          education: {
              "uni name": "ADNSU",
          }
      }
  }
}

// 3.Console gender

console.log(obj.info.gender);
// 4.Console city
console.log(obj.info.loc.city);
// 5.Console uni name
console.log(obj.info.loc.education);











