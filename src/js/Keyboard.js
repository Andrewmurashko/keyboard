import Button from "./Button";

export class Keyboard {
  constructor(data) {
    this.data = data;
    this.language = "en";
    this.symbolFlag = false;
    this.shift = false;
    this.caps = false;
    this.inputValue = "";
    this.keyboard = document.createElement("div");
    this.input = document.createElement("textarea");
  }

  renderComponent() {
    document.body.appendChild(this._generateInput());
    document.body.appendChild(this._generateKeyboard());
  }

  _generateInput() {
    this.input.className = "input keyboard__input";
    this.input.setAttribute("placeholder", "Введите текст");
    this._updateInputValue();
    return this.input;
  }
  _updateInputValue() {
    this.input.value = this.inputValue;
  }
  _generateKeyboard() {
    this.keyboard.className = "keyboard";
    this.keyboard.innerHTML = "";
    this.data.forEach((el, index) => {
      this.keyboard.appendChild(this._addButton(el));
    });
    return this.keyboard;
  }

  _addButton(el) {
    const button = new Button(this._settingButton(el));
    return button.generateButton();
  }
  _settingButton(el) {
    let symbol = this.symbolFlag
      ? el[this.language].symbol
      : el[this.language].letter;
    symbol = this.shift || this.caps ? symbol.toUpperCase() : symbol;
    let dataValue = el.data;
    return {
      data: dataValue,
      symbol: symbol,
      clickability: this.caps,
      pressShift: this.shift,
    };
  }

  addButtonsClickHandler() {
    this.keyboard.addEventListener("click", (event) => {
      let element = event.target;
      if (!element.attributes.getNamedItem("data")) return;

      switch (element.attributes.getNamedItem("data").value) {
        case "symbol":
          this.inputValue = this.input.value + element.innerText;
          this._updateInputValue();
          if (this.shift) {
            this.shift = false;
            this._generateKeyboard();
          }
          break;
        case "language":
          this.language == "en"
            ? (this.language = "ru")
            : (this.language = "en");
          this._generateKeyboard();
          break;
        case "backspace":
          this.inputValue = this.input.value.slice(0, -1);
          this._updateInputValue();
          break;
        case "enter":
          this.inputValue = this.input.value + "\r\n";
          this._updateInputValue();
          break;
        case "space":
          this.inputValue = this.input.value + " ";
          this._updateInputValue();
          break;
        case "lettersOrSymbols":
          this.symbolFlag = !this.symbolFlag;
          this._generateKeyboard();
          break;
        case "shift":
          this.shift = !this.shift;
          this._generateKeyboard();
          break;
        case "caps":
          this.caps = !this.caps;
          this._generateKeyboard();
          break;
      }
    });
  }
}
