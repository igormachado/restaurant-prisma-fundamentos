### NodeJS API Restaurante 🧨🎯

🌏🏛 Esse projeto foi criado para facilitar o dia a dia de um restaurante. O garçom tem acesso a quantidade de mesas ocupadas, livres. Envia pedido para cozinha e recebe um feedback quando a cozinha inicia o preparo e quando o pedido está pronto recebe outro feedback. Com isso, melhorando o atendido no restaurante e ajudando na organização das comandas.

**Tecnologias usadas** 🤖 💻

- Nodejs ✅
  
- Prisma ORM ✅
  
- Postgres ✅
  
- Typescript ✅
  
- Express JS ✅
  
- bcrypt ✅
  

#### Gettinn Started 🏁

1. **Faça o download do projeto.** ⚡
  
  ```bash
  git clone git@github.com:igormachado/restaurant-prisma-fundamentos.git
  ```
  
2. **Instalar as dependências do projeto, npm** ⚡
  

```bash
cd restaurant-prisma-fundamentos
npm install        
```

3 - **Realizar um migrate no Prisma ORM.** ⚡

```bash
npx prisma migrate dev
```

#### Entendendo o projeto NodeJS API Pedidos no restaurante

**GET** 🧨

- routes.get("/waiter/orders", findAllOrderController.handle);
  
  - Esta rota lista todos os pedidos.
    
  - ***Listando todos os pedidos.***
    

```js
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
```

- ***routes.get("/income/:id", listAllIncomeController.handle);***
  
  - Esta rota lista um dado de entrada (income) buscando pelo id.
- ***Lista o income espeícfico pelo id.***
  

```js
// Lista todos os incomes. Buscando por todos os id.
export class ListAllIncomeUseCase {
  async execute({ id_income }: IListAllIncomes) {
    const incomes = await prisma.income.findMany({
      where: {
        id: id_income,
      },
      select: {
        id: true,
        description: true,
        payment: true,
        date: true,
      },
    });

    return incomes;
  }
}
```

- ***routes.get("/spend", listAllSpendController.handle);***
  
  - Esta rota lista todos os dados de saída (outcome).
- ***Lista todos os outcome que existem no banco de dados.***
  

```js
export class ListAllSpendsUseCase {
  async execute({ id_spend }: IListSpends) {
    const listAllSpends = await prisma.spends.findMany({
      where: {
        id: id_spend,
      },
    });

    return listAllSpends;
  }
}
```

- ***routes.get("/spend/:id", listAllSpendController.handle);***
  
  - Esta rota lista um dado de saída (outcome) buscando pelo id.
- Lista um outcome específico, bucando pelo id.
  

```js
export class ListAllSpendsUseCase {
  async execute({ id_spend }: IListSpends) {
    const listAllSpends = await prisma.spends.findMany({
      where: {
        id: id_spend,
      },
    });

    return listAllSpends;
  }
}
```

**POST** 🧨

- ***routes.post("/waiter", createWaiterController.handle);***
  
  - Esta rota cria um o waiter (garçom)
    
  - **BODY**:
    
    - *name: string*. nome completo
      
    - *password: number*. criar uma senha.
      
  
  - ***Criando um user waiter***
    

```js
export class CreateWaiterController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const createWaiterUseCase = new CreateWaiterUseCase();

    const result = await createWaiterUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
```

- ***routes.post("/order", createOrderController.handle);***
  
  - Esta rota cria pedidos (order).
    
  - **BODY:**
    
    - *id_cooker: number.*
      
    - *id_waiter: number.* id do garçom que esta servindo.
      
    - *table_number: number.* número da mesa
      
    - food: string. Descrição do pedido.
      
    - drink: string. Descrição da bebida
      
  - ***Criando um pedido (order)***
    

```js
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
```

- ***routes.post("/cooker", createCookerController.handle);***
  
  - Esta rota cria o login do cozinheiro.
    
  - Para ser usado na cozinha ao receber o pedido e enviar as informações quando o pedido estiver pronto.
    
  - **BODY:**
    
    - *username: string.* Nome completo.
      
    - *password: number.* Senha do cozinheiro.
      
  - ***Criando um user da cozinha (cooker)***
    

```js
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
```

**PUT** 🧨

- ***routes.put("/order/updateOrder/:id", updateCookerController.handle);***
  
  - Esta rota realiza uma atualização do pedido pelo id
- ***Criando um update do pedido pelo id.***
  

```js
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
```

- ***routes.put("/order/updateEndDate/:id", updateOrderEndDateController.handle);***
  
  - Esta rota realiza uma atualização do pedido quando estiver pronto.
- ***Criando um update de finalização do pedido.***
  

```js
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
```