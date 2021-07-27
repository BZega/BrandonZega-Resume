function validation(theForm){
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var feedback = document.getElementById("feedback").value;
        if( name ===''){
            alert("Please fill in your Name!");
            return false;
        }
        else if( email ===''){
            alert("Please fill in your E-mail!");
            return false;
        }
        else if( feedback ===''){
            alert("Please fill in your Message!");
            return false;
        }
        else{
            alert('Thank you, ' + name + ', your message: "' + feedback + '" has been sent to Brandon Zega! You will receive a reply shortly. Thank you, and have a great day!')
            return true;
        }
}

function navFunction() {
    var x = document.getElementById("mainNav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
