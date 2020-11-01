import data from "./js/data";
import { Keyboard } from "./js/Keyboard";


window.onload = function () {
    const keyboard = new Keyboard(data);
    keyboard.renderComponent();
    keyboard.addButtonsClickHandler();
};