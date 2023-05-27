var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = (document.getElementById("username").value).toLowerCase();
var password = (document.getElementById("password").value)

if(username.length != 0 && password.length != 0 )
{

if(username.length < 5 )
{
    alert("Username should be more than 5 characters")
}

else if (username.length > 15)
{

    alert("Username should be less than 15 characters")
}

else if(password.length < 5 )
{
    alert("Password should be more than 5 characters")
}

else if (password.length > 15)
{

    alert("Password should be less than 15 characters")
}


if ( username == "admin" && password == "admin@123" ){
//alert ("Logged in successfully");
location.href="./home/home.html"
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
    alert("Refresh to try again")
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("login").disabled = true;
return false;
}
}
}
else
{
    alert("Username and Password cannot be null")
}


}

