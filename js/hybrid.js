function validateForm() {
    var x = document.forms["form"]["username"].value;
    var y=document.forms["form"]["pwd"].value
    if(x==null||x==""){
        if(y==null||y==""){
            alert("Userame and Password must be filled out");
            return false;
            }
        else{
            alert("Username must be filled out");
            return false;
            }
    }
    else if(y==null||y==""){
        alert("Password must be filled out");
        return false;
    }
}