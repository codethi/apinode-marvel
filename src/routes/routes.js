const routes = require("express").Router();

const PersonagemController = require("../controllers/PersonagensController");
const PersonagemMiddleware = require("../middlewares/PersonagemMiddlewares");

routes.get("/personagens", PersonagemController.getAll);
routes.get("/personagens/:id", PersonagemMiddleware.validaID, PersonagemController.getById);
routes.post("/personagens", PersonagemController.create);
routes.put("/personagens/:id", PersonagemMiddleware.validaID, PersonagemController.update)
routes.delete("/personagens/:id", PersonagemMiddleware.validaID, PersonagemController.del)

module.exports = routes