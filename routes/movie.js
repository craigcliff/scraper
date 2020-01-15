const router = require("express").Router(),
    movieController = require("../controllers/movie");

router.get("/all", movieController.all);
router.get("/edit/:id", movieController.getedit);
router.post("/edit/:id", movieController.edit);
router.post("/add", movieController.add);
router.delete("/remove/:id", movieController.remove);

module.exports = router;