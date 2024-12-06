const getBaseUrl = () => {
    return window.location.hostname === 'localhost' ? 
    'http://localhost:5000' : 
    'http://192.168.49.2:30002';
}

export default getBaseUrl;