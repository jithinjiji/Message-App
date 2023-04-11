import { addMessagesToUser, getMessagesByUser } from "../db/dao/message";
import messageMapping from "../mapping/message";
import { MessageListResponse } from "../model/message";

const messageService = {
  getMessages: async (userId: number, page: number, pageSize: number): Promise<MessageListResponse> => {
    const messagesByUser = await getMessagesByUser(userId, page, pageSize)

    return {
      messages: messageMapping.composeMessageListResponse(messagesByUser),
      pagination: {
        page,
        pageSize,
        totalResults: messagesByUser?.[0]?.full_count ?? 0
      }
    }
  },
  sendMessage: async (userId: number, message: string, to: number[]) => {
    await addMessagesToUser(message, userId, to)
  }
}

export default messageService;