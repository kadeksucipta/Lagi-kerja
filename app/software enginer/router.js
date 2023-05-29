const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const softwareController = require("./controller");

router.get("/software", 
    softwareController.index
);
router.post("/software",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Software"),
    softwareController.store
);
router.put("/software/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Software"),
    softwareController.update
);
router.delete("/software/:id",
police_check("delete", "Software"),
    softwareController.destroy
);

module.exports = router;