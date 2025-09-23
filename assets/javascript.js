        // JavaScript for Dark Mode Toggle functionality
        document.addEventListener('DOMContentLoaded', () => {
            const darkModeToggle = document.getElementById('darkModeToggle');
            const body = document.body;
            const html = document.documentElement;

            // Check for saved theme preference or system preference
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            // Apply the theme based on preference
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }

            // Event listener for the dark mode toggle button
            darkModeToggle.addEventListener('click', () => {
                if (body.classList.contains('dark-mode-active')) {
                    disableDarkMode();
                } else {
                    enableDarkMode();
                }
            });

            // Function to enable dark mode
            function enableDarkMode() {
                body.classList.add('dark-mode-active');
                html.setAttribute('data-bs-theme', 'dark');
                darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i> <span class="d-none d-md-inline">Light Mode</span>';
                localStorage.setItem('theme', 'dark');
            }

            // Function to disable dark mode (enable light mode)
            function disableDarkMode() {
                body.classList.remove('dark-mode-active');
                html.setAttribute('data-bs-theme', 'light');
                darkModeToggle.innerHTML = '<i class="bi bi-moon-fill"></i> <span class="d-none d-md-inline">Dark Mode</span>';
                localStorage.setItem('theme', 'light');
            }
        });
