export default function getData() {
  const goodsWrapper = document.querySelector('.goods')
  return fetch('db/db.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('No data was received. Error: ' + response.status)
      }
    })
    .catch(err => {
      console.warn(err)
      goodsWrapper.innerHTML = '<div class="mt-5 p-5 text-danger bg-light shadow lead text-center" >Something went wrong<br> There may be a problem with the server ...</div>'
    })
}