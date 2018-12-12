
// document.getElementById("info").addEventListener("click", displayDate);
function information() {


    document.getElementById("AjoutRen").setAttribute("class", "hidden");
    document.getElementById("ListRenz").setAttribute("class", "hidden");
    document.getElementById("info").setAttribute("class", "");
    document.getElementById("ajout").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("listRenCours").setAttribute("class", "hidden");

}
function ajoute() {
    document.getElementById("AjoutRen").setAttribute("class", "hidden");
    //document.getElementById("listRen").setAttribute("class", "hidden");
    document.getElementById("info").setAttribute("class", "hidden");
    document.getElementById("ajout").setAttribute("class", "");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("listRenCours").setAttribute("class", "hidden");
    document.getElementById("ListRenz").setAttribute("class", "hidden");



}
function liste() {
    ListePatients()
    document.getElementById("AjoutRen").setAttribute("class", "hidden");
    //document.getElementById("listRen").setAttribute("class", "hidden");
    document.getElementById("info").setAttribute("class", "hidden");
    document.getElementById("ajout").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "");
    document.getElementById("table").setAttribute("class", "ListePast");
    document.getElementById("listRenCours").setAttribute("class", "hidden");
    document.getElementById("ListRenz").setAttribute("class", "hidden");



}
function validation() {
    ListeRVEnCours()
    document.getElementById("AjoutRen").setAttribute("class", "hidden");
    //document.getElementById("listRen").setAttribute("class", "hidden");
    document.getElementById("info").setAttribute("class", "hidden");
    document.getElementById("ajout").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("listRenCours").setAttribute("class", "");
    document.getElementById("ListRenz").setAttribute("class", "hidden");
    document.getElementById("listRenCours").setAttribute("class", "ListePast");


}

function ajoutRenz() {
    document.getElementById("AjoutRen").setAttribute("class", "");
    //document.getElementById("listRen").setAttribute("class", "hidden");
    document.getElementById("info").setAttribute("class", "hidden");
    document.getElementById("ajout").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("listRenCours").setAttribute("class", "hidden");
    document.getElementById("ListRenz").setAttribute("class", "hidden");

}
function ListeRenz() {
    ListeRV();
    document.getElementById("AjoutRen").setAttribute("class", "hidden");
    //document.getElementById("listRen").setAttribute("class", "hidden");
    document.getElementById("info").setAttribute("class", "hidden");
    document.getElementById("ajout").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("table").setAttribute("class", "hidden");
    document.getElementById("listRenCours").setAttribute("class", "hidden");
    document.getElementById("ListRenz").setAttribute("class", "");
    document.getElementById("ListRenz").setAttribute("class", "ListePast");


}

function ajouterPatient() {

    var patients = JSON.parse(localStorage.getItem("patients")) || [];

    var patient = {
        cin: document.getElementById("cin_patient").value,
        nom: document.getElementById("nom_patient").value,
        prenom: document.getElementById("prenom_patient").value,
        email: document.getElementById("email_patient").value,
        date: document.getElementById("datenaissance_patient").value,
        password: document.getElementById("password_patient").value,
        adress: document.getElementById("adress").value,
        group: document.getElementById("group_sanguin").value,
        etat: document.getElementById("etat_patient").value,
        diabete: document.getElementById("diabete_patient").value,
        tension: document.getElementById("tension_patient").value,

        sexe: document.getElementById("sexe_patient").value,
        mobile: document.getElementById("mobile_patient").value,

        photo: photo_patient,
        rol: "patient",

    };
    patients.push(patient);

    localStorage.setItem("patients", JSON.stringify(patients));
    location.href = 'ProfilSecretaire.html';

}


