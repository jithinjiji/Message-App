import { query } from "..";
import { MessageRow } from "../dto/message";

const getMessagesQuery = `
SELECT *, count(*) OVER() AS full_count from message_service.messages where receiver=$1 limit $2 offset $3 order by created_at desc`;

const addMessagesQuery = `
insert into message_service.messages(content, sender, receiver, created_at) values
`
export async function getMessagesByUser(userId: number, page: number, pageSize: number): Promise<MessageRow[]> {
  return await query(getMessagesQuery, [userId, pageSize, (page - 1) * pageSize])
}
export async function addMessagesToUser(content: string, sender: number, receivers: number[]) {
  let params = []
  let paramString = ''
  receivers.forEach((receiver, index) => {
    paramString = paramString + ` ($${index * 3 + 1},$${index * 3 + 2},$${index * 3 + 3},NOW())`
    params = params.concat([content, sender, receiver])
  })
  return await query(addMessagesQuery + paramString + ";", params);
}