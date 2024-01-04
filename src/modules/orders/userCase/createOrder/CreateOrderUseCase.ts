import { prisma } from "../../../../database/PrismaClient";

interface ICreateOrder {
  id_cooker: string;
  id_waiter: string;
  table_number: number;
  food: string;
  drink: string;
}

export class CreateOrderUseCase {
  async execute({
    id_cooker,
    id_waiter,
    table_number,
    food,
    drink,
  }: ICreateOrder) {
    const order = await prisma.orders.create({
      data: {
        id_cooker,
        id_waiter,
        table_number,
        food,
        drink,
      },
    });

    return order;
  }
}
