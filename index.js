const venom = require('venom-bot')
const axios = require('axios')
const {getFilmes} = require('./modules/getFilmes')
const {searchFilmes} = require('./modules/searchFilmes')

const Welcome = require('./msg/Welcome')
const Filmes = require('./msg/Filmes')
const Encomendar = require('./msg/Encomendar')
const Assistir = require('./msg/Assistir')


venom.create({headless: true}).then((client) => start(client)).catch((erro) => {
    console.log(erro);
})

function start(client) {
    client.onMessage((msg) => {
        if (msg.body == "Hi" && msg.isGroupMsg === false) {
            client.startTyping(msg.from)
            client.sendListMenu(msg.from, 'Welcome', 'Welcome list', Welcome.welcome, 'Clique aqui', Welcome.welcomeList).then((result) => {
                console.log('Result => ' + result);
            }).catch(error => {
                console.log(error);
            })
        }

        if (msg.type === 'list_response') {
            var args = msg.body.split('\n')
            var list_response_result = args[0];

            if  (msg.quotedMsg.list.title === 'Welcome') {
                if (list_response_result === Welcome.welcomeList[0].rows[0].title || list_response_result == '/assistir') {
                    console.log(Welcome.welcomeList[0].rows[1].title);
                    client.startTyping(msg.from)
                    client.sendText(msg.from, 'Aguarde um instante, estou enviando a lista de filmes').then((result) => {
                        console.log('Result => ' + result);
    
                        getFilmes().then((filmes) => {
                            console.log(filmes);
                            client.sendListMenu(msg.from, 'Assistir Online', 'Lista de filmes', 'Clique no menu para escolher a opção desejada','Clique Aqui', filmes).then((result) => {
                                console.log('Result => ' + result);
                            }).catch(error => {
                                    console.log(error);
                            })
    
                        }).catch(erro => {
                            console.log(erro);
                        })
        
                    }).catch((error) => {
                        console.log(error);
                    })
                }
    
                if (list_response_result === Welcome.welcomeList[0].rows[1].title) {
                    console.log(Welcome.welcomeList[0].rows[1].title);
                    client.startTyping(msg.from)
                    client.sendText(msg.from, 'Aguarde um instante, estou enviando a lista de filmes').then((result) => {
                        console.log('Result => ' + result);
    
                        getFilmes().then((filmes) => {
                            console.log(filmes);
                            client.sendListMenu(msg.from, 'Encomendar', 'Lista de filmes', 'Clique no menu para escolher a opção desejada','Clique Aqui', filmes).then((result) => {
                                console.log('Result => ' + result);
                            }).catch(error => {
                                    console.log(error);
                            })
    
                        }).catch(erro => {
                            console.log(erro);
                        })
        
                    }).catch((error) => {
                        console.log(error);
                    })
                }
            }
        }

        if (msg.quotedMsg.list.title === 'Encomendar') {
            searchFilmes(list_response_result).then((result) => {
                console.log(result);
                client.startTyping(msg.from)
                client.sendText(msg.from, 'Aguarde uns instante, estou enviando o filme... caso aparecer a opção *"Ler mais"*, clique para ver o link completo')
                client.startTyping(msg.from)
                client.sendImage(msg.from, result.thumb, result.title, Encomendar.msg(result)).then((result) => {
                    console.log('Result: ', result); //return object success
                }).catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            }).catch(error => {
                console.log(error);
            })
        }
        
        if (msg.quotedMsg.list.title === 'Assistir Online') {
                searchFilmes(list_response_result).then((result) => {
                    console.log(result);
                    client.startTyping(msg.from)
                    client.sendText(msg.from, 'Aguarde uns instante, estou enviando o filme... caso aparecer a opção *"Ler mais"*, clique para ver o link completo')
                    client.startTyping(msg.from)
                    client.sendImage(msg.from, result.thumb, result.title, Assistir.msg(result)).then((result) => {
                        console.log('Result: ', result); //return object success
                    }).catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
                }).catch(error => {
                    console.log(error);
                })
            }

    })
}


