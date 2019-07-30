const fakeAxios = async (url: string, method: string = 'GET', body?: {}) => {
    let headers: any = {
        'Content-type': 'application/json'
    }

    try {
        let response = await fetch(url, {
            method,
            headers,
            body: JSON.stringify(body),
        })
        return await response.json()
    } catch (err) {
        console.error(err)
    }
}

export default fakeAxios