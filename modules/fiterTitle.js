export default function filterTitle() {
  const cards = document.querySelectorAll('.goods .card')
  const searchInput = document.querySelector('.search-wrapper_input')
  const searchText = new RegExp(searchInput.value.trim(), 'i')
  cards.forEach((card) => {
    const cardTitle = card.querySelector('.card-title')
    if (!searchText.test(cardTitle.textContent)) {
      card.parentNode.style.display = 'none'
    } else {
      card.parentNode.style.display = 'flex'
    }
  })
}
