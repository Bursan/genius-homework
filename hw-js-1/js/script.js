// Домашня робота

//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

//Відпоідь №1
// let name = "Іван";
// let city = "Краматорськ";
// city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); //
// console.log(`привіт ${"name"}`); //
// console.log(`привіт ${name}`); // ?

//Відпоідь №2
// привіт 1
// привіт name
// привіт Olga

//*** 3 ***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

//Відпоідь №3
// console.log(typeof Number(a));
// console.log(typeof parseInt(b));
// console.log(typeof parseFloat(c));

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

//Відпоідь №4
// let a = 0.1;
// let b = 0.2;
// let c = (a * 10 + b * 10) / 10;
// console.log(c);
//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

//Відпоідь №5
// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

//Відпоідь №6
// console.log(Math.random() * (4 - 2) * 2);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

//Відпоідь №7
// console.log(message.length);

//***8**
//вивести в консоль message великими літерами

//Відпоідь №8
// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

//Відпоідь №9
let user = {};
user.name = "Oleksandr";
user.age = 34;
user.city = "Kramatorsk";
console.log(user);
delete user.city;
user["like flowers"] = false;
console.log(user);

//***10**
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта

//Відпоідь №10
for (key in user) {
  console.log(key);
}
