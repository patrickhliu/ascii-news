import axios from 'axios';

function GetApiUrl() {
    if (window.location.hostname == 'localhost') return 'http://localhost:8080';
    return window.location.origin;
}

export async function QueryUsNews() {
    try {
        const apiUrl = GetApiUrl();
        const results = await axios.get(apiUrl + '/api/us-news');
        return results.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
