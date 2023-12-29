// Step 1: Create a button
const scrollUpButton = document.createElement('button');
scrollUpButton.textContent = 'UP';
scrollUpButton.style.display = 'none';
scrollUpButton.style.position = 'fixed';
scrollUpButton.style.bottom = '20px';
scrollUpButton.style.right = '20px';
scrollUpButton.classList.add('scroll');
document.body.appendChild(scrollUpButton);

// Step 2: Add an event listener to the window
window.addEventListener('scroll', () => {
    // Step 3: Check if the user has scrolled down by a certain threshold
    if (window.pageYOffset > 300) {
        // Step 4: Display the button
        scrollUpButton.style.display = 'block';
    } else {
        // Hide the button when the user scrolls up
        scrollUpButton.style.display = 'none';
    }
});

// Step 5: Add a click event listener to the button
scrollUpButton.addEventListener('click', () => {
    // Scroll up to the header
    window.scrollTo({ top: 0, behavior: 'smooth' });
});