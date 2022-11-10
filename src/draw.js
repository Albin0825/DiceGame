import { Button } from "./button/button.js";
import { canvas, ctx } from "./const.js";
import { dialogueBox } from "./dialogueBox.js";
import { Combat } from "./encounter/combat.js";

export function clearCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

/**
 * Draw everything on the canvas
 */ 
export function draw() {

    // Draw shit here

    if(dialogueBox.dialogue) {
        dialogueBox.drawBox();
    }
}