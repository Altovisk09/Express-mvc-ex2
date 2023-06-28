const db = [
    {
        id:1,
        titulo: 'Carpaccio fresco',
        descricaoCurta: 'Entrada Carpaccio de salmoão com cítricos',
        descricaoDetalhada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        preco: '65.50',
        img: 'carpaccio-de-salmao.jpg'
    },
    {
        id:2,
        titulo: 'Risotto de berinjela',
        descricaoCurta: 'Risotto de berinjela e queijo de cabra',
        descricaoDetalhada: 'Mollit occaecat sint eiusmod ut consectetur proident, cupidatat Excepteur non labore in culpa qui officia deserunt anim id est laborum sint occaecat eiusmod temporincididunt ut labore et dolore magna aliqua. Ut aliqua. Ut enim ad minim veniam, quis nostrud ullamco exercitation laboris nisi ut aliquip ex ea commodo consequat.',
        preco: '47.00',
        img: 'risotto-berinjela-queijo-cabra.jpg'
    },
    {
        id:3,
        titulo: 'Mousse de arroz',
        descricaoCurta: 'Mousse de arroz com leite e aroma de flor de laranjeira',
        descricaoDetalhada: 'Dolore culpa sint ut exercitation occaecat proident, Excepteur non mollit cupidatat occaecat id est anim labore deserunt eiusmod temporincididunt ut magna aliqua. Ut magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris exercitation labore in nisi ut aliquip ex ea commodo consequat.',
        preco: '27.50',
        img: 'mousse-de-arroz-con-leite.jpg'
    },
    {
        id:4,
        titulo: 'Aspargos brancos',
        descricaoCurta: 'Aspargos brancos com vinagrete de legumes e presunto ibérico',
        descricaoDetalhada: 'Proident, non cupidatat occaecat sint Excepteur laborum in qui culpa officia deserunt mollit anim id est, sint occaecat labore eiusmod temporincididunt ut magna aliqua. Ut eiusmod ad minim veniam, exercitation quis nostrud ullamco exercitation laboris nisi ut aliquip ex ea commodo consequat',
        preco: '37.50',
        img: 'aspargos.png'
    }
]

const indexController = {
    index: (req, res) => {
      res.render('index', {menu: db} )
    },
    detalhe: (req, res) =>{
        let prato = db.find(prato => prato.id == req.params.id);
        console.log(prato);
        res.render('detalheMenu', {prato: prato})
    }
}

module.exports = indexController;