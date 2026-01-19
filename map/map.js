document.addEventListener("DOMContentLoaded", () => {

  const markers = document.querySelectorAll(".map-marker");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("mapSearch");

  // MARKER CLICK
  markers.forEach(marker => {
    marker.addEventListener("click", () => {
      markers.forEach(m => m.classList.remove("active"));
      marker.classList.add("active");

      alert(
        `${marker.dataset.name}\n\nScan the QR code on-site to view the AR story.`
      );
    });
  });

  // FILTER
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      markers.forEach(marker => {
        if (filter === "all" || marker.dataset.category === filter) {
          marker.style.display = "flex";
        } else {
          marker.style.display = "none";
        }
      });
    });
  });

  // SEARCH
  searchInput.addEventListener("input", e => {
    const query = e.target.value.toLowerCase();

    markers.forEach(marker => {
      marker.style.display = marker.dataset.name
        .toLowerCase()
        .includes(query)
        ? "flex"
        : "none";
    });
  });

});
