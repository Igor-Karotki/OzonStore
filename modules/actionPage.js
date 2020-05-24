import filter from '../modules/filter'

export default function actionPage() {
  const discountCheckbox = document.getElementById('discount-checkbox')

  discountCheckbox.addEventListener('click', filter)

  const min = document.getElementById('min')
  const max = document.getElementById('max')
  min.addEventListener('change', filter)
  max.addEventListener('change', filter)
  const search = document.querySelector('.search')
  search.addEventListener('click', filter)
}