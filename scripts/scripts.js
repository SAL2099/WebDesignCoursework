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

//All these functions are for the conspiracy page. Each is paired to a theory, so that when an image is selected, it shows the corresponding theory

function showCon1(){
    var x = document.getElementById("con1");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

function showCon2(){
    var x = document.getElementById("con2");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

function showCon3(){
    var x = document.getElementById("con3");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

function showCon4(){
    var x = document.getElementById("con4");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}
function showCon5(){
    var x = document.getElementById("con5");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

function showCon6(){
    var x = document.getElementById("con6");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

function showCon7(){
    var x = document.getElementById("con7");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

function showCon8(){
    var x = document.getElementById("con8");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

function showCon9(){
    var x = document.getElementById("con9");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}
