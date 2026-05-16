/*function showDevelopment(){

    let week =
    parseInt(document.getElementById("weekInput").value);

    if(!week || week < 1 || week > 41){

        alert("Entrez une semaine entre 1 et 41");

        return;
    }

    /* MOVE LIGHT 

    let percent =
    (week / 41) * 100;

    document.getElementById("movingLight")
    .style.left =
    `calc(${percent}% - 50px)`;

    /* TEXT 

    let title = "";
    let text = "";

    if(week < 7){

        title =
        "🌱 Très très petit bébé";

        text =
        "Votre bébé très minuscule comme une petite graine.";
    }

    else if(week < 15){

        title =
        "🌱 Très petit bébé";

        text =
        "Votre bébé est encore minuscule comme une graine.";
    }

    else if(week >= 15 && week < 25){

        title =
        "🍑 Taille d'une pêche";

        text =
        "Le bébé commence à bouger et ses organes se développent.";
    }

    else if(week >= 25 && week < 30){

        title =
        "🥬 Taille d'une laitue";

        text =
        "Le bébé grandit rapidement et entend les sons.";
    }

    else{

        title =
        "🍉 Taille d'une pastèque";

        text =
        "Le bébé est presque prêt pour la naissance.";
    }

    document.getElementById("resultTitle")
    .innerText = title;

    document.getElementById("resultText")
    .innerText = text;

    document.getElementById("resultBox")
    .style.display = "block";
}*/

function showDevelopment() {

    let week = parseInt(document.getElementById("weekInput").value);

    if (!week || week < 1 || week > 41) {
        alert("Entrez une semaine entre 1 et 41");
        return;
    }

    /* MOVE MARKER ON LINE */

    let percent = ((week - 1) / 40) * 100;

    document.getElementById("movingLight").style.left = percent + "%";

    /* TEXT */

    let title = "";
    let text = "";

    if (week <= 6) {
        title = "🌱 Graine";
        text = "Votre bébé est minuscule, comme une petite graine.";
    }

    else if (week <= 10) {
        title = "🫐 Myrtille";
        text = "Votre bébé commence à former ses organes principaux.";
    }

    else if (week <= 16) {
        title = "🍇 Raisin";
        text = "Ses bras, jambes et visage deviennent plus définis.";
    }

    else if (week <= 22) {
        title = "🍑 Pêche";
        text = "Votre bébé bouge davantage et commence à entendre.";
    }

    else if (week <= 30) {
        title = "🥬 Chou";
        text = "Le bébé grandit rapidement et prend du poids.";
    }

    else {
        title = "🍉 Pastèque";
        text = "Votre bébé est presque prêt pour la naissance.";
    }

    document.getElementById("resultTitle").innerText = title;
    document.getElementById("resultText").innerText = text;

    let box = document.getElementById("resultBox");
    box.style.display = "block";
}
