import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import { configuration } from "../config/Config";

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  next(); // no need to this her added to avoid lint issue
  return res.status(statusCode).json({
    message: err.message,
    errorStack: configuration.env === "development" ? err.stack : "",
  });
};

export default globalErrorHandler;
