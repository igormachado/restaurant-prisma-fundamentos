import { prisma } from "../../../database/PrismaClient";

interface ICreateWaiter {
  username: string;
  password: string;
}

export class CreateWaiterUseCase {
  async execute({ username, password }: ICreateWaiter) {
    const waiterExists = await prisma.waiter.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (waiterExists) {
      throw new Error("Waiter already exists.");
    }

    const waiter = await prisma.waiter.create({
      data: {
        username,
        password,
      },
    });

    return waiter;
  }
}
