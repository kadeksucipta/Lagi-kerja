const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const dataEnginerController = require("./controller");

router.get("/dataenginer", 
    dataEnginerController.index
);
router.post("/dataenginer",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Dataenginer"),
    dataEnginerController.store
);
router.put("/dataenginer/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Dataenginer"),
    dataEnginerController.update
);
router.delete("/dataenginer/:id",
police_check("delete", "Dataenginer"),
    dataEnginerController.destroy
);

module.exports = router;