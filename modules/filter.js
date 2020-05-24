export default function filter() {
  console.log('event.target', event.target)
  const cards = document.querySelectorAll('.goods .card')
  const discountCheckbox = document.getElementById('discount-checkbox')
  const min = document.getElementById('min')
  const max = document.getElementById('max')
  const activLi = document.querySelector('.catalog-list li.active')

  const searchInput = document.querySelector('.search-wrapper_input')
  const searchText = new RegExp(searchInput.value.trim(), 'i')

  cards.forEach((card) => {
    const cardPrice = card.querySelector('.card-price')
    const price = parseFloat(cardPrice.textContent)
    const discount = card.querySelector('.card-sale')
    const cardTitle = card.querySelector('.card-title')
    card.parentNode.style.display = 'flex'

    if ((min.value && price < min.value) || (price > max.value && max.value)) {
      card.parentNode.style.display = 'none'
    } else if (discountCheckbox.checked && !discount) {
      card.parentNode.style.display = 'none'
    } else if (activLi && (card.dataset.category !== activLi.textContent)) {
      card.parentNode.style.display = 'none'
    } else if (!searchText.test(cardTitle.textContent)) {
      card.parentNode.style.display = 'none'
    } else {
      card.parentNode.style.display = 'flex'
    }
  })
}