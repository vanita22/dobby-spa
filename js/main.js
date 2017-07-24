$(document).ready(function(){
  	$('#carousel').carousel({
  		interval: 4000, //sirve para regular la velocidad del slider.  	
	});

	// Funcionamiento del indicator
    $(".box1").click(function(){
        $("#carousel").carousel(0);
    });
    $(".box2").click(function(){
        $("#carousel").carousel(1);
    });
    $(".box3").click(function(){
        $("#carousel").carousel(2);
    });     

  // Funcionamiento de los Controles
   	$(".left").click(function(){
        $("#carousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#carousel").carousel("next");
    });  
})