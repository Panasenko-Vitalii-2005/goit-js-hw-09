const formData = {
  email: "",
  message: "",
};
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email ?? "";
  formData.message = parsedData.message ?? "";
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
form.addEventListener("input", (event) => {
  // Записуємо значення в об'єкт formData, прибираючи пробіли по краях (.trim())
  formData[event.target.name] = event.target.value.trim();

  // Зберігаємо оновлений об'єкт у LocalStorage
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert("Please fill in all fields before submitting the form.");
    return;
  }
  console.log("Form Data:", formData);
  form.reset();
  localStorage.removeItem(localStorageKey); // Удаляет данные из LocalStorage после отправки формы
  formData.email = "";
  formData.message = "";
});
