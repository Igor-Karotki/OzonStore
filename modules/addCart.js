export default function addCart() {
  const cards = document.querySelectorAll('.goods .card')
  const cartWrapper = document.querySelector('.cart-wrapper')
  const cartEmpty = document.getElementById('cart-empty')
  const countGoods = document.querySelector('.counter')

  cards.forEach((card) => {
    const btn = card.querySelector('button')
    btn.addEventListener('click', () => {
      const cardClone = card.cloneNode(true)
      cartWrapper.appendChild(cardClone)
      showData()

      const removeBtn = cardClone.querySelector('.btn')
      removeBtn.textContent = 'Remove'
      removeBtn.addEventListener('click', () => {
        cardClone.remove()
        showData()
      })
    })
  })

  function showData() {

    const cardsCart = cartWrapper.querySelectorAll('.card')
    const cardsPrice = cartWrapper.querySelectorAll('.card-price')
    const cardTotal = document.querySelector('.cart-total span')
    countGoods.textContent = cardsCart.length

    let sum = 0
    cardsPrice.forEach((cardPrice) => {
      sum += parseFloat(cardPrice.textContent)
    })
    cardTotal.textContent = sum

    if (cardsCart.length !== 0) {
      cartEmpty.remove()
    } else {
      cartWrapper.appendChild(cartEmpty)
    }
  }
}