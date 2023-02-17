
  const cardSection = document.getElementById('change-color');

 


// add event listener for mouseover
cardSection.addEventListener('mouseover', function() {
  cardSection.style.backgroundColor = randomColor();
});

// add event listener for mouseout
cardSection.addEventListener('mouseout', function() {
  cardSection.style.backgroundColor = '#fff';
});


    // function to generate random color
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}