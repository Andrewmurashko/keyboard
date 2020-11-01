class Button {
    constructor({ data, symbol, clickability, pressShift }) {
        this.data = data;
        this.symbol = symbol;
        this.clickability = clickability;
        this.pressShift = pressShift;
    }
    generateButton() {
        let button = document.createElement("button");
        button.className = `button keyboard__button ${this.clickability && this.data == "caps" && "button_colored"
            } ${this.pressShift && this.data == "shift" && "button_colored"}`;
        button.setAttribute("data", this.data);
        this.clickability &&
            this.data == "shift" &&
            button.setAttribute("disabled", true);
        button.innerText = this.symbol;
        return button;
    }
}

export default Button;