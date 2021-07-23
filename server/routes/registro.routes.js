var {Router} = require('express');
var registroController = require('../controllers/registro.controller');
var router = Router();

router.get('/usuarios', registroController.findAll);
router.post('/usuarios', registroController.create);
router.put('/usuarios/:id/editar', registroController.update);
router.delete('/usuarios/:id/deletar', registroController.destroy);

module.exports = router;