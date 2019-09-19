// Variables or IDs of Username and Passwords Inputs:
var forgetemail = document.getElementById('forget-email');
var form = document.getElementById('form-forget');
var formTitleForget = document.getElementsByClassName('form-title-forget');
var formSent = document.getElementsByClassName('form-sent')[0];
/*----------------------------------------------------------------------------------*/
// Variable or ID of submit Btn (Login Button which submits data to server).
var submitBtn = document.getElementById('submitBtn');
/*----------------------------------------------------------------------------------*/
// Variables of html div elements which has class of 'input-div validate-input'.
var allInputs = document.getElementsByClassName('input-div');
var forgetemailValidate = document.getElementsByClassName('input-div')[0];

/*----------------------------------------------------------------------------------*/
// Variables of submitted username value and passwod value from inputs;
var submittedEmail;
/*----------------------------------------------------------------------------------*/

submitBtn.addEventListener('click', function(e){
    // If user entered blank spaces before or after in username or password inputs; Solution is trim();
    submittedEmailaddress = forgetemail.value.trim();
    // If password input was submitted blank then JS will apply the alert-validate style/class.
    if(submittedEmailaddress == ""){
        forgetemailValidate.className = 'input-div alert-validate-forget';
        e.preventDefault();
    }
});
/*----------------------------------------------------------------------------------*/
/*Below is the functionality of how alert will be gone when the user click any/current input.*/	
// Focus:
for(var i = 0; i < allInputs.length; i++){
	allInputs[i].onclick = function(){
		this.className = 'input-div validate-input';
	};
};