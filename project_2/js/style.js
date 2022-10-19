// player
var music = document.querySelector('.music-element')
var playBtn = document.querySelector('.play')
var seekbar = document.querySelector('.seekbar')
var duration = document.querySelector('.duration')

function handlePlay() {
    if (music.paused) {
        music.play();
        playBtn.className = 'pause'
        playBtn.innerHTML = '<i class="material-icons">pause</i>'
    } else {
        music.pause();
        playBtn.className = 'play'
        playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
    }
    music.addEventListener('ended', function () {
        playBtn.className = 'play'
        playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
        music.currentTime = 0
    });
}

music.onloadeddata = function () {
    seekbar.max = music.duration
    var ds = parseInt(music.duration % 60)
    var dm = parseInt((music.duration / 60) % 60)
    duration.innerHTML = dm + ':' + ds
}
music.ontimeupdate = function () { seekbar.value = music.currentTime }
handleSeekBar = function () { music.currentTime = seekbar.value }
music.addEventListener('timeupdate', function () {
    var cs = parseInt(music.currentTime % 60)
    var cm = parseInt((music.currentTime / 60) % 60)
    currentTime.innerHTML = cm + ':' + cs
}, false)


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// 아코디언
// ;(function($) {
//   "use strict";
  
//   $('.collapsible').on('click', '.accordion', function(el) {
//     el.preventDefault();
//     var $container = $(this).parent();    
//     $container.toggleClass('active');
//   });
  
// }(jQuery));
// 

$('.tabmenu li a').click(function(e){
  e.preventDefault();
  let href=$(this).attr('href');
  $('.tab').hide();
  $(href).show();
  $('.tabmenu li').removeClass('on');
  $(this).parent().addClass('on');
});