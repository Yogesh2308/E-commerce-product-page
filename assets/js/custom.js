const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const navigation = document.querySelector('.navigation')
const overlay = document.querySelector('.overlay')
const cartBtn = document.querySelector('.cart-btn')
const cartWrap = document.querySelector('.cart-wrap')
const productList = document.querySelector(".banner-area")
const amount = document.querySelector('.amount')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const addToCart = document.querySelector('.add-btn')
const wrap = document.querySelector('.cart-content')
const indicator = document.querySelector('.indicator')
const remove = document.querySelector('.delete-btn')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('previous')
const slider = document.querySelector('.mobile-thumb')
const mobileThumb = document.querySelector('.thumb-mob')
const images = document.querySelectorAll('.preview img')
const mainThumbnail = document.querySelector('.main-thumbnail')

let amountValue = 0
let cuurentImg = 0
menu.addEventListener('click', () => {
    navigation.classList.add('active')
    menu.style.display = "none"
    close.style.display = "block"
    overlay.style.display = "block"
})
close.addEventListener('click', () => {
    navigation.classList.remove('active')
    menu.style.display = "block"
    close.style.display = "none"
    overlay.style.display = "none"
})

cartBtn.addEventListener('click', () => {
    cartWrap.classList.toggle('active')
})

// function removeCartItem(e) {
//     let buttonClicked = e.target
//     buttonClicked.parentElement.parentElement.remove()
// }


function handlePlus() {
    amountValue++
    amount.innerText = amountValue
}
function handleMinus() {
    if (amountValue > 0) {
        amountValue--
    }
    amount.innerText = amountValue
}
function addItem() {
    if (amountValue > 0 ) {
        const total = 125.00 * amountValue
        wrap.classList.remove('empty')
        wrap.innerHTML = `<div class="product">
    <div class="cart-products">
    <img src="/assets/images/images/image-product-1-thumbnail.jpg" class="product-img" alt="product" width="50px" style="border-radius: 5px">
      <div class="product-info">
        <p class="product-title">Fall Limited Edition Sneakers</p>
       <p class="price-info"><span>$125.00</span> × <span class="number">${amountValue}</span> <b>$${total}</b></p>
      </div>
      <button class="delete-btn" onclick="removeItem()">
      <img src="/assets/images/images/icon-delete.svg" alt="delete">
      </button>
    </div>
    <button class="checkout-btn">Checkout</button>
  </div>`;
        indicator.style.display = "block"
        indicator.innerText = amountValue
    }
}

function removeItem() {
    wrap.classList.add('empty')
    wrap.innerHTML = `<p>Your cart is empty</p>`
    indicator.style.display = "none"
}
function nextImage() {
    if (cuurentImg == 4) {
        cuurentImg = 1
    } else {
        cuurentImg++
    }
    mobileThumb.src = `/assets/images/images/image-product-${cuurentImg}.jpg`
}
function prevImage() {
    if (cuurentImg == 1) {
        cuurentImg = 4
    } else {
        cuurentImg--;
    }
    mobileThumb.src = `/assets/images/images/image-product-${cuurentImg}.jpg`

}

images.forEach((image) => {
    image.addEventListener('click', () => {
        const lastImg = document.querySelectorAll('.selected')
        if (lastImg) {
            lastImg[0].classList.remove('selected')
        }
        image.classList.add('selected')
        const seletedImg = document.querySelector('.selected')
        switch (seletedImg.getAttribute('src')) {
            case "/assets/images/images/image-product-1-thumbnail.jpg":
                mainThumbnail.src = "/assets/images/images/image-product-1.jpg"
                break;
            case "/assets/images/images/image-product-2-thumbnail.jpg":
                mainThumbnail.src = "/assets/images/images/image-product-2.jpg"
                break;
            case "/assets/images/images/image-product-3-thumbnail.jpg":
                mainThumbnail.src = "/assets/images/images/image-product-3.jpg"
                break;
            case "/assets/images/images/image-product-4-thumbnail.jpg":
                mainThumbnail.src = "/assets/images/images/image-product-4.jpg"
                break;
        }
    })
})

plus.addEventListener('click', handlePlus)
minus.addEventListener('click', handleMinus)
addToCart.addEventListener('click', addItem)
nextBtn.addEventListener('click', nextImage)
prevBtn.addEventListener('click', prevImage)