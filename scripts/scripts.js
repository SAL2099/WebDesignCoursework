//Function to login and logout 

function login(){
    var counter = 2;
    if(counter % 2 == 0){
        alert('You have logged in!');
    }
    else{
        alert("You have logged out!")
    }
        counter += 1;
}


//Function for submitting a contact form

function sendForm(){
    document.getElementById("form_outcome").innerHTML="Your form was successfully transmitted!"
}