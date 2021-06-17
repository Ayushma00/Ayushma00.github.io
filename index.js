var myIndex = 0;
function myFunction(ids) {
var x = document.getElementById(`${ids}`);
x.style.display === "none"
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}
document.addEventListener('DOMContentLoaded', function() {
  var descrip = document.getElementsByClassName('description');
  // console.log(descrip.length);
  for(let i=0;i<descrip.length;i++){
    console.log(descrip[i]);
    descrip[i].style.display="none";
  }


  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };
  window.onload = function() {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');

        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }

    };
    let flag=0;
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        if(flag===1){
            $('#leftCol').css("display","none");
            $('#RightCol').css("margin-left","0");
            $('.text2').css("font-size","40px");
              flag=0;
        }
        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
          scrollTop: position
        });
      });

$(".menu").click(function () {

// when menu is clicked
  if(flag===0){
    $('#leftCol').css("display","block");
    $('#RightCol').css("margin-left","0px");
      $('#RightCol').css("z-index","1");
      $('#leftCol').css("z-index","100");
      $('.menu').css("z-index","100");

      $('.text2').css("font-size","25px");
      $(window).scroll(function(){
        $('#leftCol').css("display","none");
  });

      flag=1;
  }
  else{
    $('#leftCol').css("display","none");
    $('#RightCol').css("margin-left","0");
    $('.text2').css("font-size","40px");
      flag=0;
  }
});

});
