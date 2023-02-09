// popup
const popupOne = document.querySelector('.popup_one')
const popupTwo = document.querySelector('.popup_two')
const popupThree = document.querySelector('.popup_three')
// console.log({popupOne, popupTwo, popupThree})

// popup button close
const popupOneClose = popupOne.querySelector('.popup__close')
const popupTwoClose = popupTwo.querySelector('.popup__close')
const popupThreeClose = popupThree.querySelector('.popup__close')
// console.log({popupOne, popupOneClose, popupTwo, popupTwoClose, popupThree, popupThreeClose})

// popup button open
const popupOneOpen = document.querySelector('.popup-open_one')
const popupTwoOpen = document.querySelector('.popup-open_two')
const popupThreeOpen = document.querySelector('.popup-open_three')
// console.log(popupOneOpen, popupTwoOpen, popupThreeOpen)

// функция добавляет класс popup_opened
const togglePopup = function (popup) {
    popup.classList.toggle('popup_opened')
}

// выбираем константу popupOneOpen в которой храниться найденое значение класса popup-open_one у кнопки
// вешаем на неё слушатель действия нажатие и вызываем функцию которая присваивает класс popup_opened или
// убирает его, если он уже есть
// в функцию передаем в виде переменной значение константы popupOne, то есть находим по классу или айди
// нужный нам элемент
popupOneOpen.addEventListener('click', function () {
    togglePopup(popupOne)
})

popupTwoOpen.addEventListener('click', function () {
    togglePopup(popupTwo)
})

popupThreeOpen.addEventListener('click', function () {
    togglePopup(popupThree)
})

// слушатель на кнопку закрытия popup
popupOneClose.addEventListener('click', function () {
    togglePopup(popupOne)
})

popupTwoClose.addEventListener('click', function () {
    togglePopup(popupTwo)
})

popupThreeClose.addEventListener('click', function () {
    togglePopup(popupThree)
})

/* togglePopup() // тут будет undifine так как мы не чего не передали
togglePopup(popupOne) // popupOne и т.д. - это атрибут кторый передается в popup функции togglePopup
togglePopup(popupTwo)
togglePopup(popupThree) */