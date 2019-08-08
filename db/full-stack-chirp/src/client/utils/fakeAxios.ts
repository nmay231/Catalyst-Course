import 'isomorphic-fetch'

const fakeAxios = async (url: string, method: string = 'GET', body?: {}, auth?: { name: string, password: string }) => {
    let headers: any = {
        'Content-type': 'application/json',
    }

    if (auth) {
        headers.authorization = auth.name + ':' + auth.password
    }

    try {
        let response = await fetch(url, {
            method,
            headers,
            body: (body ? JSON.stringify(body) : undefined)
        })
        if (method === 'GET') {
            return await response.json()
        }
    } catch (err) {
        console.error(err)
    }
}

export default fakeAxios