let auth0 = null;

const initAuth0 = async () => {
    // Initialize the Auth0 client with your Auth0 credentials
    auth0 = await createAuth0Client({
        domain: 'dev-1c3appy38zq7kswu.us.auth0.com',  // Replace with your Auth0 domain
        client_id: 'G2noAoyIvGqBB8U2JMD6361CRFSRRvCS',  // Replace with your Auth0 Client ID
        redirect_uri: `http://127.0.0.1:5500/login.html/`
    });
};

// Check if the user is authenticated
const checkAuthStatus = async () => {
    const isAuthenticated = await auth0.isAuthenticated();

    if (isAuthenticated) {
        // User is logged in
        const user = await auth0.getUser();
        document.getElementById('login-status').textContent = `Welcome, ${user.name}`;
        document.getElementById('login-button').style.display = 'none';
        document.getElementById('logout-button').style.display = 'block';
    } else {
        // User is not logged in
        document.getElementById('login-button').style.display = 'block';
        document.getElementById('logout-button').style.display = 'none';
    }
};

// Login function
const login = async () => {
    await auth0.loginWithRedirect({
        redirect_uri: window.location.origin
    });
};

// Logout function
const logout = async () => {
    await auth0.logout({
        returnTo: window.location.origin
    });
};

// Initialize Auth0 when the page loads
window.onload = async () => {
    await initAuth0();
    
    // Check if user has been redirected from Auth0 after login
    if (window.location.search.includes('code=')) {
        await auth0.handleRedirectCallback();
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Check the authentication status
    await checkAuthStatus();
};

// Add event listeners to login and logout buttons
document.getElementById('login-button').addEventListener('click', login);
document.getElementById('logout-button').addEventListener('click', logout);
