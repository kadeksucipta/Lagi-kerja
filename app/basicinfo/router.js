const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const infoController = require("./controller");

router.get("/Info", 
    infoController.index
);
router.post("/Info",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Info"),
    infoController.store
);
router.put("/Info/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Info"),
    infoController.update
);
router.delete("/Info/:id",
police_check("delete", "Info"),
    infoController.destroy
);

module.exports = router;