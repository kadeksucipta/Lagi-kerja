const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const frontendController = require("./controller");

router.get("/frontend", 
    frontendController.index
);
router.post("/frontend",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Frontend"),
    frontendController.store
);
router.put("/frontend/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Frontend"),
    frontendController.update
);
router.delete("/frontend/:id",
police_check("delete", "Frontend"),
    frontendController.destroy
);

module.exports = router;