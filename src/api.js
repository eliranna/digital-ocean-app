
const isDevelopment = false;

let BASE_URL = '/shavitim-backend';

if (isDevelopment) {
    BASE_URL = 'http://localhost:9090'
}

export default {
    getCourses: `${BASE_URL}/api/get-courses`
}