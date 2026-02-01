document.querySelectorAll('#dashboardTabs .nav-link').forEach(tab => {
  tab.addEventListener('click', function(event) {
    event.preventDefault();

    // Heq active nga të gjithë tab-et
    document.querySelectorAll('#dashboardTabs .nav-link').forEach(t => t.classList.remove('active'));

    // Fsheh të gjitha tab-content
    document.querySelectorAll('.tab-content').forEach(c => {
      c.style.display = 'none';
      c.classList.remove('active');
    });

    // Vendos active në tabin e klikuar
    this.classList.add('active');

    // Shfaq përmbajtjen që korrespondon me data-target
    const target = this.getAttribute('data-target');
    const content = document.getElementById(target);
    if (content) {
      content.style.display = 'block';
      content.classList.add('active');
    }
  });
});



