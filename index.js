const test = document.getElementById('test');
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const box = document.createElement('div');
    box.style.height = '100px';
    box.style.width = '100px';
    box.style.border = '5px solid hotpink';
    box.style.display = 'inline-block';
    box.onmouseover = function () {
      box.style.background = 'red';
    };
    box.onmouseleave = function () {
      box.style.background = 'white';
    };
    test.appendChild(box);
    box.addEventListener('click', function() {
      this.style.background = 'green'
      box.onmouseleave = function (){ box.style.background = 'green'};
      box.onmouseenter = function(){box.style.background = 'green'};
    })
  }
  const divider = document.createElement('br');
  test.appendChild(divider);
}

