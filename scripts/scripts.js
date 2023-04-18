//Function to login and logout 

function login(){
    //Checks if the user is logged in
    if(document.getElementById("loginButton").innerHTML=="Log in"){
        //If the user isn't logged in, check there is an input in the field and log them in. Then change the log in to a log out button.
        if(document.getElementById("mainLogin").checkValidity()){
            alert('You have logged in!');
            document.getElementById("loginButton").innerHTML="Log out";
        }
        //If the form isn't filled in, don't log them in.
        else{
            alert("Invalid form, email or password missing")
        }
    }

    //If the user is logged in, log them out and change the button back to a log in.
    else{
        alert("You have been logged out!")
        document.getElementById("loginButton").innerHTML="Log in";
    }

}


//Function for submitting a contact form

function sendForm(){
    document.getElementById("form_outcome").innerHTML="Your form was successfully transmitted!"
}



//Function for submitting an event

function submitEvent(){
    var title = document.forms["event"]["eventTitle"].value;
    var date = document.forms["event"]["eventDate"].value;
    if(title==""){
        alert("An event must have a title!");
    }
    else{
        if(date.length == 0){
            alert("An event must have a date!");
        }
        else{
            alert("Event submitted! We shall be in touch soon, expect our raven!");
        }
    }
}

