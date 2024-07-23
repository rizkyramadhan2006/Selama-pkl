const routes = {
    'home': `
        <h1>Home</h1>
        <p>Welcome to the Home page!</p>
    `,
    'about': `
        <h1>About</h1>
        <p>This is the About page.</p>
    `,
    'contact': `
        <h1>Contact</h1>
        <p>This is the Contact page.</p>
    `
};

function navigate(page) {
    const content = document.getElementById('content');
    content.innerHTML = routes[page] || '<h1>404 - Page Not Found</h1>';
}

// Load default page
window.onload = () => {
    const defaultPage = 'home';
    navigate(defaultPage);
};
