var field = document.querySelectorAll('.field');
var win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var reset = document.querySelector('#reset');
var text = document.querySelector('#text');
var end = false;
var circle = [];
var cross = [];


onclick = function () {
   reset.addEventListener('click', restart);
}

function restart() {
   window.location.reload(true);
}

onload = function () {
   for (var i = 0; i < field.length; i++) {
      field[i].addEventListener('click', player);

   }
}

function player() {
   if (end === false) {
      if (this.classList.contains('circle') == false && this.classList.contains('cross') == false) {
         this.classList.add('circle');
         circle.push(this.id[1] - 1);
         winer(circle, 'Circle ');
         computer();
      } else {
         false;
      }
   } else {
      return false;
   }
}


function computer() {
   if (end === false) {
      var losowa = Math.floor(Math.random() * (8 - 0 + 1) + 0);
      if (field[losowa].classList.contains('circle') == false && field[losowa].classList.contains('cross') == false) {
         field[losowa].classList.add('cross');
         cross.push(losowa);
         winer(cross, 'cross ');
      } else {
         computer();
      }
   } else {
      return false;
   }
}


function winer(color, colorWin) {
   for (i = 0; i < win.length; i++) {
      if (color.indexOf(win[i][0]) !== -1 && color.indexOf(win[i][1]) !== -1 && color.indexOf(win[i][2]) !== -1) {
         document.querySelector('#text').innerHTML = colorWin + 'win!';
         end = true;
         return false;
      }
   }
   if (circle.length > 4 && end === false) {
      document.querySelector('#text').innerHTML = 'Tie!';
      end = true;

   }
}