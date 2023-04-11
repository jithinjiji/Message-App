import { MessageRow } from "../../src/db/dto/message";

export const getMessagesServiceResponse = {
  messages: [
    {
      id: 1006,
      message: "this is a test message",
      sender: 2,
      createdAt: "2023-04-11T19:00:24.233Z"
    },
    {
      id: 1005,
      message: "this is a test message",
      sender: 2,
      createdAt: "2023-04-11T18:59:50.462Z"
    }
  ],
  pagination: {
    page: 1,
    pageSize: 2,
    totalResults: 2
  }
}

export const sendMessageServiceResponse = {
  id: 1006,
  message: "this is a test message",
  sender: 2,
  receiver: 1,
  createdAt: "2023-04-11T19:00:24.233Z"
}

export const validationGetMessages = [{
  msg: "userId: is a required filed",
  param: "userId",
  location: "query"
}]

export const validationSendMessages = [
  {
    msg: "userId: is a required filed",
    param: "userId",
    location: "body"
  },
  {
    msg: "message: is a required filed",
    param: "message",
    location: "body"
  },
  {
    msg: "to: should be an Integer array",
    param: "to",
    location: "body"
  },
  {
    msg: "to: is a required filed",
    param: "to",
    location: "body"
  }
];

export const messageRowMocks: MessageRow[] = [
  {
    id: 1006,
    content: "this is a test message",
    sender: 2,
    receiver: 1,
    full_count: 2,
    created_at: "2023-04-11T19:00:24.233Z"
  },
  {
    id: 1005,
    content: "this is a test message",
    sender: 2,
    receiver: 1,
    full_count: 2,
    created_at: "2023-04-11T18:59:50.462Z"
  }
]

