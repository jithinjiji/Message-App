export interface SendMessageRequest{
  userId: number;
  message: string;
  to: number[]
}

export interface MessageListItem{
  id: number;
  message: string;
  sender: number
  createdAt: string;
}

export interface Pagination {
  totalResults: number;
  page: number;
  pageSize: number;
}

export interface MessageListResponse{
  messages:MessageListItem[];
  pagination: Pagination
}

export interface CreateMessageResponse{
  id: number;
  message: string;
  sender: number;
  receiver: number;
  createdAt: string;
}