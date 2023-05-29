const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const javaController = require("./controller");

router.get("/java", 
    javaController.index
);
router.post("/java",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Java"),
    javaController.store
);
router.put("/java/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Java"),
    javaController.update
);
router.delete("/java/:id",
police_check("delete", "Java"),
    javaController.destroy
);

module.exports = router;