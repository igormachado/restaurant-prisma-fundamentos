import { prisma } from "../../../../database/PrismaClient";

export class FindAllOrderUseCase {
  async execute(id_waiter: string) {
    const orders = await prisma.waiter.findMany({
      where: {
        id: id_waiter,
      },
      select: {
        orders: true,
        id: true,
        username: true,
      },
    });

    return orders;
  }
}
