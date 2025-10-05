let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    alert("Invalid expression");
    display.value = '';
  }
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}