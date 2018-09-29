const BASE_API_URL = 'http://comidolega.net.pl/api'

export class BaseService {
    static get(url) {
        return fetch(`${BASE_API_URL}${url}`)
            .then(response => response.json())
    }

    static post(url, body) {
        return fetch(`${BASE_API_URL}${url}`, {
            method: 'POST',
            body: JSON.stringify(body),
        })
        .then(response => response.json())
    }
}
