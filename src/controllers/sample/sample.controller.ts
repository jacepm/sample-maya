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

  @Patch({
    path: "/:id",
    middlewares: [Check("firstName").isString(), Check("lastName").isString()],
  })
  async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const result = await this.services.update(req.params.id, req.body);
    res.json(result);
  }

  @Get({
    path: "/",
    middlewares: [],
  })
  async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    const result = await this.services.all();
    res.json(result);
  }

  @Get({
    path: "/:id",
    middlewares: [],
  })
  async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const result = await this.services.getById(req.params.id);
    res.json(result);
  }
}
