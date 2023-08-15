const numberInput = document.getElementById('numberInput');
const doubleBtn = document.getElementById('doubleBtn');
const tripleBtn = document.getElementById('tripleBtn');
const output = document.getElementById('output');

doubleBtn.addEventListener('click', () => {
  manipulateNumber('double');
});

tripleBtn.addEventListener('click', () => {
  manipulateNumber('triple');
});

function manipulateNumber(operation) {
  const inputValue = parseFloat(numberInput.value);

  if (isNaN(inputValue)) {
    alert('Please enter a number.');
    return;
  }

  let result;
  if (operation === 'double') {
    result = inputValue * 2;
  } else if (operation === 'triple') {
    result = inputValue * 3;
  }

  output.textContent = `Result: ${result}`;
}
