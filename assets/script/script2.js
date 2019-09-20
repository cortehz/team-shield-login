//we need to confirm the password
var password=document.getElementById('password');
var passwordc=document.getElementById('passwordC');


function errorCheck(e)
{
    if (password.value == passwordc.value)
    {
        var len=password.value.length;
        if (len<6)
        {
            e.preventDefault();
            window.alert("password lenght should be >5");
            password.focus(); //focus on the password text box
            password.style.borderColor="red";
            passwordc.style.borderColor="red";
            return false;
        }
    }
    else
    { 
        e.preventDefault();
        window.alert("passwords do not match");
        passwordc.focus(); //focus on the confirm password text box
        passwordc.style.borderColor="red";
        return false;
    }
}
