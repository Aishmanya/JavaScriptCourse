const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(btn) {
  btn.addEventListener('click', function(e){ //its like konsa event sunna and sun ke kya karna (kispe karna kaise karna ke liye we have event listener as e)
    if (e.target.id === 'grey'){
      document.body.style.backgroundColor=e.target.id
    }

    if (e.target.id === 'white'){
      document.body.style.backgroundColor=e.target.id
    }
    if (e.target.id === 'blue'){
      document.body.style.backgroundColor=e.target.id
    }
    if (e.target.id === 'yellow'){
      document.body.style.backgroundColor=e.target.id
    }
    
  })
})