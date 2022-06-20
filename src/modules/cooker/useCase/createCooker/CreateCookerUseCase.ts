import { prisma } from "../../../../database/PrismaClient";

interface ICreateCooker {
  username: string;
  password: string;
}

export class CreateCookerUseCase {
  async execute({ username, password }: ICreateCooker) {
    const cookerExists = await prisma.cooker.findFirst({
      where: {
        username,
      },
    });

    if (cookerExists) {
      throw new Error("Client already exists.");
    }

    const cooker = await prisma.cooker.create({
      data: {
        username,
        password,
      },
    });

    return cooker;
  }
}
