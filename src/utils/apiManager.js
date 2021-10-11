/**
 * API class to manage all API request at one place 
 */

class APIManager {
    constructor() {
        this.basePath = '' // setup Base Path
        this.headers = {} // any Headers we want to setup
    }

    // 
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    if (response.status !== 200) {
                        reject('Connection Issue')
                    }
                    return response.json();
                })
                .then((JSONData) => resolve(JSONData))
        })

    }
    async post(url, data) {

    }
}

export default new APIManager()