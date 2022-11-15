class encounter1 extends dialogueChoice {
    constructor(character) {
        super();
        this.character = character;
        this.pos = [{character:"",text:"(The "+this.character+" liked that)"},{character:this.character,text:"'...'"}];
        this.neg = [{character:"",text:"(The "+this.character+" disliked that)"},{character:this.character,text:"'...'"}];
        this.option1 = {minimumSum: 6, successPoints: 18};
        this.option2 = {minimumSum: 12, successPoints: 25.456};
        this.option3 = {minimumSum: 18, successPoints: 31.177};
        this.situations = [
            {
                dialogue:[{character:this.character,text:"Do you live a boring life?'"}],
                options:[
                    {
                        text:"Yes, I'm bored.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"I'm actually pretty busy.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"I never thought about it.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            
            {
                dialogue:[{character:this.character,text:"'Are you escaping to help or protect the world or something?'"}],
                options:[
                    {
                        text:"That's right.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"None of your business.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"It pays the bills.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'Just based on my appearance, what kind of person am I to you?'"},],
                options:[
                    {
                        text:"It doesn't matter.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"Nobody, really.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"My rival.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'Why don't we enjoy a chat after all this escaping business is done?'"},],
                options:[
                    {
                        text:"All right, I suppose. ",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"There's no need for that.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"(...)",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'If I made you bleed in battle, what color of blood would you pour out?'"},],
                options:[
                    {
                        text:"Red.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"Black.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"I never bleed or cry.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'Care to explain why you got put in prison?'"},],
                options:[
                    {
                        text:"It'd take a while to explain.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"There's no need to explain.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"Just shut up.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'Confess your sins to me.'"},],
                options:[
                    {
                        text:"I apologize.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"I think... I was wrong.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"No chance.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'Do you have a dish you're good at?'"},],
                options:[
                    {
                        text:"My mother's stew.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"A fancy steak.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"What are you saying?",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'You seem to be shaking, are you okay?'"},],
                options:[
                    {
                        text:"I'm a bit chilly, but...",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"I'm a little scared...",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"Shut up!",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },

            {
                dialogue:[{character:this.character,text:"'Only bad people get put in prison. Don't you understand the severity of your action?'"},],
                options:[
                    {
                        text:"Sin...?",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"Cut to the chase.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"I've done nothing wrong.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Do you... think me a charlatan?'"},],
                options:[
                    {
                        text:"No.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"You're my enemy.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"You're not?",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Escaping prison is like escaping responsibility, doesn't it bother your conscience?'"},],
                options:[
                    {
                        text:"Now that you mentioned it...",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"...Nope",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"I'm past such things.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Prisoners always want something. Which is it?'"},],
                options:[
                    {
                        text:"The only thing I need is hope.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"Give me some food, I'm starving.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"Money.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Hm... Let's play a game! Guess what I wanna eat!'"},],
                options:[
                    {
                        text:"A nice hot meal.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"Something cold.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"Shut up.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'I do not fear death, neither do I fear you.'"},],
                options:[
                    {
                        text:"Why are you telling me this?",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"That's a lie.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"Quit acting though.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'I suggest you surrender yourself to the authorities.'"},],
                options:[
                    {
                        text:"This is a misunderstanding.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"I don't have the time.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },{
                        text:"You've got the wrong idea.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'I like to occasionally reward myself for working hard. How would you do that?'"},],
                options:[
                    {
                        text:"Relax at home.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"Go shopping in the nearby village.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"Stop being selfish.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'If your parents could see you now, I'm sure it would break their hearts...'"},],
                options:[
                    {
                        text:"You might be right...",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"This doesn't involve them.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"Actually, they'd rejoice.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Look, at the end of the day, what are you trying to tell me?'"},],
                options:[
                    {
                        text:"I'm telling you to get out of my way.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"Why are we here? Just to suffer?",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"I don't really know...",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Is it OK if I get mad right now?'"},],
                options:[
                    {
                        text:"Sure, go for it.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"Please don't.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"I'm not scared at all.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Hey it's my birthday today! What do you have to say to that?'"},],
                options:[
                    {
                        text:"Happy birthday.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"I had no idea.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"GET OUT OF THE WAY!",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Hm... maybe I should notify the other guards.'"},],
                options:[
                    {
                        text:"Please don't.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"It was self-defense.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"Call them. I dare you.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'My chest is beating so fast. What is this feeling?'"},],
                options:[
                    {
                        text:"Are you alright?",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"You're making it up.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"It's love.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'My horoscope said I was going to have relationship troubles today.'"},],
                options:[
                    {
                        text:"It's just a horoscope.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"How is your luck in romance?",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"Looks like it came true.",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'Prisoners these days are so self-assured that they will be successful in their future if they escape. Are you like that?'"},],
                options:[
                    {
                        text:"That's right.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"That's not true.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"What's wrong with that?",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
            {
                dialogue:[{character:this.character,text:"'I'm thinking... You're a good person, aren't you?'"},],
                options:[
                    {
                        text:"I get that a lot.",minimumSum:this.option1.minimumSum,successPoints:this.option1.successPoints,
                    },{
                        text:"Actually... I'm bad.",minimumSum:this.option2.minimumSum,successPoints:this.option2.successPoints,
                    },{
                        text:"Are you mocking me?",minimumSum:this.option3.minimumSum,successPoints:this.option3.successPoints,
                    },
                ],
                occured:false,
            },
        ];
        this.situationCount = this.situations.length;
    }
}