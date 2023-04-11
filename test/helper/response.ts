import { describe } from "mocha";
import { setResponse } from "../../src/helper/response";
import MockExpressResponse from "mock-express-response";
import { expect } from "chai";
import { validationGetMessages } from "../mock/message";

const sampleData = {
  result: "success"
}

describe("setResponse function", () => {
  let res;
  beforeEach(() => {
    res = new MockExpressResponse()
  })
  it("should set result and status", () => {
    setResponse({ res, status: 200, result: sampleData });
    expect(res.statusCode).to.equals(200);
    expect(res._getJSON()?.result).to.eql(sampleData)
  });
  it("should set error and status", () => {
    setResponse({ res, status: 400, errors: validationGetMessages });
    expect(res.statusCode).to.equals(400);
    expect(res._getJSON()?.errors).to.eql(validationGetMessages)
  });
})