import { Router } from "express";
import messageController from "../controller/message";
import messageValidator from "../middleware/message";

const messageRouter =Router({
  mergeParams: true
})

const messageRoutes = {
  messages: "/messages"
}

messageRouter.get(
  messageRoutes.messages,
  messageValidator.validateGetMessageRequest(),
  messageController.getMessages
)

messageRouter.post(
  messageRoutes.messages,
  messageValidator.validateSendMessageRequest(),
  messageController.sendMessages
)

export default messageRouter;