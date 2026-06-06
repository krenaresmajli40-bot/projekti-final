const form = document.querySelector("form");
const button = document.querySelector("button");

button.addEventListener("click", () => {

    const emri = document.querySelector('input[type="text"]').value;
    const telefoni = document.querySelectorAll('input[type="text"]')[1].value;
    const email = document.querySelector('input[type="email"]').value;
    const mesazhi = document.querySelector("textarea").value;

    if(emri === "" || telefoni === "" || mesazhi === ""){
        alert("Ju lutem plotësoni të gjitha fushat e detyrueshme!");
        return;
    }

    alert(
        "Mesazhi u dërgua me sukses! 🎉\n\n" +
        "Emri: " + emri +
        "\nTelefoni: " + telefoni +
        "\nEmail: " + email
    );

    form.reset();
});