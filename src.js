const openButton = document.querySelector("#open-btn");
const closeButton = document.querySelector("#close-btn");
const modalContainer = document.querySelector("#modal-container");

openButton.addEventListener("click", () => {
  toggleModal(true);
});

closeButton.addEventListener("click", () => {
  toggleModal(false);
});

modalContainer.addEventListener("click", (e) => {
  if (e.target.id !== "modal") {
    toggleModal(false);
  }
});

const toggleModal = (state) => {
  modalContainer.style.display = state ? "flex" : "none";
};
