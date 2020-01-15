const router = require("express").Router(),
    scraperController = require("../controllers/scraper");

// router.get("/all", scraperController.all);
// router.get("/edit/:id", scraperController.getedit);
// router.post("/edit/:id", scraperController.edit);
router.post("/add", scraperController.add);
// router.delete("/remove/:id", scraperController.remove);
router.get("/addTest", scraperController.addTest);


module.exports = router;