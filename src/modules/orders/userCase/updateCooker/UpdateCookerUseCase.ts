import { prisma } from "../../../../database/PrismaClient";

interface IUpdateCooker {
  id_order: string;
  id_cooker: string;
}

export class UpdateCookerUseCase {
  async execute({ id_order, id_cooker }: IUpdateCooker) {
    const updateOrder = await prisma.orders.update({
      where: {
        id: id_order,
      },
      data: {
        id_cooker,
      },
    });

    return updateOrder;
  }
}
