document.addEventListener("DOMContentLoaded", () => {

  // Event data (mock – mund të vijë nga backend më vonë)
  const events = {
    heritage: {
      title: "Albanian Heritage Festival",
      date: "October 25, 2025",
      description:
        "Celebrate Albanian culture with traditional music, dance performances and artisan demonstrations at Pazari i Ri."
    },
    workshop: {
      title: "Artisan Workshop",
      date: "October 28, 2025",
      description:
        "Learn traditional crafts directly from master artisans. Limited spots available."
    },
    food: {
      title: "Taste of Tirana",
      date: "November 2, 2025",
      description:
        "Sample authentic Albanian cuisine from the best local vendors."
    }
  };

  // View Details buttons
  document.querySelectorAll(".btn-danger").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const keys = Object.keys(events);
      const event = events[keys[index]];

      alert(
        `${event.title}\n\n📅 ${event.date}\n\n${event.description}`
      );
    });
  });

  // Reserve Spot simulation
  document.querySelectorAll(".btn-danger").forEach(btn => {
    btn.addEventListener("dblclick", () => {
      btn.textContent = "Reserved ✓";
      btn.disabled = true;
      btn.classList.remove("btn-danger");
      btn.classList.add("btn-success");
    });
  });

});
