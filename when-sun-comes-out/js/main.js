// modal
var modal = document.getElementById('modal-frame');
var modalImg = document.getElementById("modal-image");

[].forEach.call(document.getElementsByTagName('img'), (el) =>  {
    el.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }
});

modal.onclick = function() {
  modal.style.display = "none";
}
