(function(){

  var bodyEl = document.querySelector('body');
  var timeEl = document.querySelector('.Hud-time');
  var dateEl = document.querySelector('.Hud-date');

  window.requestAnimationFrame(step);

  function step() {

    var now = moment();
    var time = now.format('HH:mm:ss');
    var date = now.format('dddd, MMMM Do YYYY');
    var hex = '#' + now.format('HHmmss');

    bodyEl.style.backgroundColor = hex;
    timeEl.textContent = time;
    dateEl.textContent = date;

    window.requestAnimationFrame(step);

  }

  function pad(t) {
    return t < 10 ? '0' + t : t;
  }

}());
