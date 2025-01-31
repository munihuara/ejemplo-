function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
    }
    updateLastAccess();
});

function updateLastAccess() {
    const lastAccessElement = document.getElementById('last-access');
    const now = new Date();
    lastAccessElement.textContent = now.toLocaleString();
    localStorage.setItem('lastAccess', now);
}
