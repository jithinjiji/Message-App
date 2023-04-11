import { expect } from "chai";
import { describe } from "mocha";
import messageMapping from "../../src/mapping/message";
import { getMessagesServiceResponse, messageRowMocks, sendMessageServiceResponse } from "../mock/message";

describe("Message Mapping", () => {
  describe("composeMessageListResponse function", () => {
    it("should compose proper response", () => {
      const response = messageMapping.composeMessageListResponse(messageRowMocks)
      expect(response).to.eqls(getMessagesServiceResponse.messages);
    })
  });
  describe("composeAddMessageResponse function", () => {
    it("should compose proper response", () => {
      const response = messageMapping.composeAddMessageResponse(messageRowMocks[0])
      expect(response).to.eqls(sendMessageServiceResponse);
    })
  })
})