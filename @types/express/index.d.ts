import * as express from "express";
import { User } from "../../src/entities/user.entity";

declare global {
  namespace Express {
    interface Request {
      decoded: User;
      userEmail: string;
    }
  }
}
