module.exports = () => {
  const controller = {};
  const clientes = [];

  controller.listar = (req, res) => {
    res.status(200).json(clientes);
  };

  controller.buscarPorId = (req, res) => {
    console.log('busca por id');
    const id = Number(req.params.id);
    const cliente = clientes.find(cliente => cliente.id === id);

    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente not found' });
    }
  }

  controller.salvar = (req, res) => {
    const cliente = req.body;

    clientes.push(cliente);

    cliente.id = clientes.length;

    res.status(201).json(cliente);
  };

  controller.excluir = (req, res) => {
  };

  return controller;
}











































  

  
  
  
