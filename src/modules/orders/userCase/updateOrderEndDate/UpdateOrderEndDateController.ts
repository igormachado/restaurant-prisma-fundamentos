import { Request, Response } from "express";
import { UpdateOrderEndDateUseCase } from "./UpdateOrderEndDateUseCase";

export class UpdateOrderEndDateController {
  async handle(request: Request, response: Response) {
    const { id_cooker } = request;
    const { id: id_order } = request.params;

    const updateOrderEndDateUseCase = new UpdateOrderEndDateUseCase();

    const updateOrder = await updateOrderEndDateUseCase.execute({
      id_cooker,
      id_order,
    });

    return response.json(updateOrder);
  }
}
