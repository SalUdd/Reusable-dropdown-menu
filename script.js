document.addEventListener("DOMContentLoaded", () => {
    const dropdownContainers = document.querySelectorAll('.dropdown'); // Select all dropdown containers
  
    dropdownContainers.forEach(container => {
      const button = container.querySelector('.nav'); // Find the button inside this container
      const navList = container.querySelector('.dropdown-content'); // Find the nav list inside this container
  
      button.addEventListener("click", () => {
        if (navList.hasAttribute("hidden")) {
          navList.removeAttribute("hidden");
        } else {
          navList.setAttribute("hidden", "");
        }
      });
    });
  });
  