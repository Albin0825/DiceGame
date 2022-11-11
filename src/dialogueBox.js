class DialogueBox {
    constructor(dialogue) {
        this.dialogue;
        this.current;
        this.currentText;
        this.displayLength = 0;
        this.img = new Image();


        this.audioDefault = new Audio('assets/sound/dialog_text.wav');
        this.audioYou = new Audio('assets/sound/dialogue_2.wav');
        this.audioGuard = new Audio('assets/sound/dialogue_8.wav');
        this.audioDefault.loop = true;
        this.audioDefault.volume = 0.75;
        this.audioYou.loop = true;
        this.audioYou.volume = 0.75;
        this.audioGuard.loop = true;
        this.audioGuard.volume = 0.75;


        // onFinish is the function that runs when the dialogue is over
        this.onFinish = () => {};
    }

    // Size must be set after canvas size is defined
    setSize() {
        this.x = 0.2 * canvas.width;
        this.y = 0.6 * canvas.height;
        this.w = 0.6 * canvas.width;
        this.h = 0.3 * canvas.height;
    }

    startDialogue(dialogue) {

        // Can't start a dialogue if another one is already active
        if(this.dialogue) {
            return;
        }

        // Set starting properties
        this.dialogue = dialogue;
        this.current = 0;
        this.displayLength = 0;
        this.doneTalking = false;
        this.onFinish = () => {};
    }

    // Go to next text in dialogue
    nextDialogue() {
        // Can't go to the next dialogue if the dialogue is not done get
        if(this.doneTalking) {
            this.current += 1;
            if(this.current >= this.dialogue.length) {
                this.onFinish();
                this.dialogue = null;
            }
            this.displayLength = 0;
            this.doneTalking = false;
        }
    }

    drawBox() {
        // Increase the amount of characters displayed by 1 every time the box is drawn
        if(this.displayLength < this.dialogue[this.current].text.length) {
            this.displayLength += 0.37; // Displaying one more letter every 2,7 frame (1/0.37)
            if(this.dialogue[this.current].character == 'You') {
                this.audioYou.play();
            } if(this.dialogue[this.current].character == 'Guard') {
                console.log(this.audioGuard.currentTime)
                if(this.audioGuard.currentTime >= (0.12052083333333333 / Math.floor(Math.random() * (6 - 4)))) {
                    this.audioGuard.currentTime = 0;
                }
                this.audioGuard.play();
            } else {
                this.audioDefault.play();
            }
        } else { // Stops playing "writing" sound and resets the time of the audio
            this.doneTalking = true;
            this.audioDefault.pause();
            this.audioYou.pause();
            this.audioGuard.pause();
        }

        this.img.src = "./assets/img/dialougebox.png";
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h);

        let textY;
        if(this.dialogue[this.current].character == "") {
            textY = this.y + 80;
        } else {
            textY = this.y + 110;
        }

        ctxSettings({fillStyle:"#eee",font:"24px Sketchy",textAlign:"left"});
        ctx.fillText(this.dialogue[this.current].text.substr(0,this.displayLength),this.x + 112.5,textY,this.x + this.w - 100);

        ctxSettings({fillStyle:"#aaa",font:"24px Sketchy",textAlign:"left"});
        ctx.fillText(this.dialogue[this.current].character,this.x + 112.5,this.y + 70,this.x + this.w - 100);
    }
    
}

const dialogueBox = new DialogueBox(false);