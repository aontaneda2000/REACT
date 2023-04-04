/**************************/
/* Delegación de eventos */
/*************************/
/* ¡La delegación de eventos es verdaderamente fantástica! Es uno de los patrones más útiles entre los eventos DOM. */

// const addsButtons = Array.from(document.querySelectorAll('.btn-add'))

// addsButtons.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     console.log(btn.dataset.id)
//   })
// })

document.getElementById('content').addEventListener('click', (e) => {

  if (e.target.classList.contains('btn-add')) {
    console.log(e.target.dataset.id)
  }

})