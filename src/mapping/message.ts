import { MessageRow } from "../db/dto/message"

const messageMapping = {
  composeMessageListResponse: (messageRows: MessageRow[]) => {
    return messageRows.map(messageRow => ({
      id: messageRow.id,
      message: messageRow.content,
      sender: messageRow.sender,
      createdAt: messageRow.created_at
    }))
  }
}
export default messageMapping 