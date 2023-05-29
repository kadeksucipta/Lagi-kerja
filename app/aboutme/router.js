const router = require("express").Router();
const { police_check } = require("../../middlewares");
const tagController = require("./controller");

router.get("/about", tagController.index)
router.post("/about",
    police_check("create", "About"),
    tagController.store
);
router.put("/about/:id",
    police_check("update", "About"),
    tagController.update)
;
router.delete("/about/:id",
    police_check("delete", "About"),
    tagController.destroy
);

module.exports = router