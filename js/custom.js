


$(document).ready(function(){
    // $(".main").click(function(){
    // 	console.log("hi");
    //     $(".menu").addClass("showMenu fadeIn");
    // }); 

     $(".main").on("click", function(e) {
	    $(".menu").toggleClass("showMenu fadeIn");
	    e.stopPropagation()
	  });

     
     $(document).on("click", function(e) {
        if ($(e.target).is(".menu") === false) {
          $(".menu").removeClass("showMenu fadeInUp");
        }
    });

});

// $(document).on("click", function(e) {
//     if ($(e.target).is(".menu") === true) {
//       $(".menu").removeClass("showMenu fadeIn");
//     }
// });


