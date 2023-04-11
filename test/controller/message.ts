import { describe } from "mocha";
import { createSandbox, SinonSandbox } from "sinon";
import messageService from "../../src/service/message";
import supertest from "supertest";
import { getMessagesServiceResponse, sendMessageServiceResponse, validationGetMessages, validationSendMessages } from "../mock/message";
import app from "../../src/app";
import { expect } from "chai";

const sandbox: SinonSandbox = createSandbox();

const endpoints = {
  messages: "/messages"
}
describe("Message Controller", () => {
  before(() => {
    sandbox.stub(messageService, "getMessages").returns(Promise.resolve(getMessagesServiceResponse))
    sandbox.stub(messageService, "sendMessage").returns(Promise.resolve(sendMessageServiceResponse))
  })
  after(() => {
    sandbox.restore()
  })
  describe("GET /messages", () => {
    it("should validate input fields", (done) => {
      supertest(app)
        .get(endpoints.messages)
        .expect(400, (err, res) => {
          if (err) {
            throw err;
          }
          expect(res.body.errors).to.deep.equals(
            validationGetMessages
          );
          done();
        })
    });
    it("should return response if required parameters are provided", (done) => {
      supertest(app)
        .get(endpoints.messages)
        .query({
          userId: 1
        })
        .expect(200, (err, res) => {
          if (err) {
            throw err;
          }
          expect(res.body.result).to.deep.equals(
            getMessagesServiceResponse
          );
          done();
        })
    });
    it("should return response if all the parameters are provided", (done) => {
      supertest(app)
        .get(endpoints.messages)
        .query({
          userId: 1,
          page: 1,
          pageSize: 20
        })
        .expect(200, (err, res) => {
          if (err) {
            throw err;
          }
          expect(res.body.result).to.deep.equals(
            getMessagesServiceResponse
          );
          done();
        })
    });
  })
  describe("POST /messages", () => {
    it("should validate input fields", (done) => {
      supertest(app)
        .post(endpoints.messages)
        .expect(400, (err, res) => {
          if (err) {
            throw err;
          }
          expect(res.body.errors).to.deep.equals(
            validationSendMessages
          );
          done();
        })
    });
    it("should return response for a valid request", (done) => {
      supertest(app)
        .post(endpoints.messages)
        .send(
          {
            userId: 2,
            message: "this is a test message",
            to: [1]
          })
        .expect(200, (err, res) => {
          if (err) {
            throw err;
          }
          expect(res.body.result).to.deep.equals(
            sendMessageServiceResponse
          );
          done();
        })
    });
  })
});