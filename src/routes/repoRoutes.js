const express = require("express"); // requerindo o express para este arquivo
const router = express.Router(); // requerindo a função router do express

const controller = require("../controllers/repoController")


router.get("/all", controller.getAll);
router.post("/create", controller.createRepo);
router.put("/update/:id", controller.updateRepo);
router.delete("/delete/:id", controller.deleteRepo);

module.exports = router;
