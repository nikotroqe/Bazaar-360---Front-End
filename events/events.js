const calendarTitle = document.getElementById("calendarTitle");
const calendarBody = document.getElementById("calendarBody");
const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

let currentDate = new Date();
let selectedDay = null;

function renderCalendar() {
  calendarBody.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  calendarTitle.textContent =
    currentDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric"
    });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  let dayCount = 1;
  let row = document.createElement("tr");

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    const td = document.createElement("td");
    td.textContent = prevMonthDays - i;
    td.classList.add("muted");
    row.appendChild(td);
  }

  // Current month days
  for (let i = firstDay; i < 7; i++) {
    row.appendChild(createDayCell(dayCount++));
  }
  calendarBody.appendChild(row);

  while (dayCount <= daysInMonth) {
    row = document.createElement("tr");
    for (let i = 0; i < 7 && dayCount <= daysInMonth; i++) {
      row.appendChild(createDayCell(dayCount++));
    }
    calendarBody.appendChild(row);
  }

  // 👉 Aktivizo sot automatikisht
  document.querySelector(".calendar-table .today")?.classList.add("active-day");
}

function createDayCell(day) {
  const td = document.createElement("td");
  td.textContent = day;

  const today = new Date();
  const isToday =
    day === today.getDate() &&
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();

  if (isToday) {
    td.classList.add("today");
  }

  td.addEventListener("click", () => {
    document
      .querySelectorAll(".calendar-table td")
      .forEach(cell => cell.classList.remove("active-day"));

    td.classList.add("active-day");

    selectedDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );

    console.log("Selected date:", selectedDay);
  });

  return td;
}

// Navigation
prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Initial render
renderCalendar();

/* LOAD MORE EVENTS */
const loadMoreBtn = document.getElementById("loadMoreBtn");
const extraEvents = document.querySelectorAll(".extra-event");

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    extraEvents.forEach(event => event.classList.remove("d-none"));
    loadMoreBtn.style.display = "none";
  });
}
