document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");

  form.addEventListener("submit", e => {
    e.preventDefault();

    let valid = true;

    form.querySelectorAll("input, textarea").forEach(field => {
      if (!field.checkValidity()) {
        field.classList.add("is-invalid");
        valid = false;
      } else {
        field.classList.remove("is-invalid");
      }
    });

    if (valid) {
      successMsg.classList.remove("d-none");
      form.reset();
    }
  });

});
