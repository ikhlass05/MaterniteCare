function showDevelopment(){

    let week =
    parseInt(document.getElementById("weekInput").value);

    if(!week || week < 1 || week > 40){

        alert("Entrez une semaine entre 1 et 40");

        return;
    }

    /* MOVE LIGHT */

    let percent =
    (week / 40) * 100;

    document.getElementById("movingLight")
    .style.left =
    `calc(${percent}% - 50px)`;

    /* TEXT */

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
}