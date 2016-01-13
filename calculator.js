var storeData = {
  data : []
}

function displayNumber() {
  var array = []
  var e = event.target; //event is the click event(target is property of event, which refers to HTML element that was clicked)
  var number = e.innerHTML
  storeNumbers(number)
}

function storeNumbers(number) {
  if (number != "=") {
    storeData.data.push(number);
  }
  else {
    processNumbers(storeData.data)
    storeData.data = [];
  }
}

function processNumbers(array) {
  for (i = 0; i < array.length; i ++) {
    if (array[i] == "+" || array[i] == "-" || array[i] == "/" || array[i] == "*") {
      var num1 = parseInt(array.slice(0,i).join("").replace(/,/g, ''));
      var num2 = parseInt(array.slice(i+1, array.length).join("").replace(/,/g, ''));
      if (array[i] == "+"){
        add(num1,num2);
      }
      else if (array[i] == "-"){
        subtract(num1,num2);
      }
      else if (array[i] == "/"){
        divide(num1,num2);
      }
      else {
       multiply(num1,num2);
      }
    }
  }
}

function add(num1, num2) {
  console.log(num1 + num2);
}

function subtract(num1, num2) {
  console.log(num1 - num2);
}

function multiply(num1, num2) {
  console.log(num1 * num2);
}

function divide(num1, num2) {
  console.log(num1 / num2);
}
