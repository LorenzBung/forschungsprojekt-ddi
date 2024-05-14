document.getElementById("shuffle").onclick = function() {
    let songs = []; //Schreiben Sie hier Ihre Lieblingssongs hinein.
    let index = Math.floor(Math.random() * len); //Diese Zeile generiert eine Zufallszahl. Ersetzen Sie len durch die Länge ihrer Liste.

    document.getElementById("ausgabe").innerHTML = "Hier steht der Songvorschlag."; //Ersetzen Sie den String, um die Ausgabe zu schreiben.
};

