const msg = (result) => {
    let text = `*Título*: ${result.title}
*Ano de lançamento*: ${result.ano}
        
*Sinopse*: ${result.sinopse}
        
Assistir online: ${result.link} 
`

    return text
}

exports.msg = msg;