$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000
        
    }); 
  });

  document.getElementById("burger").onclick = function(){
    addMenu();
};

function addMenu(){
    document.getElementById("menu-clone").classList.toggle("show");
};


