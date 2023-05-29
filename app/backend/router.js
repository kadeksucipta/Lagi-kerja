const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const backendController = require("./controller");

router.get("/backend", 
    backendController.index
);
router.post("/backend",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Backend"),
    backendController.store
);
router.put("/backend/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Backend"),
    backendController.update
);
router.delete("/backend/:id",
police_check("delete", "Backend"),
    backendController.destroy
);

module.exports = router;