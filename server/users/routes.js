import express from "express";
import { greetUser } from "./controller";

export const userRouter = express.Router();



userRouter.get('/', async (req, res) => {
    const {username} = req.query;
    try {
        const greeting = await greetUser(username);
        res.status(200).send(greeting);
      } catch (error) {
        console.log(error);
      }
    
  });
