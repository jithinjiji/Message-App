import { CreateMessageRow, MessageRow } from "../db/dto/message"
import { CreateMessageResponse, MessageListItem } from "../model/message"

const messageMapping = {
  composeMessageListResponse: (messageRows: MessageRow[]): MessageListItem[] => {
    return messageRows.map(messageRow => ({
      id: messageRow.id,
      message: messageRow.content,
      sender: messageRow.sender,
      createdAt: messageRow.created_at
    }))
  },

  composeAddMessageResponse: (createMessageRow: CreateMessageRow): CreateMessageResponse => {
    return {
      id: createMessageRow.id,
      message: createMessageRow.content,
      sender: createMessageRow.sender,
      receiver: createMessageRow.receiver,
      createdAt: createMessageRow.created_at
    }
  }
}
export default messageMapping 