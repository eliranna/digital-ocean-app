
let BASE_URL = '' 

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:8080'
}

export default {
    openRegistration: `${BASE_URL}/api/open-registration-request`
}