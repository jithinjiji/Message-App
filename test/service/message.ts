import { expect } from "chai";
import { SinonSandbox, createSandbox } from "sinon";
import * as db from "../../src/db";
import messageService from "../../src/service/message";
import { getMessagesServiceResponse, messageRowMocks, sendMessageServiceResponse } from "../mock/message";

const sandbox: SinonSandbox = createSandbox();

describe("Message Service", () => {
  describe("getMessages function", () => {
    before(() => {
      sandbox.stub(db, "query").returns(Promise.resolve({ rows: messageRowMocks }))
    });
    after(() => {
      sandbox.restore();
    })
    it("should return proper response", async () => {
      const getMessagesResponse = await messageService.getMessages(1, 1, 2)
      expect(getMessagesResponse).to.deep.equals(getMessagesServiceResponse)
    })

  });
  describe("sendMessage function", () => {
    before(() => {
      sandbox.stub(db, "query").returns(Promise.resolve({ rows: messageRowMocks }))
    });
    after(() => {
      sandbox.restore();
    })
    it("should return proper response", async () => {
      const sendMessageResponse = await messageService.sendMessage(1, "test message", [2])
      expect(sendMessageResponse).to.deep.equals(sendMessageServiceResponse)
    })
  })
})