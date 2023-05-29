const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const dataEntryController = require("./controller");

router.get("/dataEntry", 
    dataEntryController.index
);
router.post("/dataEntry",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "DataEntry"),
    dataEntryController.store
);
router.put("/dataEntry/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "DataEntry"),
    dataEntryController.update
);
router.delete("/dataEntry/:id",
police_check("delete", "DataEntry"),
    dataEntryController.destroy
);

module.exports = router;