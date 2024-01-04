import { prisma } from "../../../../database/PrismaClient";

interface IUpdateOrderEndDate {
  id_order: string;
  id_cooker: string;
}

export class UpdateOrderEndDateUseCase {
  async execute({ id_order, id_cooker }: IUpdateOrderEndDate) {
    const updateOrder = await prisma.orders.update({
      where: {
        id: id_order,
      },
      data: {
        end_at: new Date(),
      },
    });

    return updateOrder;
  }
}
