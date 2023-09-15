function showImageById(imageId) {
    const images = document.querySelectorAll('.slider');
    images.forEach(image => {
        if (image.id === imageId) {
            image.style.display = 'block'; // Display the selected image
        } else {
            image.style.display = 'none'; // Hide other images
        }
    });
}