function ListePatients() {



    patients = JSON.parse(localStorage.getItem("patients"));

    //var users = JSON.parse(localStorage.getItem("users"));


    table += '<tr>';

    table += '<th>' + "Photo" + '</th>';
    table += '<th>' + "Nom" + '</th>';
    table += '<th>' + "Prenom" + '</th>';
    table += '<th>' + "Date de naissance" + '</th>';
    table += '<th>' + "Sexe" + '</th>';
    table += '<th>' + "Email" + '</th>';
    table += '<th>' + "Numereo Tel" + '</th>';
    table += '<th>' + "Role" + '</th>';
    table += '<th>' + "Adresse" + '</th>';
    table += '<th>' + "Etat civile" + '</th>';
    table += '<th>' + "Groupe sanguin" + '</th>';
    table += '<th>' + "Tension" + '</th>';
    table += '<th>' + "Diabete" + '</th>';
    table += '<th>' + "Mots de passe" + '</th>';
    table += '<th>' + "Action" + '</th>';
    table += '</tr>';

    for (var i = 0; i < patients.length; i++) {

        table += '<tr>';

        table += '<td><img  height=50 width=50 src=' + patients[i].photo + '></td>';
        table += '<td>' + patients[i].nom + '</td>';
        table += '<td>' + patients[i].prenom + '</td>';
        table += '<td>' + patients[i].date + '</td>';
        table += '<td>' + patients[i].sexe + '</td>';
        table += '<td>' + patients[i].email + '</td>';
        table += '<td>' + patients[i].mobile + '</td>';
        table += '<td>' + patients[i].rol + '</td>';
        table += '<td>' + patients[i].adress + '</td>';
        table += '<td>' + patients[i].etat + '</td>';
        table += '<td>' + patients[i].group + '</td>';
        table += '<td>' + patients[i].tension + '</td>';
        table += '<td>' + patients[i].diabete + '</td>';
        table += '<td>' + patients[i].password + '</td>';
        table += '<td><button  onclick="editpatient(' + i + ')" class="btn btn-primary btn-xs"><i class="fa fa-pencil"></i></button><button  onclick="deletepatient(' + i + ')" class="btn btn-danger btn-xs"><i class="fa fa-trash-o "></i></button> ';

        table += '</tr>';
    }
    table += '</table>';

    document.getElementById('table').innerHTML = table;

}
function deletepatient(n) {

    var patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.splice(n, 1);
    localStorage.setItem("patients", JSON.stringify(patients));
    location.href = 'ProfilSecretaire.html';
}
/*
function editpatient(nbre) {

    //var patientByCIN = JSON.parse(localStorage.getItem("patientsByCIN")) || [];
    //  var numeroIDP = JSON.parse(localStorage.getItem("numeroIDP")) || [];
    patients.push(patients[nbre]);
    // numeroIDP.push(nbre);
    localStorage.setItem("patients", JSON.stringify(patients));
    //localStorage.setItem("numeroIDP", JSON.stringify(numeroIDP));
    //location.href = 'edit_patient.html';
}
*/

/****   Vaidation de RV          ***** * */
function ListeRVEnCours() {
    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous"));

    var ListRenz = '';
    ListRenz += '<tr>';
    ListRenz += '<th>' + "ID" + '</th>';
    ListRenz += '<th>' + "Name" + '</th>';
    ListRenz += '<th>' + "CIN" + '</th>';
    ListRenz += '<th>' + "Numéro" + '</th>';
    ListRenz += '<th>' + "Date de naissance" + '</th>';
    ListRenz += '<th>' + "Sexe" + '</th>';
    ListRenz += '<th>' + "adresse email" + '</th>';
    ListRenz += '<th>' + "Date" + '</th>';
    ListRenz += '<th>' + "heure" + '</th>';
    ListRenz += '<th>' + "Message" + '</th>';
    ListRenz += '<th>' + "statut" + '</th>';

    ListRenz += '<th colspan="2">' + "Action" + '</th>';

    ListRenz += '</tr>';
    for (let i = 0; i < ListRenz_vous.length; i++) {

        ListRenz += '<tr>';
        ListRenz += '<td>' + i + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].name + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].CIN + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].Num + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].dateNais + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].sexe + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].mail + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].clendrier + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].heure + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].messagee + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].statut + '</td>';
        ListRenz += '<td>' + " <button type='button' onclick='valider(" + i + ")'>Valider</button>" + '</td>';
        ListRenz += '<td>' + " <button type='button' onclick='Supprimer(" + i + ")' >Supprimer</button>" + '</td>';
        ListRenz += '</tr>';

    }
    document.getElementById('listRenCours').innerHTML = ListRenz;
}

