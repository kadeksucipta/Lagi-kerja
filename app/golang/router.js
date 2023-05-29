const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const golangController = require("./controller");

router.get("/golang", 
    golangController.index
);
router.post("/golang",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("create", "Golang"),
    golangController.store
);
router.put("/golang/:id",
    multer({dest: os.tmpdir()}).single("image"),
    police_check("update", "Golang"),
    golangController.update
);
router.delete("/golang/:id",
police_check("delete", "Golang"),
    golangController.destroy
);

module.exports = router;