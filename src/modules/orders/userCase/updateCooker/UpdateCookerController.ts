import { Request, Response } from "express";
import { UpdateCookerUseCase } from "./UpdateCookerUseCase";

export class UpdateCookerController {
  async handle(request: Request, response: Response) {
    const { id_cooker } = request.body;

    const { id: id_order } = request.params;

    const updateCookerUserCase = new UpdateCookerUseCase();

    const updateCooker = await updateCookerUserCase.execute({
      id_cooker,
      id_order,
    });

    return response.json(updateCooker);
  }
}
