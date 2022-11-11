let player = new Player(10);

let enemy = null;


window.onload = init();


let gameScene = "Intro";

let heldItem = null;
let dialogueOptions = null;

let currentSituation = null;
let showDialogueOptions = false;
let introBoxOpened = false;
let introDoorOpened = false;

// Runs on game launch
function init() {
    resizeCanvas();

    dialogueBox.setSize();

    ctxSettings({fillStyle:"white",font:"40px Sketchy",textAlign:"center"});
    ctx.fillText("Click to start",canvas.width / 2,canvas.height/2);
    window.requestAnimationFrame(introLoop);
}

function introLoop() {
    if(mouse.click) {
        dialogueBox.startDialogue([
            "(You wake up on a cold stone floor)",
            "'Woah!'",
            "'Where am I?'",
            "'This is not my bedroom...'",
            "'THIS IS A PRISON CELL!'",
            "'I gotta get out of here!'",
        ])
    
        dialogueBox.onFinish = () => {
            gameScene = "Intro Door";
        }

        mouse.click = false;
        window.requestAnimationFrame(gameLoop);
    } else {
        window.requestAnimationFrame(introLoop);
    }

}

function gameLoop() {
    clearCanvas();

    let buttons = [];
    switch(gameScene) {

        case "Intro":
            break;

        case "Intro Door":

            let doorButton = new Button('door',canvas.width*0.3,canvas.height*0.2,300,300);         
            let boxButton = new Button('box',canvas.width*0.3 + 300,canvas.height*0.35,300,300);
            let testButton = new Button("box",canvas.width*0.8,canvas.height*0.3,20,20);

            buttons = [doorButton, boxButton, testButton];

            doorButton.onClick = () => {
                if(!heldItem) {
                    dialogueBox.startDialogue([
                        "(You pull the door handle)",
                        "'The door is locked, I need something to get it open.'"
                    ]);
                }

                else if(heldItem == "Crowbar") {
                    introDoorOpened = true;
                    dialogueBox.startDialogue([
                        "(You manage to break open the door)",
                        "'Yes!'",
                        "'I knew the crowbar would help me, now I can get out of here.'"
                    ]);

                    dialogueBox.onFinish = () => {
                        gameScene = "Test Encounter";
                        dialogueOptions = new encounter1();
                    }
                }
            };

            boxButton.onClick = () => {

                if(!heldItem) {
                    dialogueBox.startDialogue([
                        "(You open the box)",
                        "(There is a crowbar inside)",
                    ]);
                    
                    heldItem = "Crowbar";
                }
            };

            if(introDoorOpened) {
                doorButton.open = true;
            }

            testButton.onClick = () => {
                gameScene = "testEnemy";
            }


            break;

        case "Test Encounter":
            dialogueBox.startDialogue([
                "Player: 'Hey, you! I need your help to get out!'",
                "Guard: 'How did you escape your cell? Oh whatever. Look, let me think...'",
                "Guard: 'You know what?'",
                "'Let me see if I like your style, and maybe I'll let you through.'"
            ]);
            dialogueBox.onFinish = () => {
                enemy = new Enemy(10,"idk");
                enemy.dialogueOptions = new encounter1;
                gameScene = "encounter";
            }
            break;

        case "testEnemy":
            console.log("hej");
            enemy = new Enemy(10, "idk");
            gameScene = "combatEncounter";
            break;
        case "combatEncounter":

            let lightButton = new Button('button',(canvas.width*1)-(canvas.width*0.5),canvas.height*0.7,canvas.width*0.5,(canvas.width*0.5)/3);
            let heavyButton = new Button('button',canvas.width*0,canvas.height*0.7,canvas.width*0.5,(canvas.width*0.5)/3);
            buttons = [lightButton, heavyButton];
            
            turn = 1;

            dialogueBox.onFinish = () => {
                gameScene = "combatEncounter";
            }

            lightButton.onClick = () => {
                if(turn == 1){
                    lightAttack(enemy);
                    turn == 0;
                }
            }

            heavyButton.onClick = () => {
                if(turn == 1){
                    heavyAttack(enemy);
                    turn == 0;
                }
            }

            if (turn == 0){
                enemyAttack(player);
                turn == 1;
            }

            if(player.alive == false){
                dialogueBox.onFinish = () => {
                    gameScene = "Intro Door";
                }
                dialogueBox.startDialogue([
                    "You Died"
                ]);
            }
            if(enemy.alive == false){
                dialogueBox.onFinish = () => {
                    gameScene = "Intro Door";
                }
                dialogueBox.startDialogue([
                    "They Died"
                ]);
            }

            break;

        case "encounter":
            if(!currentSituation) {
                currentSituation = enemy.dialogueOptions.randomSituation();

                dialogueBox.startDialogue(currentSituation.dialogue);
                dialogueBox.onFinish = () => {
                    showDialogueOptions = true;
                }
            }
            
            if(showDialogueOptions) {
                let option1 = new Button('dialogue',canvas.width / 2 - 520,canvas.height * 0.6,320,240);
                let option2 = new Button('dialogue',canvas.width / 2 - 160,canvas.height * 0.6,320,240);
                let option3 = new Button('dialogue',canvas.width / 2 + 200,canvas.height * 0.6,320,240);
            
                buttons = [option1, option2, option3];


                option1.onClick = () => {
                    diceRoll = new DiceRoll(6,0,2);
                }

                for(let i=0;i<3;i++) {
                    buttons[i].setOption(currentSituation.options[i]);
                }
            }

            break;
    }

    for(let i=0;i<buttons.length;i++) {
        buttons[i].update();
        buttons[i].draw();
    }

    draw();

    window.requestAnimationFrame(gameLoop);
}

function menuLoop() {

    window.requestAnimationFrame(menuLoop);
}