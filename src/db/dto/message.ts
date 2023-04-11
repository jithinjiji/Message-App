export interface MessageRow {
  id: number;
  content: string;
  sender: number;
  receiver: number;
  created_at: string;
  full_count: number;
}

export interface CreateMessageRow {
  id: number;
  content: string;
  sender: number;
  receiver: number;
  created_at: string;
}