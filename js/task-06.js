const input = document.getElementById('validation-input');

input.addEventListener('blur', function () {
  const expectedLength = input.getAttribute('data-length');
  const inputValue = input.value;
  
  if (inputValue.length === parseInt(expectedLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});