const outputScreen = document.getElementById('output-screen');

function display(value) {
  if (outputScreen.value === 'Error') {
    outputScreen.value = '';
  }
  outputScreen.value += value;
}



function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value)
  } catch(error) {
    outputScreen.value = 'Error';
  }
}

function clearDisplay() {
  outputScreen.value = '';
}

function del(){
  outputScreen.value = outputScreen.value.slice(0, -1);
}