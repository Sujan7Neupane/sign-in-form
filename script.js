let visibleBtn = document.querySelector("#visible-btn");

visibleBtn.addEventListener("click", () => {
  const passField = document.querySelector("#password");
  if (passField.type === "password") {
    passField.type = "text";
    this.textContent = "Hide";
  } else {
    passField.type = "password";
    this.textContent = "Show";
  }
});
