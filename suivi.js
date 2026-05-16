const modal = document.getElementById("inscriptionModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

/* OPEN MODAL */

openBtn.onclick = () => {
    modal.style.display = "flex";
};

/* CLOSE WITH X */

closeBtn.onclick = () => {
    modal.style.display = "none";
};

/* CLOSE WHEN CLICK OUTSIDE */

window.onclick = (event) => {
    if(event.target === modal){
        modal.style.display = "none";
    }
};

/* CLOSE WITH NON BUTTON */

function closeModal(){
    modal.style.display = "none";
}

/* LOGOUT */

function logout(){

    /* redirection page accueil */

    window.location.href = "index.html";

}