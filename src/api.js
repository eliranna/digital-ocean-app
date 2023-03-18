
const isDevelopment = false;

let BASE_URL = 'https://shavitim-u3g34.ondigitalocean.app';

if (isDevelopment) {
    BASE_URL = 'http://localhost:9090'
}

export default {
    getCourses: `${BASE_URL}/api/get-courses`
}