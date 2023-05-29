const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const wordPressController = require("./controller");

router.get("/wordpress", 
    wordPressController.index
);
router.post("/wordpress",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Wordpress"),
    wordPressController.store
);
router.put("/wordpress/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Wordpress"),
    wordPressController.update
);
router.delete("/wordpress/:id",
police_check("delete", "Wordpress"),
    wordPressController.destroy
);

module.exports = router;