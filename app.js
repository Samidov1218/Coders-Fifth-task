let cartCount = 0;
const cartCountSpan = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Bildiriş konteyneri yarat (body-yə əlavə olunur)
const notificationContainer = document.createElement("div");
notificationContainer.id = "notification-container";
document.body.appendChild(notificationContainer);

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Cart count artır
    cartCount++;
    cartCountSpan.textContent = cartCount;

    // Bildiriş yarat
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Səbətə uğurla əlavə olundu!`;

    // Bildirişi konteynerə əlavə et
    notificationContainer.appendChild(notification);

    // 3 saniyədən sonra sil
    setTimeout(() => {
      notification.remove();
    }, 3000);
  });
});


const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % images.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
});
setInterval(() => {
  index = (index + 1) % images.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);
const track = document.querySelector('.slider-track');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const cards = document.querySelectorAll('.product-card');

let position = 0;
const cardWidth = cards[0].offsetWidth + 20; // kart eni + gap

next.addEventListener('click', () => {
  const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
  if (Math.abs(position) + cardWidth <= maxScroll) {
    position -= cardWidth;
  } else {
    position = -maxScroll;
  }
  track.style.transform = `translateX(${position}px)`;
});

prev.addEventListener('click', () => {
  if (position + cardWidth <= 0) {
    position += cardWidth;
  } else {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
});
