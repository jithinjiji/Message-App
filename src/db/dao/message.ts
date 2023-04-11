import { query } from "..";
import { CreateMessageRow, MessageRow } from "../dto/message";

const getMessagesQuery = `
SELECT *, count(*) OVER() AS full_count from message_service.messages where receiver=$1 order by id desc limit $2 offset $3;`;

const addMessagesQuery = `
insert into message_service.messages(content, sender, receiver, created_at) values
`
const addMessagesReturnQuery = `
 returning id, content, sender, receiver, created_at;
`
export async function getMessagesByUser(userId: number, page: number, pageSize: number): Promise<MessageRow[]> {
  const { rows } = await query(getMessagesQuery, [userId, pageSize, (page - 1) * pageSize])
  return rows;
}
export async function addMessagesToUser(content: string, sender: number, receivers: number[]): Promise<CreateMessageRow> {
  let params = []
  let paramString = ''
  receivers.forEach((receiver, index) => {
    paramString = paramString + ` ($${index * 3 + 1},$${index * 3 + 2},$${index * 3 + 3},NOW())`
    params = params.concat([content, sender, receiver])
  })
  const { rows } = await query(addMessagesQuery + paramString + addMessagesReturnQuery, params);
  return rows[0]
}