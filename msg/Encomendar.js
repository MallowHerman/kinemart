const msg = (result) => {

    let title = result.title.split(' ')
    let titleUrlEncode = title.join('%20')

    let text = `*Título*: ${result.title}
*Ano de lançamento*: ${result.ano}
    
*Sinopse*: ${result.sinopse}
    
Clique no link para encomendar: wa.me/2389892422?text=Olá,%20eu%20quero%20encomendar%20*${titleUrlEncode}*%20 
`

    return text
}

exports.msg = msg;