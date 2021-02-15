(function(d){
  var button = d.querySelector('#mybutton'),
      checkPhone = function() {
        alert('Вы нажали на кнопку!');
      }

  button.addEventListener('click', checkPhone)
})(document)