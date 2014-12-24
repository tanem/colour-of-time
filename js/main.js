(function(){
  
  var body = document.querySelector('body');
  var time = document.querySelector('.Hud-time');
  var colour = document.querySelector('.Hud-colour');

  requestAnimationFrame(step);

  function step() {

    var now = new Date();
    var h = pad(now.getHours());
    var m = pad(now.getMinutes());
    var s = pad(now.getSeconds());
    var hex = '#' + h + m + s;

    body.style.backgroundColor = hex;
    colour.textContent = hex;
    time.textContent = h + ':' + m + ':' + s;

    window.requestAnimationFrame(step);

  }

  function pad(t) {
    return t < 10 ? '0' + t : t;
  }
  
}());