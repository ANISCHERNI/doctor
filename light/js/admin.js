/**
 
 function valid()
{
    var pass= document.getElementById("password").value;
    var min = new RegExp("(.*[a-z])");
    var maj = new RegExp("(?=.*[A-Z])");
    var spc = new RegExp("(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var a=0,i=0 , j=0 ,k=0;
    
    
    if (pass.length>=8){

        console.log("Password valide");
        console.log(pass.length);
        if (min.test(pass))
        {

            i=i+1;
            console.log("Password avec Min");
            
        }
        else
        {
            i=0;
        }
         if (maj.test(pass))
        {
            j=j+1;
            console.log("Password avec Maj");
            
        }
        else
        {
            j=0;
        }
        if (spc.test(pass))
        {
            k=k+1;
            console.log("Password avec Car Spc");
        }
        else
        {
             k=0
        }
        a = i +j + k;
        console.log("Valeur de a : " , a);
        if(a==1)
        {
            console.log("Password faible"); 
        }
        else if(a==2)
        {
            console.log("Password moyenne");  
        }
        else if(a==3)
        {
            console.log("Password forte"); 
        }
        else{
        console.log("Password incorrect");
        }



    }
    else{
        console.log("Password Invalide");
        console.log(pass.length);
       
    }
    
}

function validutilisateur()
{
    var utilisateur= document.getElementById("utilisateur").value;
    var inx = " ";
    var b=utilisateur.indexOf(inx);

    if(b== -1)
    {
       
        console.log("Nom utilisateur valide");
        
    }
    else {
        
        console.log("Nom utilisateur invalide");
    }

}


function validemail()
{
    var email= document.getElementById("email").value;
    var b=email.indexOf("@");
    if(b!= -1)
    {
        if(email.indexOf(".",b) > b)
        {
        console.log("Email valide");
        }
        else{
        console.log("Email invalide");
        }
    }
    else {
        console.log("Email invalide");
    }

}

function validmail()
{
    var mail=document.getElementById("email").value;
    var c=new RegExp("^(([^<>()\[\]\\.,;:\s@]+(\.]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$");
    
    if (c.test(mail))
    {

        
        console.log("Email valide");
        
    }
    else
    {
        console.log("Email invalide");
    }
}



    
    function date()
    {
        var dateold = document.getElementById("datenaissance").value;
        var dt=new Date(dateold);
        var datenew= new Date();
        
         dt = dt.getTime() / 31536000000;
         dnew = datenew.getTime() / 31536000000;
        console.log("Date saisie :"+ dateold);
        console.log("Date aujourd'hui :"+ datenew);
        var agec=new Number(dnew - dt).toFixed(0);
        console.log("L'age de candidat est : "+agec);
        if(agec < 18)
        {
            console.log("Candidat mineur");
        }
        else
        {
            console.log("Candidat majeur")
        }
      
    }

     function register()
    {
        valid()
        validutilisateur()
        validmail()
        date()
        insertuser(); 
    }
*/
var admins = {
    cin: "",
    nom: "", prenom: "", email: "", date: "", password: "", adress: "", sexe: "", mobile: "", rol: "",
    photo: "",
};
var admins = JSON.parse(localStorage.getItem("admins")) || [];
localStorage.setItem("admins", JSON.stringify(admins));




var tablea=""  ;
    for (var i=0;i<admins.length;i++){

        tablea+=' <div class="pull-left image">';
	    tablea+='                                <img src="'+ admins[i].photo +' " class="img-circle user-img-circle" alt="User Image" />';
	    tablea+='                            </div>';
	    tablea+='                            <div class="pull-left info">';
	    tablea+='                                <p> Mr. '+ admins[i].nom + admins[i].prenom + '</p>';
	    tablea+='                                <a href="#"><i class="fa fa-circle user-online"></i><span class="txtOnline"> Online</span></a>';
	    tablea+='                            </div>';


    }
    document.getElementById("admin").innerHTML=tablea;

