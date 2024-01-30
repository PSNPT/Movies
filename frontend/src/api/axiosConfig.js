import axios from 'axios';

export default axios.create({
    baseURL: 'https://116b-142-198-204-188.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});