

let checkLogin = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let correctEmails = ["kcordova252@west-mec.edu", "mevinger258@west-mec.org", "mfuentes564@west-mec.org", "ylopez262@west-mec.org", "admin"]

    console.log(email)
    console.log(password)
    
    if(password == "admin"){
        for(let i = 0; i < correctEmails.length; i++){
            if(email == correctEmails[i]){
                return true;
            }
        }
    }
    return false;
}

let login = () => {
    if(checkLogin()){
        document.location.href = "../services/services.html"
    }else{
        document.getElementById("password").value = ""
        alert("Incorrect email or password")
    }
}

document.getElementById("password").addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        login()
    }
});

document.getElementById("email").addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        login()
    }
});

let signup = () => {
    document.location.href = "../register/register.html"
}
