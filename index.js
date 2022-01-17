const mainImage = document.querySelector('.top-content__product')
const gallerySmallImage = document.querySelectorAll('#gallerySmallImage')

function imagesParsing(images) {
  images.forEach((i) => {
    i.style.cursor = 'pointer'
    addEventImage(i)
  })
}
function addEventImage(image) {
  image.addEventListener('click', () => {
    mainImage.style.backgroundImage = `url(${image.src})`
  })
}



imagesParsing(gallerySmallImage)



const header = document.querySelector('.header')
const defaultOffset = 24
let lastScroll = 0

function scrollPosition () {
  return window.pageYOffset
}

function hideContain () {
  return header.classList.contains('hide')
}

window.addEventListener('scroll', () => {
  if(scrollPosition() > lastScroll && !hideContain() && scrollPosition() > defaultOffset) {
    header.classList.add('hide')
  } else if(scrollPosition() < lastScroll && hideContain()) {
    header.classList.remove('hide')
  }

  lastScroll = scrollPosition()
})



const bagPlusButton = document.querySelector('#plusButton')
const bagMinusButton = document.querySelector('#minusButton')
const productNumber = document.querySelector('.bag-count-text')

function changeNumber(button) {
  if (button) {
    productNumber.textContent = Number(productNumber.textContent) + 1
  } else {
    productNumber.textContent = Number(productNumber.textContent) - 1
  }
}

bagPlusButton.addEventListener('click', () => {
  changeNumber(true)
})

bagMinusButton.addEventListener('click', () => {
  if(productNumber.textContent === '1') {
    return
  } else {
    changeNumber(false)
  }
})


const addFavoriteButton = document.querySelector('.favorites-add-button')
const product = document.querySelector('.product__description-title')
const addBagButton = document.querySelector('.bag-add-button')
const notificationPlague = document.querySelector('.product-buy__notification')

function notificationActive (button) {
  if(button) {
    notificationPlague.textContent = `Товар ${product.textContent} в количестве ${productNumber.textContent} единиц добавлен в корзину`
    notificationPlague.classList.add('visible-plague')
    setTimeout(notificationHide, 3000)
  } else {
    notificationPlague.textContent = `Товар ${product.textContent} добавлен  в избранное`
    notificationPlague.classList.add('visible-plague')
    setTimeout(notificationHide, 3000)
  }
}

function notificationHide () {
  notificationPlague.classList.remove('visible-plague')
}
addBagButton.addEventListener('click', () => {
  notificationActive(true)
})

addFavoriteButton.addEventListener('click', () => {
  notificationActive(false)
})
const menuButton = document.querySelector('.menu-button')
const popupMenu = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close-button')
const popupCloseLink = document.querySelector('#closeLink')

function openPopup (popup) {
  popup.classList.add('visible-plague')
}

function closePopup (popup) {
  popup.classList.remove('visible-plague')
}


menuButton.addEventListener('click', () => {
  openPopup(popupMenu)
})

popupCloseButton.addEventListener('click', () => {
  closePopup(popupMenu)
})

popupCloseLink.addEventListener('click', () => {
  closePopup(popupMenu)
})