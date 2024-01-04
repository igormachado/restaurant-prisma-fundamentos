import { Request, Response } from "express";
import { FindAllOrderUseCase } from "./FIndAllOrderUseCase";

export class FindAllOrderController {
  async handle(request: Request, response: Response) {
    const { id_cooker } = request;

    const findAllOrderUseCase = new FindAllOrderUseCase();

    const findOrders = await findAllOrderUseCase.execute(id_cooker);

    return response.json(findOrders);
  }
}
