import { Router } from "express";
import questionOneRoute from "./1-questionOne";
import questionTwoRoute from "./1-questionTwo";
import questionThreeRoute from "./3-questionThree";

const router = new Router();

router.use("/v1", questionOneRoute);
router.use("/v1", questionTwoRoute);
router.use("/v1", questionThreeRoute);

export default router;
