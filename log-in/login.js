
let checkLogin = () => {
    let email = document.getElementById("email").textContent;
    let password = document.getElementById("password").textContent;
    let correctEmails = ["kcordova252@west-mec.edu", "mevinger258@west-mec.org", "mfuentes564@west-mec.org", "ylopez262@west-mec.org"]

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

    }else{
        document.getElementById("password").textContent = ""
    }
}