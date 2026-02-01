document.addEventListener('DOMContentLoaded', () => {

  /* ==========================
     TAB NAVIGATION
  ========================== */
  const tabs = document.querySelectorAll('#dashboardTabs .nav-link');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();

      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document
        .getElementById(tab.dataset.target)
        .classList.add('active');
    });
  });

  /* ==========================
     BUTTON ACTIONS
  ========================== */

  // + Add New (global)
  document.getElementById('btnAddNew')?.addEventListener('click', () => {
    const activeTab = document.querySelector('.nav-link.active')
      ?.dataset.target;

    switch (activeTab) {
      case 'ar-stories':
        addStory();
        break;
      case 'locations':
        addLocation();
        break;
      case 'events':
        createEvent();
        break;
      default:
        alert('Choose a section first');
    }
  });

  // + Add Story
  document.getElementById('btnAddStory')?.addEventListener('click', addStory);

  // + Add Location
  document.getElementById('btnAddLocation')?.addEventListener('click', addLocation);

  // + Create Event
  document.getElementById('btnCreateEvent')?.addEventListener('click', createEvent);

});


/* ==========================
   FUNCTIONS (PLACEHOLDERS)
========================== */

function addStory() {
  alert('Open Add Story modal');
}

function addLocation() {
  alert('Open Add Location modal');
}

function createEvent() {
  alert('Open Create Event modal');
}




