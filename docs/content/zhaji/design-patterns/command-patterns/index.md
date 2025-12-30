---
tags: [设计模式，学习笔记]
---
## 命令模式

通过命令模式，我们可以将执行特定任务的对象与调用方法的对象解耦。
假设我们有一个在线食品配送平台。用户可以下单、跟踪和取消订单。
``` javascript
class OrderManager() {
  constructor() {
    this.orders = []
  }
  // 下单
  placeOrder(order, id) {
    this.orders.push(id)
    return `You have successfully ordered ${order} (${id})`;
  }
  // 跟踪订单
  trackOrder(id) {
    return `Your order ${id} will arrive in 20 minutes.`
  }
  // 取消订单
  cancelOrder(id) {
    this.orders = this.orders.filter(order => order.id !== id)
    return `You have canceled your order ${id}`
  }
}
```

在 OrderManager 类中，我们可以直接访问 placeOrder 、 trackOrder 和 cancelOrder 方法。
``` javascript
const manager = new OrderManager();

manager.placeOrder("Pad Thai", "1234");
manager.trackOrder("1234");
manager.cancelOrder("1234");
```

然而，直接在 manager 实例上调用方法存在一些缺点。我们可能会在后期决定重命名某些方法，或者方法的功能会发生变化。

假设我们将 placeOrder 重命名为 addOrder ！这意味着我们必须确保在代码库的任何地方都不调用 placeOrder 方法，这在大型应用程序中可能会非常棘手。相反，我们希望将方法与 manager 对象解耦，并为每个命令创建单独的命令函数！

所有让我们重构 OrderManager 类：它将不再包含 placeOrder 、 cancelOrder 和 trackOrder 方法，而将只有一个方法： execute 。这个方法将执行它所接收到的任何命令。

每个命令都应该能够访问管理器的 orders ，我们将它作为其第一个参数传递。
``` javascript

class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}
```
然后我们需要为订单管理器创建三个 Command
- PlaceOrderCommand
- CancelOrderCommand
- TrackOrderCommand
``` javascript
// 命令基类
class Command {
  constructor(execute) {
    this.execute = execute;
  }
}
// 下单命令
function PlaceOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
    return `You have successfully ordered ${order} (${id})`;
  });
}
// 取消订单命令
function CancelOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter((order) => order.id !== id);
    return `You have canceled your order ${id}`;
  });
}
// 跟踪订单命令
function TrackOrderCommand(id) {
  return new Command(() => `Your order ${id} will arrive in 20 minutes.`);
}
```