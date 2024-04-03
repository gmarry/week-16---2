// Получение ссылок на все входные данные
const nameInput = document.getElementById("name");
const errorName = document.getElementById("error-name");
const emailInput = document.getElementById("email");
const errorEmail = document.getElementById("error-email");
const ageInput = document.getElementById("age");
const errorAge = document.getElementById("error-age");
const radioButtons = document.getElementsByName("gender");
const errorRadio = document.getElementById("error-gender");
const selectInput = document.getElementById("profession");
const errorSelect = document.getElementById("error-profession");
const passwordInput = document.getElementById("password");
const errorPassword = document.getElementById("error-password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorConfirmPassword = document.getElementById("error-confirm-password");
const checkboxElement = document.getElementById("agreement");
const errorCheckboxElement = document.getElementById("error-agreement");

// Функция для проверки ввода
function validateInput(inputElement, errorElement) {
  if (!inputElement.checkValidity()) {
    inputElement.classList.add("error");
    errorElement.textContent = inputElement.validationMessage;
  } else {
    inputElement.classList.remove("error");
    errorElement.textContent = "";
  }
}

// Функция для проверки выбора радиокнопки
function validateRadioBtn() {
  let checkedRadio = false;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      checkedRadio = true;
      break;
    }
  }
  if (!checkedRadio) {
    errorRadio.textContent = "Вы должны выбрать пол";
  } else {
    errorRadio.textContent = "";
  }
}

// Функция для проверки пароля
function validatePassword() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.classList.add("error");
    errorConfirmPassword.textContent = "Пароли не совпадают";
  } else {
    confirmPasswordInput.classList.remove("error");
    errorConfirmPassword.textContent = "";
  }
}

// Функция для проверки чекбокса
function validateCheckbox(checkboxElement, errorCheckboxElement) {
  if (!checkboxElement.checked) {
    checkboxElement.classList.add("error");
    errorCheckboxElement.textContent = "Пожалуйста, выберите данный пункт.";
  }
}

// Функция для проверки выбора профессии
function validateSelect(selectInput, errorSelect) {
  if (selectInput.value === "") {
    selectInput.classList.add("error");
    errorSelect.textContent = "Вы должны выбрать элемент из списка";
  }
}

// Функция для очистки ошибок
function clearErrors() {
  const inputElements = document.querySelectorAll(
    "input:not([type='checkbox'])"
  );
  const errorElements = document.getElementsByClassName("error");

  Array.from(inputElements).forEach(function (inputElement) {
    inputElement.classList.remove("error");
  });

  selectInput.classList.remove("error");
  errorSelect.textContent = "";

  Array.from(errorElements).forEach(function (errorElement) {
    errorElement.textContent = "";
  });
  checkboxElement.classList.remove("error");
  errorCheckboxElement.textContent = "";
}

// Добавление обработчика события на отправку формы
document.addEventListener("DOMContentLoaded", function () {
  // Ожидаем события загрузки документа.
  document.forms.registration.addEventListener("submit", function (event) {
    // Находим форму с именем "registration" и добавляем обработчик события submit.
    event.preventDefault();
    // Отменяем стандартное поведение формы при отправке.
    clearErrors();
    // Очищаем все сообщения об ошибках.
    validateInput(nameInput, errorName);
    // Проверяем валидность имени.
    validateInput(emailInput, errorEmail);
    // Проверяем валидность email.
    validateInput(ageInput, errorAge);
    // Проверяем валидность возраста.
    validateRadioBtn();
    // Проверяем выбран ли пол.
    validateSelect(selectInput, errorSelect);
    // Проверяем выбрана ли профессия.
    validateInput(passwordInput, errorPassword);
    // Проверяем валидность пароля.
    validateInput(confirmPasswordInput, errorConfirmPassword);
    // Проверяем валидность подтверждения пароля.
    validateCheckbox(checkboxElement, errorCheckboxElement);
    // Проверяем, отмечен ли чекбокс согласия.
    validatePassword();
    // Проверяем совпадение паролей.
    if (
      nameInput.checkValidity() &&
      emailInput.checkValidity() &&
      ageInput.checkValidity() &&
      document.querySelector('input[name="gender"]:checked') &&
      selectInput.checkValidity() &&
      passwordInput.checkValidity() &&
      confirmPasswordInput.checkValidity() &&
      checkboxElement.checked
    ) {
      // Если все поля прошли валидацию...
      console.log("Значение имени:", nameInput.value);
      console.log("Значение email:", emailInput.value);
      console.log("Значение возраста:", ageInput.value);
      console.log(
        "Значение выбранной радиокнопки:",
        document.querySelector('input[name="gender"]:checked').value
      );
      console.log("Значение выпадающего списка:", selectInput.value);
      console.log("Значение пароля:", passwordInput.value);
      console.log("Значение повторного пароля:", confirmPasswordInput.value);
      console.log("Значение чекбокса:", checkboxElement.value);
      // Выводим значения полей в консоль.
      registration.reset();
      // Очищаем форму.
    } else {
      // Если не все поля прошли валидацию...
      console.log("Не все поля проходят валидацию");
      // Выводим сообщение об ошибке в консоль.
    }
  });
});
