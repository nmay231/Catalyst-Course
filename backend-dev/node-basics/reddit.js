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

    let redditData = []
    let resp = await rp(options)
    for (let article of resp.data.children) {
        let {
            author,
            title,
            url,
        } = article.data
        redditData.push({
            author,
            title,
            url
        })
    }
    fs.writeFile(
        path.join(__dirname, 'popular-articles.json'),
        JSON.stringify(redditData),
        (err) => {
            if (err) {
                throw err
            }
        }
    )
})()