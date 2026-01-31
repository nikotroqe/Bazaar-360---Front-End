/* ===== SELECT ELEMENTS ===== */
const markers = document.querySelectorAll('.map-marker');
const locations = document.querySelectorAll('.location-item');

const panel = document.getElementById('locationPanel');
const closeBtn = document.getElementById('closePanel');

const panelTitle = document.getElementById('panelTitle');
const panelCategory = document.getElementById('panelCategory');
const panelDescription = document.getElementById('panelDescription');
const panelHours = document.getElementById('panelHours');
const panelImage = document.getElementById('panelImage');
const searchInput = document.getElementById('mapSearch');

/* ===== SEARCH FUNCTION ===== */
searchInput.addEventListener('input', () => {
  const value = searchInput.value.toLowerCase();

  locations.forEach(item => {
    const name = item.dataset.name.toLowerCase();
    const category = item.dataset.category.toLowerCase();

    const match = name.includes(value) || category.includes(value);

    item.style.display = match ? 'block' : 'none';

    markers.forEach(marker => {
      if (marker.dataset.name === item.dataset.name) {
        marker.style.display = match ? 'flex' : 'none';
      }
    });
  });
});

/* ===== OPEN INFO PANEL ===== */
function openPanel(data) {
  panelTitle.textContent = data.name;
  panelCategory.textContent = data.category;
  panelDescription.textContent = data.desc;
  panelHours.textContent = data.hours;
  panelImage.src = data.image;

  panel.classList.remove('d-none');
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ===== GET DATA FROM ELEMENT ===== */
function getData(el) {
  return {
    name: el.dataset.name,
    category: el.dataset.category,
    desc: el.dataset.desc,
    hours: el.dataset.hours,
    image: el.dataset.image
  };
}

/* ===== CLICK ON MARKER ===== */
markers.forEach(marker => {
  marker.addEventListener('click', () => {
    const data = getData(marker);
    openPanel(data);

    markers.forEach(m => m.classList.remove('active'));
    marker.classList.add('active');

    locations.forEach(item => {
      item.classList.toggle('active', item.dataset.name === data.name);
    });
  });
});

/* ===== CLICK ON SIDEBAR ITEM ===== */
locations.forEach(item => {
  item.addEventListener('click', () => {
    const data = getData(item);
    openPanel(data);

    locations.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    markers.forEach(marker => {
      marker.classList.toggle('active', marker.dataset.name === data.name);
    });
  });
});

/* ===== CLOSE PANEL ===== */
closeBtn.addEventListener('click', () => {
  panel.classList.add('d-none');
});

/* ===== ZOOM IMAGE ONLY ===== */
const mapImage = document.querySelector('.map-container img'); // vetëm imazhi
const zoomInBtn = document.querySelector('.map-controls button:first-child');
const zoomOutBtn = document.querySelector('.map-controls button:last-child');

let zoomLevel = 1; // initial zoom
const ZOOM_STEP = 0.1;
const ZOOM_MIN = 1;
const ZOOM_MAX = 2;

zoomInBtn.addEventListener('click', () => {
  zoomLevel = Math.min(ZOOM_MAX, zoomLevel + ZOOM_STEP);
  mapImage.style.transform = `scale(${zoomLevel})`;
});

zoomOutBtn.addEventListener('click', () => {
  zoomLevel = Math.max(ZOOM_MIN, zoomLevel - ZOOM_STEP);
  mapImage.style.transform = `scale(${zoomLevel})`;
});

