const outputScreen = document.getElementById('output-screen');

function display(value) {
  if (outputScreen.value === 'Error') outputScreen.value = '';
  outputScreen.value += value;
}

function clearDisplay() {
  outputScreen.value = '';
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}

function calculate() {
  const expression = outputScreen.value;

  if (!/^[0-9+*/%.\-()\s]+$/.test(expression)) {
    outputScreen.value = 'Error';
    return;
  }

  try {
    const result = Function(`"use strict"; return (${expression})`)();
    outputScreen.value = Number.isFinite(result) ? result : 'Error';
  } catch {
    outputScreen.value = 'Error';
  }
}