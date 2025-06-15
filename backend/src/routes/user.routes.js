import express from "express";
import { protectRoute } from "../middlewares/auth.middleware";
import {
  getRecommendedUsers,
  getMyFriends,
  sendFriendRequest,
  acceptFriendRequest,
  getFriendRequests,
  getOutgoingFriendRequests,
} from "../controller/user.controller";

const router = express.Router();

//applying auth middleware to every route
router.use(protectRoute);

router.get("/", getRecommendedUsers);

router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);

router.put("/friend-request/:id/accept", acceptFriendRequest);

//reject friend requests route

router.get("/friend-requests", getFriendRequests)

router.get("/get-outgoing-friend-requests", getOutgoingFriendRequests)

export default router;
