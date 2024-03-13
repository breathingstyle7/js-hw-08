# Критерії прийому

- Створено репозиторій `js-hw-07`
- При здачі домашньої роботи є посилання на вихідні файли в репозиторії
- Кожне завдання виконано в окремому файлі з ім'ям `task-номер_завдання.js`.
  Використовуй `<script type="module">` щоб закрити код завдання в окремій
  області видимості і уникнути конфліктів імен ідентифікаторів.
- Імена змінних зрозумілі, описові
- Код відформатований за допомогою Prettier

# Завдання 1

Розстав відсутні `this` в методах об'єкта `account`.

```js
const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  changeDiscount(value) {
    discount = value;
  },
  showOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost;
    orders.push(order);
  },
};

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, "order-4");
console.log(account.balance); // 19000
console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
```

# Завдання 2

Виправ помилки, які будуть в консолі, щоб скрипт запрацював.

```js
const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction("Medkit", inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction("Gas mask", inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
```

# Завдання 3

Напишіть функцію, яка приймає об'єкт з іменем та віком користувача і повертає рядок, що містить ім'я та повідомлення про те, скільки років їй або йому.

Використайте деструктуризацію, щоб отримати доступ до імені та віку з переданого об'єкту.

# Завдання 4

Ви отримали об'єкт даних з інформацією про продукти в інтернет-магазині:

```js
const product = {
  id: 1,
  name: "Ноутбук Lenovo IdeaPad 3",
  price: 15000,
  description: "15.6 дюймовий, AMD Ryzen 5, 8 ГБ ОЗУ, 512 ГБ SSD",
  images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  category: "Ноутбуки",
  available: true,
};
```

Напишіть функцію printProductInfo, яка приймає об'єкт product в якості параметра та друкує в консоль інформацію про цей продукт в наступному форматі:

```js
Назва: Ноутбук Lenovo IdeaPad 3
Категорія: Ноутбуки
Доступність: Так
Ціна: 15000 грн
```

Реалізуйте цю функцію, використовуючи деструктуризацію для отримання необхідних полів з об'єкту product.

# Завдання 5

//\* Створіть функцію personInfo, яка приймає об'єкт в якості параметра та виконує деструктуризацію цього об'єкта, витягуючи з нього наступні поля: "name", "age", "email", "city". Потім використайте деструктуризовані значення для створення нового об'єкта з наступними полями: "fullName" (значення поля "name" додане до значення поля "age" через пробіл), "contact" (значення поля "email" додане до значення поля "city" через кому). Функція має повертати цей новий об'єкт.

// \* Маємо наступний об'єкт:

```js
const person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  city: "New York",
};
```

//\* Маєте отримати результат:
// contact: "john.doe@example.com, New York"
// fullName: "John Doe, 30"
