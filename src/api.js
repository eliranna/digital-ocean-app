
const isDevelopment = true;

let BASE_URL = '/shavitim-backend';

if (isDevelopment) {
    BASE_URL = 'http://localhost:9090'
}

export default {
    openRegistration: `${BASE_URL}/api/open-registration-request`
}