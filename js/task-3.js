class StringBuilder {
    #value; // Приватна властивість для зберігання рядка
  
    constructor(initialValue) {
      this.#value = initialValue; // Ініціалізація приватної властивості
    }
  
    // Метод для отримання поточного значення
    getValue() {
      return this.#value;
    }
  
    // Метод для додавання рядка в кінець
    padEnd(str) {
      this.#value += str;
    }
  
    // Метод для додавання рядка на початок
    padStart(str) {
      this.#value = str + this.#value;
    }
  
    // Метод для додавання рядка на початок і в кінець
    padBoth(str) {
      this.padStart(str);
      this.padEnd(str);
    }
  }
  
  // Код для перевірки роботи класу
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // "."
  builder.padStart("^");
  console.log(builder.getValue()); // "^."
  builder.padEnd("^");
  console.log(builder.getValue()); // "^.^"
  builder.padBoth("=");
  console.log(builder.getValue()); // "=^.^="
  