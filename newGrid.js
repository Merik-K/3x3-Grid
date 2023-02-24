const container = document.getElementById('container');
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    var uno = document.createElement('div');
    uno.style.height = '100px';
    uno.style.width = '100px';
    uno.style.border = '5px solid hotpink';
    uno.style.display = '';
    uno.onmouseover = function () {
      uno.style.background = 'red';
    };
    uno.onmouseleave = function () {
      uno.style.background = 'white';
    };
    uno.addEventListener('click', gren);
    function gren() {
      uno.style.background = 'green';
      uno.monmouseleave = 'green';
    }
    container.appendChild(uno);
    container.style.display = 'flex';
  }
}
