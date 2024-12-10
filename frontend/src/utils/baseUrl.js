const getBaseUrl = () => {
    const hostname = window.location.hostname;

    if (hostname === 'localhost') {
        return 'http://localhost:5000'; // Local development environment
    } else if (hostname === 'book-store') {
        console.log('http://book-store/backend');
        return 'http://api.book-store'; // Ingress hostname with backend path
    } else {
        return 'http://192.168.49.2:30002'; // Default to the NodePort service
    }
};

export default getBaseUrl;
