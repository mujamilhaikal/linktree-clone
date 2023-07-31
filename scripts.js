document.addEventListener("DOMContentLoaded", function () {

// Initialize AOS library
AOS.init();

// No scroling
window.addEventListener("scroll", function (e) {
  e.preventDefault();
  window.scrollTo(0, 0);
});

// Lazy loading images
const images = document.querySelectorAll("img[data-src]");

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-src");

        img.setAttribute("src", src);
        img.onload = () => {
          img.removeAttribute("data-src");
        };

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

images.forEach(image => {
  lazyLoad(image);
});

// Adjust profile picture size on mobile
const profilePicture = document.querySelector(".profile-picture");

const adjustProfilePictureSize = () => {
  if (window.innerWidth <= 768) {
    profilePicture.style.width = "100px";
    profilePicture.style.height = "100px";
  } else {
    profilePicture.style.width = "150px";
    profilePicture.style.height = "150px";
  }
};

// Call the function on page load and when window is resized
window.addEventListener("load", adjustProfilePictureSize);
window.addEventListener("resize", adjustProfilePictureSize);

// Quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
  "The only source of knowledge is experience. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Find the profile description element
const profileDescription = document.querySelector(".profile-description");

// Create a new paragraph element for the quote
const quoteParagraph = document.createElement("p");
quoteParagraph.classList.add("random-quote");

// Get a random quote
const randomQuote = getRandomQuote();

// Set the quote text as the content of the new paragraph
quoteParagraph.textContent = '"' + randomQuote + '"';

// Find the quote container element
const quoteContainer = document.querySelector(".quote-container");

// Insert the new paragraph element into the quote container
quoteContainer.appendChild(quoteParagraph);


// Footer

// Find the footer element
const footer = document.querySelector(".footer");

// Get the current year
const currentYear = new Date().getFullYear();

// Set the footer text to include the current year
footer.textContent = `©️ ${currentYear} with ❤️ Muhamad Haikal Mujamil.`;

// Menggunakan JavaScript untuk mencegah scroll melalui interaksi pengguna

});
