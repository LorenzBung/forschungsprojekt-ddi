let toDoListe = [];

document.getElementById("add").onclick = function() {
    //Schreiben Sie hier Ihren Code
    updateList(); //Aktualisiert die angezeigte To-Do-Liste
};

function updateList() {
    let liste = document.getElementById("liste");
    liste.innerHTML = "";
    for (let item of toDoListe) {
        let li = document.createElement('li');
        li.innerHTML = item;
        liste.appendChild(li);
    }
};
