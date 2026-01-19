document.querySelectorAll(".hotspot").forEach(hotspot => {
  hotspot.addEventListener("click", () => {
    alert(hotspot.dataset.title);
  });
});

document.querySelectorAll(".location-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".location-card")
      .forEach(c => c.classList.remove("active"));

    card.classList.add("active");
  });
});
