//Validation of Contact form
function validation(theForm){
    //sets variable and looks at their value
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var feedback = document.getElementById("feedback").value;
        //checks to see if the name field is blank 
        if( name ===''){
            alert("Please fill in your Name!");
            return false;
        }
        //checks to see if the email field is blank
        else if( email ===''){
            alert("Please fill in your E-mail!");
            return false;
        }
        //checks to see if the message field is left blank
        else if( feedback ===''){
            alert("Please fill in your Message!");
            return false;
        }
        //if everything is filled in properly returns a message
        else{
            alert('Thank you, ' + name + ', your message: "' + feedback + '" has been sent to Brandon Zega! You will receive a reply shortly. Thank you, and have a great day!')
            return true;
        }
}

//javascript media query for hamburger
const mediaQuery = window.matchMedia('(max-width: 600px)')

//function that toggels a class named show when hamburger/nav links are clicked
function navFunction() {
    //finds the element 
    var x = document.getElementById("mainNav");
    //checks that the media is the right size
    if (mediaQuery.matches) {
        //looks for class show if it's there removes it
        if ( x.classList.contains('show')) {
            x.classList.remove('show');
        }
        //if class show is not there adds it
        else {
            x.classList.add('show');
        } 
    }
}
