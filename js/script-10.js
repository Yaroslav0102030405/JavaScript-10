/*
 * Классы
 * - обьявление
 * - конструктор
 * - методы
 * - static
 * - приватные свойства
 * - синтаксис публичных свойств и методы классов
 * - геттеры и сеттеры Методы get set
 */

// Классы - это новый способ записывать функцию кноструктор с уже готовым прототипом со свойством prototype

// Для того чтобы обьявить класс вы пишете ключевое слово class и потом имя с большой буквы и тело класса {}
class Car1 {
  static AAA = 'AAA';
  // Статическое свойство
  // Сначало обьявляем все статическией свойства и методы потом конструктор а потом все отсальные методы

  // Приватное свойство
  #test = 'test';
  //   чтоб сделать свойство приватным вы подставляете перед именем решетку (кеш)

  constructor({ brand, model, price } = {}) {
    //   тут идет метод класса имя (тело) this подпись и не разделяется не запятыми не точка с запятой
    this.brand = brand;
    this._model = model;
    this.price = price;
    // все что у нас идет на экземпляр у нас в конструкторе лежит
  }
  changePrice(newPrice) {
    //   еще один метод
    // все что идет на прототип лежит в методах
    this.price = newPrice;

    console.log(this.#test);
  }
  get model() {
    return this._model;
    // Если есть this.model то имя get не может быть model
    // Геттыр и сеттырн не могут называться именнем свойоства которое они описывают
    // get - это операция чтения а set - это операция записывания
  }
  set model(newModel) {
    this._model = newModel;
  }
}

console.dir(Car1);
console.log(Car1.AAA);

const carInstance = new Car1({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

console.log(carInstance);

console.log(carInstance.model);
// это вызывается get дл model
carInstance.model = 'Q4';
// Классы - это современный синтаксис для создания функции-конструктора
// Статические свойства используються чтобы хранить константы методы которые не идут на экземпляр утилиты и спмопогательные вещи
// Статического метода и свойства на экземплярах не существует static - это для конструкторов классов

// В повседневной жизни классов почти нет вы их юзать не будете  вы юзать будете уже готовые классы а свои писать редко будете

// Вообще get и set работает с обьектами
const obj = {
    _a: 100,
    get a() {
        return this._a;
    },
    set a(x) {
    this._a = x;
     },
};

console.log(obj)
// это в простых случаях когда у тебя один параметр чаще всего они применяться для доступа изменения какого-то одного свойства
// Это применяеться чтобы прочитать или переписать значения свойства
// Ты используешь геттр и сет только тогда когда внешний код будет и читать и записывать это свойство

/*
* Наследование
* - extsnds
* - super()
*/

// Есть цепочка классов. Базовый класс от него наследуеться еще один класс и так далее.