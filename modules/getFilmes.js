const axios = require('axios')

async function getFilmes() {
    try {
        const url = 'https://sheetdb.io/api/v1/2fqt9k68q7zrv';
        let response = await axios.get(url)
        dataArr = response.data

        var filmes_lista = [
            {
                title: 'Filmes',
                rows: []
            }
        ]

        dataArr.map(item => {
            filmes_lista[0].rows.push({
                title: item.title,
                description: item.ano
            })
        })

        return filmes_lista
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getFilmes
}