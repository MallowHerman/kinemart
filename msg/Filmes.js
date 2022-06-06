const axios = require('axios');

function getFilmes() {
    const url = 'https://sheetdb.io/api/v1/2fqt9k68q7zrv';
    let filmes_lista = [
        {
            title: 'Gêneros',
            rows: []
        }
    ]
    axios.get(url).then((response) => {
        let dataArr = response.data
        dataArr.map((item) => {
        filmes_lista[0].rows.push({
            title: item.title,
            description: ''
        })
    
        })

        return filmes_lista
    }).catch((error) => {
        console.log(error);
    })
}

exports.getFilmes = getFilmes()

