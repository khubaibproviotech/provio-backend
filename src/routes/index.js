import { Router } from "express";
import developerRoute from "../modules/developer/route.js";
import designerRoute from "../modules/designer/route.js";
import salesRoute from "../modules/sales-executive/route.js";
import adminRoute from "../modules/admin/route.js"
import seoRoute from "../modules/seo-executive/route.js"
import socialMediaRoute from "../modules/social-media-executive/route.js"
import socialMediaMarketerRoute from "../modules/social-media-marketer/route.js"
import positionsRoute from "../modules/positions/route.js"
import candidatesRoute from "../modules/candidates/route.js"
let router = Router();

router.get("/", (req, res) => {
  res.send("routes");
});



// router.use("/developer", developerRoute);
// router.use("/designer", designerRoute);
// router.use("/sales-executive", salesRoute);
// router.use("/seo-executive", seoRoute);
// router.use("/social-media", socialMediaRoute);
// router.use("/social-media-marketer", socialMediaMarketerRoute);
router.use("/positions", positionsRoute)
router.use("/candidates", candidatesRoute)
router.use("/admin", adminRoute)

export default router;
