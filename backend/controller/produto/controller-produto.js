module.exports = () => {
  const controller = {};
  const produtos = [];

  controller.listar = (req, res) => {
    res.status(200).json(produtos);
  }

  controller.buscarPorId = (req, res) => {
    console.log('busca por ID');
    console.log(req.param("id"))
    res.status(200).json(produtos.filter(produto => produto.id == req.param("id"))[0]);
  }

  controller.salvar = (req, res) => {
    const produto = req.body;

    produtos.push(produto);

    produto.id = produtos.length;

    res.status(201).json(produto);
  }


  controller.excluir = (req, res) => {
    const id = req.params.id;
    const index = produtos.findIndex(produto => produto.id == id);

    if (index !== -1) {
      const deletedProduct = produtos.splice(index, 1);
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  };


  return controller;
};
