
var patients = JSON.parse(localStorage.getItem("patients"));
table = '<table>'


for (var i = 0; i < patients.length; i++) {

    table += '<label>PROFIL   :  </label><tr>' + patients[i].nom + '</tr><br><br>';

    table += '<label>NOM  :  </label><tr>' + patients[i].nom + '</tr><br>';

    table += '<label>PRENOM  :  </label><tr>' + patients[i].prenom + '</tr><br>';

    table += '<label>DATE DE NAISSANCE :  </label><tr>' + patients[i].date + '</tr><br>';
    table += '<label>SEXE :  </label><tr>' + patients[i].sexe + '</tr><br>';

    table += '<label>Email :  </label><tr>' + patients[i].email + '</tr><br>';
    table += '<label>NUMERO TEL :  </label><tr>' + patients[i].mobile + '</tr><br>';
    table += '<label>MOT DE PASSE :  </label><tr>' + patients[i].password + '</tr><br>';
    table += '<label>ROLE :  </label><tr>' + patients[i].rol + '</tr><br>';
    table += '<label>ADRESSE :  </label><tr>' + patients[i].adress + '</tr><br>';
    table += '<label>GROUPE SANGUIN :  </label><tr>' + patients[i].group + '</tr><br>';
    table += '<label>TENSION :  </label><tr>' + patients[i].tension + '</tr><br>';
    table += '<label>ETAT CEVILE :  </label><tr>' + patients[i].etat + '</tr><br>';
    table += '<label>DIABETE :  </label><tr>' + patients[i].diabete + '</tr><br>';


}
table += '</table>';


//document.getElementById("listelabel").innerHTML = table;
/*
function creation() {

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
        
        
        rol: "patient",

    };

    var patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.push(patient);
    localStorage.setItem("patients", JSON.stringify(patients));

}

function sup(valeur){
    var supprimer=JSON.parse(localStorage.getItem("patients"));
    supprimer.splice(valeur, 1);
    localStorage.setItem("patients",JSON.stringify(supprimer));
    location.href="registerpatients.html";



}
*/
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
