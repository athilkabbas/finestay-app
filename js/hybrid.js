function validateForm() {
    var x = document.forms["form"]["checkin_token"].value;
    if(x==null||x==""){
            alert("check-in token must be filled out");
            return false;
            }
}