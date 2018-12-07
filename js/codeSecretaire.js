
   // document.getElementById("info").addEventListener("click", displayDate);
   function information() {
    document.getElementById("info").setAttribute("class", ""); 
    document.getElementById("ajout").setAttribute("class", "hidden"); 
    document.getElementById("ListePast").setAttribute("class", "hidden"); 

}
    function ajoute() {
        document.getElementById("info").setAttribute("class", "hidden"); 
        document.getElementById("ajout").setAttribute("class", ""); 

        document.getElementById("ListePast").setAttribute("class", "hidden"); 

    }
    function liste() {
        document.getElementById("info").setAttribute("class", "hidden"); 
        document.getElementById("ajout").setAttribute("class", "hidden"); 
        document.getElementById("ListePast").setAttribute("class", ""); 
        document.getElementById("ListePast").setAttribute("class", "ListePast"); 



    }
    










var users = JSON.parse(localStorage.getItem("users"));

var ListePast = '';
ListePast += '<tr>';
ListePast += '<th>' + "idUser" + '</th>';
ListePast += '<th>' + "UserName" + '</th>';
ListePast += '<th>' + "Télefone" + '</th>';
ListePast += '<th>' + "Date naissance" + '</th>';
ListePast += '<th>' + "email" + '</th>';
ListePast += '<th>' + "Password" + '</th>';
ListePast += '<th>' + "Message" + '</th>';

ListePast += '<th colspan="2">' + "Action" + '</th>';

ListePast += '</tr>';

for (let i = 0; i < users.length; i++) {
    if ((users[i].specialité == "")||(users[i].specialité == "Rien")) {

        ListePast += '<tr>';
        ListePast += '<td>' + i + '</td>';
        ListePast += '<td>' + users[i].username + '</td>';
        ListePast += '<td>' + users[i].Télé + '</td>';
        ListePast += '<td>' + users[i].dateNaissance + '</td>';
        ListePast += '<td>' + users[i].email + '</td>';
        ListePast += '<td>' + users[i].password + '</td>'; 
        ListePast += '<td>' + users[i].message + '</td>';
        ListePast += '<td>' + " <button type='button' onclick='edit(" + i + ")'>edit</button>" + '</td>';
        ListePast += '<td>' + " <button type='button' onclick='delet(" + i + ")' >Supprimer</button>" + '</td>';

        ListePast += '</tr>';

    }


}

ListePast += '</table>';
document.getElementById('ListePast').innerHTML = ListePast;




function delet(value) {
    var users = JSON.parse(localStorage.getItem("users"));
    users.splice(value, 1);
    users = localStorage.setItem("users", JSON.stringify(users));
    location.href = "ProfilSecretaire.html";
}
