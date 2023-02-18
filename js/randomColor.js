const cardSections = document.getElementsByClassName('changeColorClass');

// add event listener for mouseover to each card section
for (let i = 0; i < cardSections.length; i++) {
  cardSections[i].addEventListener('mouseover', function() {
    this.style.backgroundColor = randomColor();
  });

  // add event listener for mouseout to each card section
  cardSections[i].addEventListener('mouseout', function() {
    this.style.backgroundColor = '#fff';
  });
}

// function to generate random color
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



  // click btn and go to blog page
  document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = 'blog.html';
});