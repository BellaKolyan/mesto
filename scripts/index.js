const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const popupFormElement = popupElement.querySelector('.popup__form');
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');

const popupInputNameElement = popupElement.querySelector('.popup__input_surrogat_name');
const popupInputDescriptionElement = popupElement.querySelector('.popup__input_surrogat_description');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');

const openPopup = function() {
  popupElement.classList.add('popup_opened');
  popupInputNameElement.value = profileName.textContent;
  popupInputDescriptionElement.value = profileDescription.textContent;
}

  const closePopup = function() {
    popupElement.classList.remove('popup_opened');
}

const ClosePopupByClickOnOverlay = function(event) {
if (event.target === event.currentTarget) {
  closePopup();
  }
}

const submitForm = function(event) {
  event.preventDefault();
  profileName.textContent = popupInputNameElement.value;
  profileDescription.textContent = popupInputDescriptionElement.value;
  closePopup();
}

// обработчик событий
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', ClosePopupByClickOnOverlay);
popupFormElement.addEventListener('submit', submitForm);
