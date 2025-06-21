        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const menu = document.querySelector('.Navigation .menu');
            const toggleCheckbox = document.querySelector('.toggle-menu');

            hamburger.addEventListener('click', function() {
                // Toggle the 'active' class on the menu for visibility
                menu.classList.toggle('active');
                // Toggle the 'open' class on the hamburger for its animation (X shape)
                hamburger.classList.toggle('open');
                // Toggle the checkbox state (useful if you want to rely on :checked in CSS too)
                toggleCheckbox.checked = !toggleCheckbox.checked;
            });

            // Optional: Close menu when a link is clicked (for single-page navigation)
            menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('active');
                    hamburger.classList.remove('open');
                    toggleCheckbox.checked = false;
                });
            });
        });