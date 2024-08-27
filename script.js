let currentImage = 0;
const images = ["1.jpg", "2.jpg", "3.jpg"];
const productDetailsUrls = ["product1.html", "product2.html", "product3.html"];

function updateImage() {
    const imgElement = document.getElementById('lookbookImage');
    imgElement.src = images[currentImage];
  }
  
  function next() {
    currentImage = (currentImage + 1) % images.length;
    updateImage();
  }
  
  function previous() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    updateImage();
  }
  
  function viewProductDetails() {
    window.location.href = productDetailsUrls[currentImage];
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      next();
    } else if (event.key === 'ArrowLeft') {
      previous();
    }
  });
  
  // Initialize with the first image
  window.onload = () => {
    updateImage();
  };