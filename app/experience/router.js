const router = require("express").Router();
const { police_check } = require("../../middlewares");
const expController = require("./controller");

router.get("/experience", expController.index)
router.post("/experience",
    police_check("create", "Experience"),
    expController.store
);
router.put("/experience/:id",
    police_check("update", "Experience"),
    expController.update)
;
router.delete("/experience/:id",
    police_check("delete", "Experience"),
    expController.destroy
);

module.exports = router