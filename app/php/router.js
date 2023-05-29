const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const phpController = require("./controller");

router.get("/php", 
    phpController.index
);
router.post("/php",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Php"),
    phpController.store
);
router.put("/php/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Php"),
    phpController.update
);
router.delete("/php/:id",
police_check("delete", "Php"),
    phpController.destroy
);

module.exports = router;