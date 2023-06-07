const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');
textSpan.style.fontSize = fontSizeControl.value + 'px';
fontSizeControl.addEventListener('input', function () {
  const fontSize = fontSizeControl.value + 'px';
  textSpan.style.fontSize = fontSize;
});
