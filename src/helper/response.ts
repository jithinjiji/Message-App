/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from  "express"

export function setResponse({
  res,
  status,
  result,
  errors
}:{
  res: Response,
  status: number,
  result?: any,
  errors?: any
}) {
  if (errors){
    res.status(status).json({
      errors
    })
  }
  res.status(status).json({
    result
  })
}