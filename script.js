document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const navItems = document.querySelector('.nav_Container_Items');
  
    toggleBtn.addEventListener('click', function() {
      navItems.classList.toggle('active');
    });
  });