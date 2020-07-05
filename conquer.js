$(document).ready(function() {
	$("#faicon").click(function(){
		$("#header").toggleClass("show");
	});

	var inview = new Waypoint.Inview({
      element: $('#rowOne')[0],
      enter: function() {
        $("#rowOne").removeClass('hideRow');
        $("#rowOne").addClass('showRow');
      },
      
    });

    var inview = new Waypoint.Inview({
      element: $('#rowTwo')[0],
      enter: function() {
        $("#rowTwo").removeClass('hideRow');
        $("#rowTwo").addClass('showRow');
      },
      
    });

    var inview = new Waypoint.Inview({
      element: $('#rowThree')[0],
      enter: function() {
        $("#rowThree").removeClass('hideRow');
        $("#rowThree").addClass('showRow');
      },
      
    });

    var inview = new Waypoint.Inview({
      element: $('#rowFour')[0],
      enter: function() {
        $("#rowFour").removeClass('hideRow');
        $("#rowFour").addClass('showRow');
      },
      
    });


    var inview = new Waypoint.Inview({
      element: $('#hServices')[0],
      enter: function() {
        $("#pServices").removeClass('hideServ');
        $("#pServices").addClass('showServ');
      },
      
    });
});


function errorPrint(error, message){
	document.getElementById(error).innerHTML=message;
}

function validate(){

	var fname = document.getElementById('nameField');
	var email = document.getElementById('emailField');
	

	var regEx = {
		"fname": /[a-zA-Z0-9]/gi,
		"email" : /^((\w)+([\-\.\+])?(\w)+)+@([A-Za-z])+.([A-Za-z])+(.[A-Za-z]+)?$/,
	}


	if (regEx["fname"].test(fname.value)) {
		fname.classList = "valid";
		errorPrint("nameErr", "");
	} else {
		errorPrint("nameErr", "Invalid Input");
		fname.classList = "invalid";
	}

	if (regEx["email"].test(email.value)) {
		email.classList = "valid";
		errorPrint("emailErr", "");
	} else {
		errorPrint("emailErr", "Invalid Input");
		email.classList = "invalid";
	}
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});