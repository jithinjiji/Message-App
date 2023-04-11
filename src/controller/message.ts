import {
  Request, Response
} from "express";
import config from "../../config";
import { setResponse } from "../helper/response";
import { SendMessageRequest } from "../model/message";
import messageService from "../service/message";

const messageController = {
  getMessages: async (req: Request, res: Response) => {
    const {
      userId, // Ideally userId should be obtained from the session.
      page = config.constants.DEFAULT_PAGE,
      pageSize = config.constants.DEFAULT_PAGE_SIZE
    } = req.query;
    const result = await messageService.getMessages(Number(userId), Number(page), Number(pageSize))
    setResponse({ res, status: 200, result })
  },

  sendMessages: async (req: Request, res: Response) => {
    const {
      userId,
      message,
      to
    } = req.body as SendMessageRequest;
    await messageService.sendMessage(userId, message, to);
    setResponse({ res, status: 200 })
  }
}

export default messageController;