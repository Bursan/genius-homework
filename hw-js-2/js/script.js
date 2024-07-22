/*Домашнє завдання*/

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
// let userNumber = parseInt(prompt("Введіть число від -10 до 10:"));
// while (isNaN(userNumber)) {
//   alert("Ви ввели не число, спробуйте ще раз:");
//   userNumber = parseInt(prompt("Введіть число від -10 до 10:"));
// }
// while (userNumber <= -10 || userNumber >= 10) {
//   alert("Ви ввели число відмінне від від -10 до 10, спробуйте ще раз:");
//   userNumber = parseInt(prompt("Введіть число від -10 до 10:"));
// }
// if (userNumber > 0) {
//   console.log(true);
// } else if (userNumber < 0) {
//   console.log(false);
// } else {
//   console.log(userNumber);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true
// let word = "test";
// console.log(typeof word);
// console.log(word);
// test = "qwerty";
// console.log(typeof word);
// console.log(word);
// test = true;
// console.log(typeof word);
// console.log(word);

// let userText = prompt("Введіть слово").toLocaleLowerCase();
// if (userText === "test") {
//   console.log(true);
//   alert(true);
// } else {
//   console.log(false);
//   alert(false);
// }
// не зрозумів до кінця що бажають в цьому завданні

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.
// let userNumber = parseFloat(prompt("Введіть число:"));
// while (isNaN(userNumber)) {
//   alert("Ви ввели не число, спробуйте ще раз:");
//   userNumber = parseFloat(prompt("Введіть число:"));
// }
// if (userNumber < 10) {
//   userNumber += 5;
//   console.log(userNumber);
// } else if (userNumber > 10) {
//   userNumber -= 5;
//   console.log(userNumber);
// } else {
//   console.log(userNumber);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// let fixRandomNumber = parseFloat(prompt("Веедіть число від 1 до 12:"));
// while (fixRandomNumber <= 0 || fixRandomNumber >= 12) {
//   alert("Ви ввели число відмінне від від 1 до 12, спробуйте ще раз:");
//   fixRandomNumber = parseFloat(prompt("Веедіть число від 1 до 12:"));
// }
// while (isNaN(fixRandomNumber)) {
//   alert("Ви ввели не число, спробуйте ще раз:");
//   fixRandomNumber = parseFloat(prompt("Веедіть число від 1 до 12:"));
// }
// while (!Number.isInteger(fixRandomNumber)) {
//   alert("Ви ввели не ціле число, спробуйте ще раз:");
//   fixRandomNumber = parseFloat(prompt("Веедіть число від 1 до 12:"));
// }
// let mounth;
// switch (fixRandomNumber) {
//   case 1:
//     mounth = "Січень";
//     alert(`Це ${mounth}`);
//     break;
//   case 2:
//     mounth = "Лютий";
//     alert(`Це ${mounth}`);
//     break;
//   case 3:
//     mounth = "Березень";
//     alert(`Це ${mounth}`);
//     break;
//   case 4:
//     mounth = "Квітень";
//     alert(`Це ${mounth}`);
//     break;
//   case 5:
//     mounth = "Травень";
//     alert(`Це ${mounth}`);
//     break;
//   case 6:
//     mounth = "Червень";
//     alert(`Це ${mounth}`);
//     break;
//   case 7:
//     mounth = "Липень";
//     alert(`Це ${mounth}`);
//     break;
//   case 8:
//     mounth = "Серпень";
//     alert(`Це ${mounth}`);
//     break;
//   case 9:
//     mounth = "Вересень";
//     alert(`Це ${mounth}`);
//     break;
//   case 10:
//     mounth = "Жовтень";
//     alert(`Це ${mounth}`);
//     break;
//   case 11:
//     mounth = "Листопад";
//     alert(`Це ${mounth}`);
//     break;
//   case 12:
//     mounth = "Грудень";
//     alert(`Це ${mounth}`);
//     break;
//   default:
//     alert("Ви не ввели потрібне значення!");
// }

// let mounthes = [
//   "Січень",
//   "Лютий",
//   "Березень",
//   "Квітень",
//   "Травень",
//   "Червень",
//   "Липень",
//   "Серпень",
//   "Вересень",
//   "Жовтень",
//   "Листопад",
//   "Грудень",
// ];
// let fixRandomNumber = parseInt(prompt("Веедіть число від 1 до 12:"));
// alert(`Це ${mounthes[fixRandomNumber - 1]}`);

//Зробіть сервіс який отримує тризначне число
// let number = parseInt(prompt("Введіть тризначне число:"));
// while (isNaN(number)) {
//   alert("Ви ввели не число, спробуйте ще раз:");
//   number = parseInt(prompt("Введіть тризначне число:"));
// }
// while (number <= 100 || number >= 999) {
//   alert("Ви ввели число відмінне від тризначного:");
//   number = parseInt(prompt("Введіть тризначне число:"));
// }

// let sumNumber = 0,
//   numberStrAr = number.toString().split("");
// for (let i = 0; i < number.toString().length; i++) {
//   sumNumber += Number(numberStrAr[i]);
// }
// alert(`Сума цифр вашого числа дорівнює: ${sumNumber}`);
//Поверніть користувачу сумму цих чисел
