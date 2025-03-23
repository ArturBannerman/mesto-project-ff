
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;


// @todo: DOM узлы
const placesList = document.querySelector('.places__list');


// @todo: Функция создания карточки
const createCard = function(initialCards, deleteCard) {
    const newCard = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = newCard.querySelector('.card__image');
    const cardTitle = newCard.querySelector('.card__title');
    const cardDeleteButton = newCard.querySelector('.card__delete-button');
    
    cardImage.src = initialCards.link;
    cardImage.alt = initialCards.name;
    cardTitle.textContent = initialCards.name;
    cardDeleteButton.addEventListener('click', () => {
        deleteCard(cardDeleteButton);
    })

    return (newCard);
   
}

// @todo: Функция удаления карточки
function deleteCard (cardDeleteButton) {
    const removeCard = cardDeleteButton.closest('.card');
    removeCard.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(newCard => {
    placesList.append(createCard(newCard, deleteCard));
})