function Supprimer(j) {

    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous")) || [];
    ListRenz_vous.splice(j, 1);
    localStorage.setItem("ListRenz_vous", JSON.stringify(ListRenz_vous));
    location.href = 'ProfilSecretaire.html';
}

function Sauvegard() {

    var Rendez_vous = {
        name: document.getElementById("noom").value,
        CIN: document.getElementById("cin").value,
        Num: document.getElementById("num").value,
        dateNais: document.getElementById("Date").value,
        sexe: document.getElementById("sexe").value,
        mail: document.getElementById("mail").value,
        adresse: document.getElementById("adresse").value,
        Heure: document.getElementById("heure").value,
        clendrier: document.getElementById("datepicker").value,
        messagee: document.getElementById("msg").value,
        statut: "valider",

    };



    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous")) || [];
    ListRenz_vous.push(Rendez_vous);
    ListRenz_vous = localStorage.setItem("ListRenz_vous", JSON.stringify(ListRenz_vous));
    location.href = "ProfilSecretaire.html";
}


/***liste de RV valider  * */
function ListeRV() {
    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous"));

    var ListRenz = '';
    ListRenz += '<tr>';
    ListRenz += '<th>' + "ID" + '</th>';
    ListRenz += '<th>' + "Name" + '</th>';
    ListRenz += '<th>' + "CIN" + '</th>';
    ListRenz += '<th>' + "Numéro" + '</th>';
    ListRenz += '<th>' + "Date de naissance" + '</th>';
    ListRenz += '<th>' + "Sexe" + '</th>';
    ListRenz += '<th>' + "adresse email" + '</th>';
    ListRenz += '<th>' + "Date" + '</th>';
    ListRenz += '<th>' + "heure" + '</th>';
    ListRenz += '<th>' + "Message" + '</th>';
    ListRenz += '<th>' + "statut" + '</th>';

    ListRenz += '<th colspan="2">' + "Action" + '</th>';

    ListRenz += '</tr>';
    for (let i = 0; i < ListRenz_vous.length; i++) {

        ListRenz += '<tr>';
        ListRenz += '<td>' + i + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].name + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].CIN + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].Num + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].dateNais + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].sexe + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].mail + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].clendrier + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].heure + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].messagee + '</td>';
        ListRenz += '<td>' + ListRenz_vous[i].statut + '</td>';
        ListRenz += '<td>' + " <button type='button' onclick='valider(" + i + ")'>Valider</button>" + '</td>';
        ListRenz += '<td>' + " <button type='button' onclick='Supprimer(" + i + ")' >Supprimer</button>" + '</td>';
        ListRenz += '</tr>';

    }
    document.getElementById('ListRenz').innerHTML = ListRenz;
}

function Supprimer(j) {

    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous")) || [];
    ListRenz_vous.splice(j, 1);
    localStorage.setItem("ListRenz_vous", JSON.stringify(ListRenz_vous));
    location.href = 'ProfilSecretaire.html';
}

function valider(j) {
    var ListRenz_vous = JSON.parse(localStorage.getItem("ListRenz_vous"));
    ListRenz_vous[j].statut = "valider";


    ListRenz_vous.splice(j, 1, Rv);
    localStorage.setItem("ListRenz_vous", JSON.stringify(ListRenz_vous));

}