document.getElementById("berechnen").onclick = function() {
    let fluessigkeitsmenge = document.getElementById("fluessigkeitsmenge").value;
    let alkoholanteil = document.getElementById("alkoholanteil").value;
    let gewicht = document.getElementById("gewicht").value;
    let istMann = document.getElementById("mann").checked;

    // Schreiben Sie hier Ihren Code für Aufgabe 2

    let ausgabe = document.getElementById("ausgabe");
    ausgabe.innerHTML = 0; // Mit diesem Code wird die Ausgabe erzeugt - ersetzen Sie den Wert 0 durch das Ergebnis der Berechnung.
};
