document.addEventListener("DOMContentLoaded", () => {
  //Hamburgermenu
  const nav = document.querySelector(".nav");
  const menu = document.querySelector(".menu");
  const close = document.querySelector(".close");
  const body = document.querySelector(".body");

  menu.addEventListener("click", () => {
    nav.classList.add("nav--visible");
    menu.classList.add("menu--hide");
    close.classList.add("close--show");
    body.classList.add("body--no-scroll");
  });
  close.addEventListener("click", () => {
    nav.classList.remove("nav--visible");
    menu.classList.remove("menu--hide");
    close.classList.remove("close--show");
    body.classList.remove("body--no-scroll");
  });
  nav.addEventListener("click", () => {
    body.classList.remove("body--no-scroll");
    menu.classList.remove("menu--hide");
    close.classList.remove("close--show");
    nav.classList.remove("nav--visible");
  });
  //for contact form
  const contactForm = document.querySelector(".contact-form");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (name.value && email.value && subject.value && message.value) {
      const formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      };
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const result = await response.text();
        if (result === "success") {
          name.value = "";
          email.value = "";
          subject.value = "";
          message.value = "";
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  });
});
