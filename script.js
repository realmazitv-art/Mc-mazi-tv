document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const registrationId =
                "MCMTV-" + Math.floor(1000 + Math.random() * 9000);

            alert(
                "Registration Successful!\n\n" +
                "Registration ID: " + registrationId +
                "\n\nThank you for registering with MC MAZI TV."
            );

            form.reset();
        });
    }

});