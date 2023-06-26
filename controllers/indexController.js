const db = [
    {nome: "Aspargos",
    preco: 10 ,
    descricao: "bla",
    },
    {nome: "Capaccio de Salmão",
    preco: 10 ,
    descricao: "bla",
    },
    {nome: "Mousse de Arroz con Leite",
    preco: 10 ,
    descricao: "bla",
    },
    {nome: "Risotto Berinjela Queijo Cabra",
    preco: 10 ,
    descricao: "bla",
    },
]

const indexController = {
    index: (req, res) => {
      res.render('index')
    },
    detalhe: (req, res) =>{
        res.render('detalheMenu', db)
    }
}

module.exports = indexController;