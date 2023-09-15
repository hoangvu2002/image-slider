function showImageById(imageId) {
  const images = document.querySelectorAll('.slider');
  images.forEach((image) => {
    if (image.id === imageId) {
      image.style.display = 'block'; // Display the selected image
    } else {
      image.style.display = 'none'; // Hide other images
    }
  });
}

showImageById('slide1');

const circles = document.querySelectorAll('.circle');
circles.forEach((circle) => {
  circle.addEventListener('click', () => {
    showImageById(circle.getAttribute('data-id'));
    const items = document.querySelectorAll('.circle');
    items.forEach((item) => {
      item.classList.remove('on');
    });
    circle.classList.add('on');
  });
});

