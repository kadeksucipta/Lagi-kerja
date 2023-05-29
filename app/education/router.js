const router = require("express").Router();
const { police_check } = require("../../middlewares");
const educationController = require("./controller");

router.get("/education", educationController.index)
router.post("/education",
    police_check("create", "Education"),
    educationController.store
);
router.put("/education/:id",
    police_check("update", "Education"),
    educationController.update)
;
router.delete("/education/:id",
    police_check("delete", "Education"),
    educationController.destroy
);

module.exports = router