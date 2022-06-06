const axios = require('axios')

async function searchFilmes(film) {
    try {
        const url = 'https://sheetdb.io/api/v1/2fqt9k68q7zrv';
        let response = await axios.get(url)
        dataArr = response.data

        searchArr = dataArr.filter((elem) => {
            return elem.title == film
        })

        search = searchArr[0]

        return search
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    searchFilmes
}