import { Get, Patch, Post, Delete, Put, Check } from "@mayajs/common";
import { Request, Response, NextFunction } from "express";
import { Controller } from "@mayajs/core";
import { SampleServices } from "./sample.service";

@Controller({
  model: "./sample.model",
  route: "/sample",
})
export class SampleController {
  constructor(private services: SampleServices) {}

  @Post({
    path: "/",
    middlewares: [Check("firstName").isString().notEmpty().required(), Check("lastName").isString().notEmpty().required()],
  })
  async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const result = await this.services.create(req.body);
    res.json(result);
  }
}
