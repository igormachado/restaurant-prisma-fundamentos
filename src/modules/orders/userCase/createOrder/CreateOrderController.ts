import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

export class CreateOrderController {
  async handle(request: Request, response: Response) {
    const { id_waiter, table_number, food, drink } = request.body;
    const { id_cooker } = request;

    const createOrderUseCase = new CreateOrderUseCase();

    const order = await createOrderUseCase.execute({
      id_cooker,
      id_waiter,
      table_number,
      food,
      drink,
    });

    return response.json(order);
  }
}
