const quotes = [
  "“我不会停下来，除非月亮先忘了自己的名字。”",
  "“他把沉默练成盔甲，又把温柔藏进指尖。”",
  "“如果世界要我交出答案，我就先成为问题本身。”",
];

const quoteText = document.querySelector("#quote-text");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = [...document.querySelectorAll("main section[id]")];

let quoteIndex = 0;

function rotateQuote() {
  if (!quoteText) return;
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quoteText.classList.remove("is-visible");

  window.setTimeout(() => {
    quoteText.textContent = quotes[quoteIndex];
    quoteText.classList.add("is-visible");
  }, 180);
}

function updateActiveNav() {
  let currentSection = sections[0];

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 140) {
      currentSection = section;
    }
  });

  const currentId = currentSection?.id;

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("is-active", isActive);
  });
}

quoteText?.classList.add("is-visible");
updateActiveNav();

window.setInterval(rotateQuote, 3800);
window.addEventListener("scroll", updateActiveNav, { passive: true });
