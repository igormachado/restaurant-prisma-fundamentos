import { Request, Response } from "express";
import { CreateWaiterUseCase } from "./CreateWaiterController";

export class CreateWaiterController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const createWaiterUseCase = new CreateWaiterUseCase();

    const result = await createWaiterUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
