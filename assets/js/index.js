window.onload = setUpPage();

function setUpPage() {
  var squares = document.querySelectorAll('.project-square-item-image-content-cover');
  for (var i = 0; i < squares.length; i++) {
    var square = squares[i];
    if (typeof window.addEventListener === 'function') {
      (function(_square) {
        _square.addEventListener('mouseenter', showText);
        _square.addEventListener('mouseleave', hideText);
      })(square);
    }
  }
}

function showText(event) {
  var square_element = event.target;
  var square_text_element = square_element.querySelector('.project-square-item-image-content-cover-text');
  try {
    square_text_element.className += square_text_element.className ? ' hovered' : 'hovered';
  }
  catch (TypeError) {
  }
}

function hideText(event) {
  var square_element = event.target;
  var square_text_element = square_element.querySelector('.project-square-item-image-content-cover-text');
  try {
    square_text_element.className = "project-square-item-image-content-cover-text";
  }
  catch (TypeError) {
  }
}
