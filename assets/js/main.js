const menuBtn = document.querySelector('#menuBtn');
const closeSidebar = document.querySelector('.overlay');
const sidebar = document.querySelector('#responsive__nav');

menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('activeSideBar');
      closeSidebar.classList.toggle('activeOverlay');
});

closeSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('activeSideBar');
      closeSidebar.classList.toggle('activeOverlay');
})
