const revealElements = document.querySelectorAll(".reveal");
const heroBackground = document.querySelector(".hero-background");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

function updateHeroParallax() {
  if (!heroBackground) return;

  const offset = Math.min(window.scrollY * 0.14, 40);
  heroBackground.style.transform = `scale(1.05) translateY(${offset}px)`;
}

updateHeroParallax();
window.addEventListener("scroll", updateHeroParallax, { passive: true });
