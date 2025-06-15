import express from "express";
import { protectRoute } from "../middlewares/auth.middleware";
import {
  getRecommendedUsers,
  getMyFriends,
  sendFriendRequest,
  acceptFriendRequest,
} from "../controller/user.controller";

const router = express.Router();

//applying auth middleware to every route
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);
router.post("/friend-request/:id", sendFriendRequest);
router.post("/friend-request/:id/accept", acceptFriendRequest);

export default router;
