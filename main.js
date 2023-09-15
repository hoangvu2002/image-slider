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
const firstCircle = document.querySelector('.circle');
firstCircle.classList.add('on');

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

const leftArrow = document.getElementById('left');
leftArrow.addEventListener('click', () => {
    const currentSlide = document.querySelector('.on');
    const slideId = String(currentSlide.getAttribute('data-id'));
    if ( slideId === "slide1") {
        return;
    };

    nextSlide = `${slideId.slice(0,-1)}${Number(slideId.slice(-1))-1}`;
    showImageById(nextSlide);
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle) => {
        circle.classList.remove('on');
        if (circle.getAttribute('data-id') === nextSlide) {
            circle.classList.add('on');
        };
    })
});

const rightArrow = document.getElementById('right');
rightArrow.addEventListener('click', () => {
    const currentSlide = document.querySelector('.on');
    const slideId = String(currentSlide.getAttribute('data-id'));
    if ( slideId === "slide4") {
        return;
    };

    nextSlide = `${slideId.slice(0,-1)}${Number(slideId.slice(-1))+1}`;
    showImageById(nextSlide);
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle) => {
        circle.classList.remove('on');
        if (circle.getAttribute('data-id') === nextSlide) {
            circle.classList.add('on');
        };
    })
});