const router = require("express").Router();
const { police_check } = require("../../middlewares");
const tagController = require("./controller");

router.get("/skill", tagController.index)
router.post("/skill",
    police_check("create", "Skill"),
    tagController.store
);
router.put("/skill/:id",
    police_check("update", "Skill"),
    tagController.update)
;
router.delete("/skill/:id",
    police_check("delete", "Skill"),
    tagController.destroy
);

module.exports = router