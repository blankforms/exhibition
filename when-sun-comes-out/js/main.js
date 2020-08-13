// modal
var modal = document.getElementById('modal-frame');
var modalImg = document.getElementById("modal-image");

[].forEach.call(document.getElementsByTagName('img'), (el) =>  {
    el.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src.replace("1200px/", "").replace("240px/", "");
    }
});

modal.onclick = function() {
  modal.style.display = "none";
}

//inquiry form

var form = document.getElementById('inquiry-form-container');
var formDetails = document.getElementById('form-details');

function openInquiryForm(i) {
    let entriesDetails = document.getElementsByClassName('entry-details')[parseInt(i)].innerHTML;
    form.style.display = "block";
    formDetails.innerHTML = entriesDetails;
};

function closeInquiryForm() {
  document.getElementById("inquiry-form-container").style.display = "none";
};


function sendMail() {
    var link = "mailto:julia@blankforms.org"
             + "?cc="
             + "&subject=" + escape("Inquiry Request for ")
             + escape(document.getElementById('form-details').textContent.slice(0, 20))
             + "&body=" + escape(document.getElementById('inquiry-mail').value) + escape('\n\nreturn address: ') + escape(document.getElementById('return-address').value)
    ;

    window.location.href = link;
};
