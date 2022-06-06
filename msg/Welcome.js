const welcome = `🎬Benvindo(a) a Kinemart Mindel🎬

Aqui podes assistir diversos filmes e séries online ou então encomendar para assistir offline🤩

▶️ Para iniciar clique no menu para escolher a opção desejada👇:
`
const welcomeList = [
    {
        title: 'Lista',
        rows: [
            {
                title: "Assistir Online",
                description: ''
            },{
                title: "Encomendar para assistir Offline",
                description: ''
            }
        ]
    }
]

exports.welcome = welcome;
exports.welcomeList = welcomeList;