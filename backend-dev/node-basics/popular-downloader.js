const rp = require('request-promise')
const fs = require('fs')
const path = require('path')

let meNotUseSemicolonsPlease // !!!!!!!!!

(async () => {
    const options = {
        uri: 'https://reddit.com/r/popular.json',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true,
    }

    let resp = await rp(options)
    for (let article of resp.data.children) {
        if (article.data.post_hint === 'image') {
            let filename = article.data.id + path.extname(article.data.url)
            rp(article.data.url).pipe(
                fs.createWriteStream(path.join(__dirname, 'downloads', filename))
            )
        }
    }
})()