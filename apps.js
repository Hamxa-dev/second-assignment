// Question = 1
//     const names = document.querySelector("#name");
//     const email = document.querySelector("#email");
//     const login = document.querySelector("#login");

//  function loginUser(){

//  console.log(names.value)
//  console.log(email.value)

//  }

// Questionn = 2

//  document.getElementById("calculatorForm")
//    .addEventListener("submit", function (event) {
//      event.preventDefault();

//      const num1 = document.querySelector("#num1").value;
//      const num2 = document.querySelector("#num2").value;
//      const operator = document.getElementById("operator").value;

//      let result;

//      switch (operator) {

//        case "+":
//          result = num1 + num2;
//          break;

//        case "-":
//          result = num1 - num2;
//          break;

//        case "/":
//          result = num1 / num2;
//          break;

//        case "*":
//          result = num1 * num2;
//          break;

//        case "%":
//          result = num1 % num2;
//          break;

//        default:
//          result = "invalid operator";
//      }
//      document.getElementById("result").textContent = `Result: ${result}`;
//    });

// Question = 3

// document.addEventListener("DOMContentLoaded", function () {
//   const monthSelect = document.querySelector("#monthSelect");
//   const seasonDisplay = document.querySelector("#seasonDisplay");

//   monthSelect.addEventListener("change", function () {
//     const selectedMonth = monthSelect.value;
//     let season = "";

//     switch (selectedMonth) {
//       case "December":
//       case "January":
//       case "February":
//         season = "Winter";
//         break;
//       case "March":
//       case "April":
//       case "May":
//         season = "Spring";
//         break;
//       case "June":
//       case "July":
//       case "August":
//         season = "Summer";
//         break;
//       case "September":
//       case "October":
//       case "November":
//         season = "Fall";
//         break;
//     }

//     seasonDisplay.textContent = season;
//   });
// });

