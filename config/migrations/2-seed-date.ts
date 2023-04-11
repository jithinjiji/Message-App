export const generateSql = () => {
  const rows: string[] = []
  for (let i = 0; i < 1000; i++) {
    rows.push(`('text message${i}', 1, 2, NOW())`)
  }
  return `
  insert into message_service.messages(content, sender, receiver, created_at) values 
  ${rows.join()}
  on conflict do nothing;
  `
}
