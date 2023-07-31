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
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "You must be the change you wish to see in the world. - Mahatma Gandhi",
  "It is during our darkest moments that we must focus to see the light. - Aristotle Onassis",
  "Imagination is more important than knowledge. - Albert Einstein",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
  "If you want to achieve greatness stop asking for permission. - Anonymous",
  "The best revenge is massive success. - Frank Sinatra",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
  "It always seems impossible until it's done. - Nelson Mandela",
  "In three words I can sum up everything I've learned about life: It goes on. - Robert Frost",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "A person who never made a mistake never tried anything new. - Albert Einstein",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Don't count the days, make the days count. - Muhammad Ali",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
  "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
  "The only thing you can control is yourself. - Dr. Seuss",
  "A journey of a thousand miles begins with a single step. - Lao Tzu",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "It is not the mountain we conquer, but ourselves. - Sir Edmund Hillary",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The mind is everything. What you think you become. - Buddha",
  "Change your thoughts and you change your world. - Norman Vincent Peale",
  "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
  "The best way to predict the future is to create it. - Peter Drucker",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
  "The only thing worse than being blind is having sight but no vision. - Helen Keller",
  "The only time you fail is when you fall down and stay down. - Stephen Richards",
  "I'm not afraid of storms, for I'm learning how to sail my ship. - Louisa May Alcott",
  "The secret of getting ahead is getting started. - Mark Twain",
  "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. - Helen Keller",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
  "The best way to predict the future is to create it. - Peter Drucker",
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
