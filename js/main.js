//multi-images

window.addEventListener('load', () => {

[].forEach.call(document.getElementsByClassName('image-viewer'), (el) => {

  let active = parseInt(el.dataset.active);
  let total = el.getElementsByClassName('image-slide-wrapper').length;
  el.querySelector('.current').innerHTML = active + 1;
  el.querySelector('.total').innerHTML = total;

  el.addEventListener('pointermove', (e) => {
    let active = parseInt(el.dataset.active);
    let total = el.getElementsByClassName('image-slide-wrapper').length;
    if (e.offsetX > el.offsetWidth/2) {
        el.style.setProperty('cursor', `e-resize`);
    } else {
        el.style.setProperty('cursor', `w-resize`);
    }
  });

  el.addEventListener('click', (e) => {
    e.preventDefault();
    let images = el.getElementsByClassName('image-slide-wrapper');
    let active = parseInt(el.dataset.active);
    let total = images.length;
    images[active].classList.remove('active');
    if (e.layerX > el.offsetWidth/2) {
      if (active < (total - 1)) {
      active++;
      }
      else if (active == (total - 1)) {
        active = 0;
      }
    }
      else if (e.layerX <= el.offsetWidth/2) {
      if (active > 0) {
        active--;
      }
      else if (active == 0) {
        active = (total - 1);
      }
    }


    images[active].classList.add('active');
    el.querySelector('.current').innerHTML = active + 1;
    el.querySelector('.total').innerHTML = total;
    el.dataset.active = active;
  })

});
});

//audio player

var audioplayerexample = document.getElementById('audioplayerexample');
var audioctrl = document.getElementById('audioctrl');

audioctrl.onclick = function () {

    // Update the Button
    var pause = audioctrl.innerHTML === 'Stop playing';
    audioctrl.innerHTML = pause ? 'Play audio' : 'Stop playing';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    audioplayerexample[method]();

    // Prevent Default Action
    return false;
};


//video player

var videoplayerexample = document.getElementById('videoplayerexample');
var videoctrl = document.getElementById('videoctrl');

videoctrl.onclick = function () {

    // Update the Button
    var pause = videoctrl.innerHTML === 'Stop playing';
    videoctrl.innerHTML = pause ? 'Play video' : 'Stop playing';

    // Update the video
    var method = pause ? 'pause' : 'play';
    videoplayerexample[method]();

    // Prevent Default Action
    return false;
};

videoplayerexample.onclick = function () {

    // Update the Button
    var pause = videoctrl.innerHTML === 'Stop playing';
    videoctrl.innerHTML = pause ? 'Play video' : 'Stop playing';

    // Update the video
    var method = pause ? 'pause' : 'play';
    videoplayerexample[method]();

    // Prevent Default Action
    return false;
};


//inquiry form

function openInquiryForm() {
  document.getElementById("inquiry-form-container").style.display = "block";
};

function closeInquiryForm() {
  document.getElementById("inquiry-form-container").style.display = "none";
};


//horizontal scrolling

(function () {

	scrollConverter.activate();

}());


// modal
var modal = document.getElementById('modal-frame');
var img = document.getElementsByClassName('modal-enabled');
var modalImg = document.getElementById("modal-image");

[].forEach.call(document.getElementsByClassName('modal-enabled'), (el) =>  {
    el.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }
});

modal.onclick = function() {
  modal.style.display = "none";
}
