const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const desainController = require("./controller");

router.get("/desain", 
    desainController.index
);
router.post("/desain",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Desain"),
    desainController.store
);
router.put("/desain/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Desain"),
    desainController.update
);
router.delete("/desain/:id",
police_check("delete", "Desain"),
    desainController.destroy
);

module.exports = router;