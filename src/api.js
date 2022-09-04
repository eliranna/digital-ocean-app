
const isDevelopment = false;

let BASE_URL = '/shavitim-backend';

if (isDevelopment) {
    BASE_URL = 'http://localhost:8080'
}

export default {
    openRegistration: `${BASE_URL}/api/open-registration-request`
}