import { Router } from "express";
import { CreateCookerController } from "./modules/cooker/useCase/createCooker/CreateCookerController";
import { CreateOrderController } from "./modules/orders/userCase/createOrder/CreateOrderController";
import { FindAllOrderController } from "./modules/orders/userCase/findAllOrder/FindAllOrderController";
import { UpdateCookerController } from "./modules/orders/userCase/updateCooker/UpdateCookerController";
import { UpdateOrderEndDateController } from "./modules/orders/userCase/updateOrderEndDate/UpdateOrderEndDateController";
import { CreateWaiterController } from "./modules/waiter/useCase/CreateWaiterUseCase";

const routes = Router();

const createCookerController = new CreateCookerController();

const createOrderController = new CreateOrderController();

const createWaiterController = new CreateWaiterController();

const updateCookerController = new UpdateCookerController();

const updateOrderEndDateController = new UpdateOrderEndDateController();

const findAllOrderController = new FindAllOrderController();

routes.post("/cooker", createCookerController.handle);

routes.post("/order", createOrderController.handle);

routes.post("/waiter", createWaiterController.handle);

routes.put("/order/updateOrder/:id", updateCookerController.handle);

routes.put("/order/updateEndDate/:id", updateOrderEndDateController.handle);

routes.get("/waiter/orders", findAllOrderController.handle);

export { routes };
