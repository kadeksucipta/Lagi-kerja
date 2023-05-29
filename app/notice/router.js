const router = require("express").Router();
const noticeController = require("./controller")
const { police_check } = require("../../middlewares")

router.put(
    "/notice",
    police_check("update", "Notice"),
    noticeController.update
);

router.get(
    "/notice",
    police_check("read", "Notice"),
    noticeController.index
);

// router.delete(
//     "/carts",
//     police_check("read", "Cart"),
//     cartController.destroy
// );


module.exports = router;