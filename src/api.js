
const isDevelopment = false;

let BASE_URL = '';

if (isDevelopment) {
    BASE_URL = 'http://localhost:8080'
}

export default {
    openRegistration: `${BASE_URL}/api/open-registration-request`
}