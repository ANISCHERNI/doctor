
function conx() 
{
    var users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("the test is here !");
        var verif=false;
        var i=0;
        var mail2=document.getElementById('mail').value;
        console.log(mail2);
        var mdp2=document.getElementById('password').value;
        console.log(mdp2);
        
        
    for (i=0;i<users.length;i++)
    {
        if((mail2==users[i].email)&&(mdp2==users[i].password))
        {
            console.log("ok");
            verif=true;
           var connected = JSON.parse(localStorage.getItem(users[i]));
           connected = localStorage.setItem("connected", JSON.stringify(users[i]));
           
        break;   
        }
    }
     if(verif) { 
        location.href='index-one.html';

    }
    
             //document.getElementById("coonx").className = "hidden" ;
            //document.getElementById("profil").className = "";
            //document.getElementById("deconx").className = "";
    
    else {
        alert("identifiants invalides");
        console.log("not ok");
    }
    
}


function verif() {
    verifUsername();
    validemail();
    validepassword();
    stockage();


}
function verifUsername() {
    var username = document.getElementById("nom").value;
    if (username.indexOf(" ") > 0) {
        console.log("username invalide");
    }
    else {

        console.log("username valide ");
    }

}

function validemail() {
    var mail = document.getElementById("email");

    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(mail.value)) {
        console.log("adresse valide ")
    } else {

        alert("adresse invalide")

    }
}

function validepassword() {
    var pass = document.getElementById("mdp").value;
    var min = new RegExp("(.*[a-z])");
    var maj = new RegExp("(?=.*[A-Z])");
    var spc = new RegExp("(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var a = 0, i = 0, j = 0, k = 0;


    if (pass.length >= 8) {

        console.log("Password valide");
        console.log(pass.length);
        if (min.test(pass)) {

            i = i + 1;
            console.log("Password avec Min");

        }
        else {
            i = 0;
        }
        if (maj.test(pass)) {
            j = j + 1;
            console.log("Password avec Maj");

        }
        else {
            j = 0;
        }
        if (spc.test(pass)) {
            k = k + 1;
            console.log("Password avec Car Spc");
        }
        else {
            k = 0
        }
        a = i + j + k;
        console.log("Valeur de a : ", a);
        if (a == 1) {
            console.log("Password faible");
        }
        else if (a == 2) {
            console.log("Password moyenne");
        }
        else if (a == 3) {
            console.log("Password forte");
        }
        else {
            console.log("Password incorrect");
        }



    }
    else {
        console.log("Password Invalide");
        console.log(pass.length);

    }
}


function stockage() {


    var user = {

        username: document.getElementById("nom").value,
        Télé: document.getElementById("tlf").value,
        password: document.getElementById("mdp").value,
        email: document.getElementById("email").value,
        role:document.getElementById('Role').value ,


    };



    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    users = localStorage.setItem("users", JSON.stringify(users));
    location.href="index-one.html"  ;
}

