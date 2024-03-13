// # Завдання 3

// Напишіть функцію, яка приймає об'єкт з іменем та віком користувача і повертає рядок, що містить ім'я та повідомлення про те, скільки років їй або йому.

// Використайте деструктуризацію, щоб отримати доступ до імені та віку з переданого об'єкту.


const userInfo = {
    userFirstName: "Nikola",
    userLastName: "Openheimer",
    age: 32,
    city: "New York",
    proffesion: "physics"
}

function userAboutInfo (obj) {
    const {userFirstName, age} = obj
    return `User name: ${userFirstName}, age: ${age}.`
}

console.log(userAboutInfo(userInfo));