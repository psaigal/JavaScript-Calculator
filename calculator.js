var storeData = {
  data : []
}

function retrieveNumber() {
  var e = event.target; //event is the click event(target is property of event, which refers to HTML element that was clicked)
  var number = e.innerHTML //represents the number that was clicked
  if (number == "+" || number == "-" || number == "/" || number == "*" || number == "AC" ) {
    document.getElementById("display").innerHTML = "";
  }
  else if (number != "=") {
     document.getElementById("display").innerHTML += number;
  }
   storeNumbers(number);
}

function storeNumbers(number) {
  if (number != "=" && number != "AC") {
    storeData.data.push(number);
  }
  else if (number == "AC") {
    storeData.data = [];
  }
  else {
    processNumbers(storeData.data)
  }
}


function processNumbers(array) {
  for (i = 0; i < array.length; i ++) {
    if (array[i] == "+" || array[i] == "-" || array[i] == "/" || array[i] == "*") {
      var num1 = parseInt(array.slice(0,i).join("").replace(/,/g, ''));
      var num2 = parseInt(array.slice(i+1, array.length).join("").replace(/,/g, ''));
      if (array[i] == "+") {
        add(num1,num2);
      }
      else if (array[i] == "-") {
        subtract(num1,num2);
      }
      else if (array[i] == "/") {
        divide(num1,num2);
      }
      else {
       multiply(num1,num2);
      }
    }
  }
}

function add(num1, num2) {
  storeData.data = [(num1 + num2).toString()]
  document.getElementById("display").innerHTML = storeData.data;
}

function subtract(num1, num2) {
  storeData.data = [(num1 - num2).toString()]
  document.getElementById("display").innerHTML = storeData.data;
}

function multiply(num1, num2) {
  storeData.data = [(num1 * num2).toString()]
  document.getElementById("display").innerHTML = storeData.data;
}

function divide(num1, num2) {
  storeData.data = [(num1 / num2).toString()];
  document.getElementById("display").innerHTML = storeData.data;
}

