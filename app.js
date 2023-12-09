const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // is intersecting the vew port
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // so that animation repeats if we scroll again
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  observer.observe(el); // observe all element. in this case, each hiddenElements
});
