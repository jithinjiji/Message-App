import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator"
import { setResponse } from "../helper/response";

export const checkValidationResult = () => (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return setResponse({ res, status: 400, errors: errors.array()});
}
