// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// Відповідь №1

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// Відповідь №2
// function openText() {
//   console.log(this);
//   let textCls = this.className + "__text",
//     blockStl = document.querySelector(`.${textCls}`).style.display;
//   console.log(textCls);
//   if (blockStl === "none") {
//     document.querySelector(`.${textCls}`).style.display = "block";
//   } else {
//     document.querySelector(`.${textCls}`).style.display = "none";
//   }
// }
// let buttons = document.querySelectorAll("button");
// buttons.forEach(function (el) {
//   el.onclick = openText;
// });

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// Відповідь №3
