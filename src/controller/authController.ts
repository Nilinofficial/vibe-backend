import { Request, Response } from "express";
import { RegisterBodySchema } from "../utils/schema";
import User from "../models/User.Model";
import bcrypt from "bcrypt";

export const Register = async (req: Request, res: Response) => {
  // this safeParse will return an object like {success:true,data:""}
  //   log for more
  const parsed = RegisterBodySchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid Input",
      errors: parsed.error.flatten(), //will give field wise errors
    });
  }
  const { firstName, lastName, email, password, profilePicUrl } = req.body;
  const hashedPassword = bcrypt.hash(password, 10);
  try {
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      profilePicUrl,
    });



  } catch (err: unknown) {}

  return res.status(200).json({ message: "user registered successfully" });
};
