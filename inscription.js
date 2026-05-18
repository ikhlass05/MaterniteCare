const modal = document.getElementById("inscriptionModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

const roleSelection = document.getElementById("roleSelection");
const sagefemmeForm = document.getElementById("sagefemmeForm");
const enceinteForm = document.getElementById("enceinteForm");
const loginFormsf = document.getElementById("loginFormsf");
const loginFormfe = document.getElementById("loginFormfe");

openBtn.onclick = () => {
  modal.style.display = "block";
  goBack(); // Reset to first step
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

/* SHOW FORM */
function showForm(type) {
    // hide everything first
    roleSelection.style.display = "none";
    sagefemmeForm.style.display = "none";
    enceinteForm.style.display = "none";
    loginFormsf.style.display = "none";
    loginFormfe.style.display = "none";

    // show correct form
    if (type === "sagefemme") {
        sagefemmeForm.style.display = "block";
    }

    else if (type === "enceinte") {
        enceinteForm.style.display = "block";
    }

    else if (type === "loginFormsf") {
        loginFormsf.style.display = "block";
    }

    else if (type === "loginFormfe") {
        loginFormfe.style.display = "block";
    }
}

function goBack() {
  roleSelection.style.display = "block";
  sagefemmeForm.style.display = "none";
  enceinteForm.style.display = "none";
  loginFormsf.style.display = "none";
  loginFormfe.style.display = "none";
}

