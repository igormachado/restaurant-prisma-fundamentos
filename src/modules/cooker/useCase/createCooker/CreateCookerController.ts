import { Request, Response } from "express";
import { CreateCookerUseCase } from "./CreateCookerUseCase";

export class CreateCookerController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createCookerUseCase = new CreateCookerUseCase();

    const result = await createCookerUseCase.execute({
      username,
      password,
    });

    return response.status(200).json(result);
  }
}
