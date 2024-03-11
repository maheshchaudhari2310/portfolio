//Contact Form in PHP
const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  // Temporary solution
  setTimeout(() => {
    statusTxt.innerText =
      "Ooops! Your message could n't be delivered.\nYou can contact using the given phone number and email id.";
    statusTxt.style.color = "red";
  }, 2000);

  // let xhr = new XMLHttpRequest();
  // xhr.open("POST", "mail.php", true);
  // xhr.onload = () => {
  //   if (xhr.readyState == 4 && xhr.status == 200) {
  //     let response = xhr.response;
  //     if (
  //       response.indexOf("required") != -1 ||
  //       response.indexOf("valid") != -1 ||
  //       response.indexOf("failed") != -1
  //     ) {
  //       statusTxt.style.color = "red";
  //     } else {
  //       form.reset();
  //       setTimeout(() => {
  //         statusTxt.style.display = "none";
  //       }, 3000);
  //     }
  //     response =
  //       "Ooops! Your message could n't be delivered.\nYou can contact using the given phone number and mail id.";
  //     statusTxt.innerText = response;
  //     form.classList.remove("disabled");
  //   }
  // };
  // let formData = new FormData(form);
  // xhr.send(formData);
};
