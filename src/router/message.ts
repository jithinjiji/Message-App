import { Router } from "express";
import messageController from "../controller/message";
import { checkValidationResult } from "../middleware/common";
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
  checkValidationResult(),
  messageController.getMessages
)

messageRouter.post(
  messageRoutes.messages,
  messageValidator.validateSendMessageRequest(),
  checkValidationResult(),
  messageController.sendMessages
)

export default messageRouter;