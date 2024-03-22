document.getElementById('bar-icon').addEventListener('click', function() {
    var smallNavItems = document.getElementById('small-nav-items');
    if (smallNavItems.classList.contains('opacity-0')) {
        smallNavItems.classList.remove('opacity-0');
        smallNavItems.classList.add('opacity-100');
        smallNavItems.classList.remove('pointer-events-none');
        smallNavItems.classList.add('pointer-events-auto');
    } else {
        smallNavItems.classList.remove('opacity-100');
        smallNavItems.classList.add('opacity-0');
        smallNavItems.classList.remove('pointer-events-auto');
        smallNavItems.classList.add('pointer-events-none');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const strings = ["Web Developer...", "Full-Stack Developer...","Backend Developer...", "Coder..."];
    const roleSpan = document.querySelector('.hero-sub-heading .role');
  
    let currentIndex = 0;
    let intervalId;
  
    function animateText(text, direction) {
      let index = direction === 'forward' ? 0 : text.length - 1;
      let step = direction === 'forward' ? 1 : -1;
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        if (direction === 'forward') {
          roleSpan.textContent += text[index];
          index += step;
          if (index >= text.length) {
            clearInterval(intervalId);
            setTimeout(() => {
              animateText(text, 'backward');
            }, 1000); // Delay before starting backward animation
          }
        } else if (direction === 'backward') {
          if (index >= 0) {
            roleSpan.textContent = text.substring(0, index);
            index += step;
          } else {
            clearInterval(intervalId);
            roleSpan.textContent = '';
            currentIndex = (currentIndex + 1) % strings.length;
            setTimeout(() => {
              animateText(strings[currentIndex], 'forward');
            }, 1000); // Delay before starting next string animation
          }
        }
      }, 100); // Change speed as needed
    }
  
    animateText(strings[currentIndex], 'forward');
  });