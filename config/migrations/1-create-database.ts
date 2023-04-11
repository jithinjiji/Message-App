export const generateSql = () => `create table if not exists message_service.messages
(
	id serial
		constraint message_id_pkey
			primary key,
	content text,
  sender integer,
  receiver integer,
  created_at timestamp with time zone
);`