function ajouterAdmin() {

    var admins = JSON.parse(localStorage.getItem("admins")) || [];
  
    var admin = {
        cin: document.getElementById("cin_medecin").value,
        nom: document.getElementById("nom_medecin").value,
        prenom: document.getElementById("prenom_medecin").value,
        email: document.getElementById("email_medecin").value,
        date: document.getElementById("datenaissance_medecin").value,
        password: document.getElementById("password_medecin").value,
        adress: document.getElementById("adress").value,
        
        sexe: document.getElementById("sexe_medecin").value,
        mobile: document.getElementById("mobile_medecin").value,
        
        photo: addressmedecin,
        rol: "admin",

    };
    admins.push(admin);

    localStorage.setItem("admins", JSON.stringify(admins));
    location.href = 'all_doctors.html';

}
/**

function ajouterMedecin() {

    var medecins = JSON.parse(localStorage.getItem("medecins")) || [];
  
    var medecin = {
        cin: document.getElementById("cin_medecin").value,
        nom: document.getElementById("nom_medecin").value,
        prenom: document.getElementById("prenom_medecin").value,
        email: document.getElementById("email_medecin").value,
        date: document.getElementById("datenaissance_medecin").value,
        password: document.getElementById("password_medecin").value,
        adress: document.getElementById("adress").value,
        
        sexe: document.getElementById("sexe_medecin").value,
        mobile: document.getElementById("mobile_medecin").value,
        spcialite: document.getElementById("spcialite_medecin").value,
        photo: addressmedecin,
        rol: "medecin",

    };
    medecins.push(medecin);

    localStorage.setItem("medecins", JSON.stringify(medecins));
    location.href = 'all_doctors.html';

}
function onloadMedecin()
{
var table = '<table class="table table-hover table-checkable order-column full-width" id="example4">';
table += '<thead>';
table += '<tr>';

table += '<th>' + "Photo" + '</th>';
table += '<th>' + "Nom" + '</th>';
table += '<th>' + "Prenom" + '</th>';
table += '<th>' + "Date de naissance" + '</th>';
table += '<th>' + "Sexe" + '</th>';
table += '<th>' + "Spécialité" + '</th>';
table += '<th>' + "Email" + '</th>';
table += '<th>' + "Numereo Tel" + '</th>';
table += '<th>' + "Role" + '</th>';
table += '<th>' + "Adresse" + '</th>';
table += '<th>' + "Mots de passe" + '</th>';
table += '<th>' + "Action" + '</th>';
table += '</tr>';
table += '</thead>';
for (var i = 0; i < medecins.length; i++) {

    table += '<tr class="odd gradeX">';

    table += '<td><img  height=50 width=50 src=' + medecins[i].photo + '></td>';
    table += '<td>' + medecins[i].nom + '</td>';
    table += '<td>' + medecins[i].prenom + '</td>';
    table += '<td>' + medecins[i].date + '</td>';
    table += '<td>' + medecins[i].sexe + '</td>';
    table += '<td>' + medecins[i].spcialite + '</td>';
    table += '<td>' + medecins[i].email + '</td>';
    table += '<td>' + medecins[i].mobile + '</td>';
    table += '<td>' + medecins[i].rol + '</td>';
    table += '<td>' + medecins[i].adress + '</td>';
    table += '<td>' + medecins[i].password + '</td>';
    table += '<td><button  onclick="editMedecin(' + i + ')" class="btn btn-primary btn-xs"><i class="fa fa-pencil"></i></button><button  onclick="deleteMedecin(' + i + ')" class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button> ';
    // <button type='button' onclick='edit("+i+")'>Editer</button>"+ " <button type='button' onclick='deleteUser("+i+")'>Supprimer</button>"+ '</td>'

    table += '</tr>';
}
table += '</table>';

document.getElementById('table').innerHTML = table;
}
function deleteMedecin(n) {

    var medecins = JSON.parse(localStorage.getItem("medecins")) || [];
    medecins.splice(n, 1);
    localStorage.setItem("medecins", JSON.stringify(medecins));
    location.href = 'all_doctors.html';
}

function editMedecin(nbre) {
    
    var medecinByCIN = JSON.parse(localStorage.getItem("medecinsByCIN")) || [];
    var numeroId = JSON.parse(localStorage.getItem("numeroID")) || [];
    medecinByCIN.push(medecins[nbre]);
    numeroId.push(nbre);
    localStorage.setItem("medecinsByCIN", JSON.stringify(medecinByCIN));
    localStorage.setItem("numeroID", JSON.stringify(numeroId));
    location.href = 'edit_doctor.html';
}
function chargerMedecinEdit() {

    var medecinByCIN = JSON.parse(localStorage.getItem("medecinsByCIN")) || [];

    var cin = document.getElementById("cin_medecin");
    cin.setAttribute("value", medecinByCIN[0].cin);

    var nom = document.getElementById("nom_medecin");
    nom.setAttribute("value", medecinByCIN[0].nom);

    var prenom = document.getElementById("prenom_medecin");
    prenom.setAttribute("value", medecinByCIN[0].prenom);

    var sexe = document.getElementById("sexe_medecin");
    sexe.setAttribute("value", medecinByCIN[0].sexe);

    var option= document.getElementById("sexe_medecin").options;
    for(i=0; i< option.length; i++){
        if (medecinByCIN[0].sexe==option[i].value)
        {
            option[i].selected='selected';
        }
    }

    var email = document.getElementById("email_medecin");
    email.setAttribute("value", medecinByCIN[0].email);

    document.getElementById("adress").value = medecinByCIN[0].adress;
    
    
    


    var options= document.getElementById("spcialite_medecin").options;
    for(i=0; i< options.length; i++){
        if (medecinByCIN[0].spcialite==options[i].value)
        {
            options[i].selected='selected';
        }
    }
    var spcialite = document.getElementById("spcialite_medecin");
    spcialite.setAttribute("value", medecinByCIN[0].spcialite);


    var mobile = document.getElementById("mobile_medecin");
    mobile.setAttribute("value", medecinByCIN[0].mobile);

    var password = document.getElementById("password_medecin");
    password.setAttribute("value", medecinByCIN[0].password);

    var date = document.getElementById("datenaissance_medecin");
    date.setAttribute("value", medecinByCIN[0].date);

    

    addressmedecin = medecinByCIN[0].photo;
    
}
function modifierMedecin() {
    
    var numeroId = JSON.parse(localStorage.getItem("numeroID")) || [];

    
    var medecin = {

        cin: document.getElementById("cin_medecin").value,
        nom: document.getElementById("nom_medecin").value,
        prenom: document.getElementById("prenom_medecin").value,
        email: document.getElementById("email_medecin").value,
        date: document.getElementById("datenaissance_medecin").value,
        password: document.getElementById("password_medecin").value,
        adress: document.getElementById("adress").value,
        sexe: document.getElementById("sexe_medecin").value,
        mobile: document.getElementById("mobile_medecin").value,
        spcialite: document.getElementById("spcialite_medecin").value,
        photo: addressmedecin,
        rol: "medecin",

    };

    var medecins = JSON.parse(localStorage.getItem("medecins")) || [];
    medecins.splice(numeroId[0], 1, medecin);
    localStorage.setItem("medecins", JSON.stringify(medecins));
    localStorage.removeItem("medecinsByCIN");
    localStorage.removeItem("numeroID");
    location.href = 'all_doctors.html';


}

function getMedecinByCIN(cin) {
    var medecinByCIN = JSON.parse(localStorage.getItem("medecinsByCIN")) || [];
    for (var i = 0; i < medecins.length; i++) {
        if (medecins[i].cin == cin) {
            medecinByCIN.push(medecins[i]);
            localStorage.setItem("medecinsByCIN", JSON.stringify(medecinByCIN));
        }
    }
  
    return medecinByCIN;
}
*/