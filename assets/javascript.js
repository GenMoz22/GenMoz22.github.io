// Dark Mode

(function () {
    // Applichiamo il tema immediatamente per evitare il flash bianco
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    if (isDark) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        document.body.classList.add('dark-mode-active');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const html = document.documentElement;

    // Inizializza l'interfaccia del bottone al caricamento
    updateToggleButton(body.classList.contains('dark-mode-active'));

    darkModeToggle.addEventListener('click', () => {
        const isDarkNow = body.classList.toggle('dark-mode-active');

        // Sincronizza attributi e storage
        html.setAttribute('data-bs-theme', isDarkNow ? 'dark' : 'light');
        localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');

        updateToggleButton(isDarkNow);
    });

    function updateToggleButton(isDark) {
        darkModeToggle.innerHTML = isDark
            ? '<i class="bi bi-sun-fill"></i> <span class="d-none d-md-inline">Light Mode</span>'
            : '<i class="bi bi-moon-fill"></i> <span class="d-none d-md-inline">Dark Mode</span>';
    }
});
