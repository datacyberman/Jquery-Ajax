async function apiCall(method, url, obj) {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open(method, url)
        http.responseType = 'json'
        if (obj) http.setRequestHeader('Content-Type', 'application/json');
        http.onload = function () {
            if (http.readyState == 4) {
                if (http.status >= 400)
                    reject(http.response)
                else
                    resolve(http.response)
            }
        }
        http.send(obj)
    })
}

export default apiCall