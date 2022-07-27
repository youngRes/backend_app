db.games.insertOne({
    "gameCode" : "1", 
    "version" : "1", 
    "gameDescription" : "Youngres video game", 
    "chapters" : [
        "1593", 
        "4474", 
        "2377", 
        "3009", 
        "5578", 
        "6968", 
        "7511", 
        "8744", 
        "9322", 
        "1228", 
        "6802", 
        "1477", 
        "3858", 
        "9663", 
        "3558", 
        "5576", 
        "8851", 
        "2580", 
        "7549", 
        "2656", 
        "4799", 
        "3885"
    ]
});

db.chapters.insertMany([
    { 
        "chapterCode" : "1593", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(15), 
        "startY" : NumberInt(12), 
        "chapterDescription" : "Sesion 1 - Capitulo 1: Psicoeducacion", 
        "startScene" : "1", 
        "highlights" : [
            "Introduction of the characters, presentation of the conflict and first choices on the behaviors chosen by the students according to the protagonist's situation."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Cap%C3%ADtulo1.PNG"
    },
    { 
        "chapterCode" : "4474", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(8), 
        "startY" : NumberInt(4), 
        "chapterDescription" : "Sesion 2 - Capitulo 2: Empatia", 
        "startScene" : "45", 
        "highlights" : [
            "Show of the behavior triangle, where behavior is defined by a combination of feelings, thoughts and behaviors. It allws to identify whether the student has understood the reason for the characters' behavior and the feelings they might be feeling."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Capitulo2.PNG"
    },
    { 
        "chapterCode" : "2377", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(10), 
        "startY" : NumberInt(2), 
        "chapterDescription" : "Sesion 1 - Capitulo 2: Psicoeducacion", 
        "startScene" : "24", 
        "highlights" : [
            "It allows to dentify the feelings of the characters according to their facial expression. Present situations to see if the student is able to put himself in the other's place"
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Cap%C3%ADtulo3.PNG"
    },
    { 
        "chapterCode" : "3009", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(10), 
        "startY" : NumberInt(2), 
        "chapterDescription" : "Sesion 2 - Capitulo 1: Empatia", 
        "startScene" : "32", 
        "highlights" : [
            "It allows to identify the feelings of the characters according to their facial expression. It presents situations to see if the player acts in an empathetic way."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Capitulo4.PNG"
    },
    { 
        "chapterCode" : "5578", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(10), 
        "startY" : NumberInt(2), 
        "chapterDescription" : "Sesion 3 - Capitulo 1: Respiracion", 
        "startScene" : "102", 
        "highlights" : [
            "It allows to know what kind of strategies children use when they feel nervous, it presents a breathing game to explain relaxation. If the player performs the game well, he/she will have fewer points and this means that he/she is practising the relaxation technique correctly."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Capitulo5.PNG"
    },
    { 
        "chapterCode" : "6968", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(23), 
        "startY" : NumberInt(7), 
        "chapterDescription" : "Sesion 3 - Capitulo 2: Respiracion", 
        "startScene" : "57", 
        "highlights" : [
            "A breathing game is presented. If the player performs the game well, he/she will have fewer points and this means that he/she is practising the relaxation technique correctly."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Cap%C3%ADtulo6.PNG"
    },
    { 
        "chapterCode" : "7511", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(18), 
        "startY" : NumberInt(26), 
        "chapterDescription" : "Sesion 4 - Capitulo 1: Relajacion", 
        "startScene" : "112", 
        "highlights" : [
            "A breathing game is presented. If the player performs the game well, he/she will have fewer points and this means that he/she is practising the relaxation technique correctly."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Capitulo7.PNG"
    },
    { 
        "chapterCode" : "8744", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(3), 
        "startY" : NumberInt(3), 
        "chapterDescription" : "Sesion 4 - Capitulo 2: Relajacion", 
        "startScene" : "103", 
        "highlights" : [
            "Several questions related to the process of muscle relaxation are presented.  Students are asked to select the parts of the body they need to relax at each moment. This allows us to check whether the students have learnt the steps they need to follow in order to relax."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Capitulo8.PNG"
    },
    { 
        "chapterCode" : "9322", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(8), 
        "startY" : NumberInt(6), 
        "chapterDescription" : "Sesion 5 - Capitulo 1: Visualizacion", 
        "startScene" : "131", 
        "highlights" : [
            "A visualisation and breathing exercise is presented. If the player performs the game well, he/she will have fewer points and this means that he/she is practising the relaxation technique correctly"
        ], 
        "snapshot" : "http://youngres-project.eu/wp-content/uploads/2020/04/YR-picgame-1.png"
    },
    { 
        "chapterCode" : "1228", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(1), 
        "startY" : NumberInt(2), 
        "chapterDescription" : "Sesion 5 - Capitulo 2: Visualizacion", 
        "startScene" : "140", 
        "highlights" : [
            "The three relaxation techniques are presented (breathings, muscular relaxation and visualization). If the player performs the games well, he/she will score less in the breathing exercises. And in the muscle relaxation exercise you can see if the students have learned the steps to relax."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Cap%C3%ADtulo10.PNG"
    },
    { 
        "chapterCode" : "6802", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(10), 
        "startY" : NumberInt(2), 
        "chapterDescription" : "Sesion 6 - Capitulo 1: Escucha activa", 
        "startScene" : "61", 
        "highlights" : [
            "Active listening is worked on, this chapter presents situations in which we can see if the students have paid attention to the dialogues of the video game from previous chapters and if they know  how to demonstrate that they are actively listening."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Capitulo11.PNG"
    },
    { 
        "chapterCode" : "1477", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(0), 
        "startY" : NumberInt(11), 
        "chapterDescription" : "Sesion 6 - Capitulo 2: Escucha activa", 
        "startScene" : "67", 
        "highlights" : [
            "Different situations are presented in which the student has to show that he/she has been attentive to the dialogues with the characters. It also allows us to see if the student uses strategies to show that he/she is interested in the conversation. More correct answers shows that the student has been paid attention to the conversation."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Cap%C3%ADtulo12.PNG"
    },
    { 
        "chapterCode" : "3858", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(8), 
        "startY" : NumberInt(8), 
        "chapterDescription" : "Sesion 7 - Capitulo 1: Habilidades sociales", 
        "startScene" : "152", 
        "highlights" : [
            "The student assumes the role of a character and  have to put into practice different social skills such as greeting, initiating dialogues, making compliments. The results will allow us to check if they have understood how to put social skills into practice in each context and situation, and if they know how to put themselves in the place of others and understand how they think and act."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Cap%C3%ADtulo13.PNG"
    },
    { 
        "chapterCode" : "9663", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(9), 
        "startY" : NumberInt(2), 
        "chapterDescription" : "Sesion 7 - Capitulo 2: Habilidades sociales", 
        "startScene" : "175", 
        "highlights" : [
            "The student assumes the role of a shy character and have to put into practice different social skills such as greeting, initiating dialogues, making compliments. The results will allow us to check if they have understood how to put social skills into practice in each context and situation, and if they know how to put themselves in the place of others and understand how they think and act."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Cap%C3%ADtulo14a.PNG"
    },
    { 
        "chapterCode" : "3558", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(8), 
        "startY" : NumberInt(16), 
        "chapterDescription" : "Sesion 8 - Capitulo 1: Historia de Ahmed", 
        "startScene" : "73", 
        "highlights" : [
            "It presents the main characteristics of Muslim culture.  The video games presents some questions to she if students have paid attention to the explanations within the video game. More correct answers indicates that they have paid attention to the dialogues and narrative."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Cap%C3%ADtulo15.PNG"
    },
    { 
        "chapterCode" : "5576", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(5), 
        "startY" : NumberInt(10), 
        "chapterDescription" : "Sesion 8 - Capitulo 2: Historia de Ahmed", 
        "startScene" : "99", 
        "highlights" : [
            "It tells the story of how Ahmed left his country. No decisions are made to evaluate."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Cap%C3%ADtulo16.PNG"
    },
    { 
        "chapterCode" : "8851", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(8), 
        "startY" : NumberInt(16), 
        "chapterDescription" : "Sesion 9 - Capitulo 1: Estilos interpersonales", 
        "startScene" : "52", 
        "highlights" : [
            "It presents diferents situations to demonstrate that the student can distinguish and understand the different types of interpersonal styles."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Capitulo17.PNG"
    },
    { 
        "chapterCode" : "2580", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(16), 
        "startY" : NumberInt(28), 
        "chapterDescription" : "Sesion 9 - Capitulo 2: Estilos interpersonales", 
        "startScene" : "147", 
        "highlights" : [
            "It continues with interpersonal styles and  it presents diferents situations to check that the student can distinguish and understand the different types of interpersonal styles"
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Capitulo18.PNG"
    },
    { 
        "chapterCode" : "7549", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(7), 
        "startY" : NumberInt(3), 
        "chapterDescription" : "Sesion 10 - Capitulo 1: Autoinstrucciones", 
        "startScene" : "198", 
        "highlights" : [
            "It presents several questions about Muslim culture to check if the students have paid attention in the previous sessions. A new conflict between Ahmed and the protagonist is also presented. The way in which students make decisions allows us to check if they have put into practice all the contents learnt throughout the sessions: emotion recognitio, empathy, active listening, etc."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Cap%C3%ADtulo19.PNG"
    },
    { 
        "chapterCode" : "2656", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(7), 
        "startY" : NumberInt(6), 
        "chapterDescription" : "Sesion 10 - Capitulo 2: Autoinstrucciones", 
        "startScene" : "205", 
        "highlights" : [
            "It presents different situations to check that the student can understands and distinguish the types of self-instructions that exist and how they affect the way he/she thinks and behaviour."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/cap%C3%ADtulo20.PNG"
    },
    { 
        "chapterCode" : "4799", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(8), 
        "startY" : NumberInt(6), 
        "chapterDescription" : "Sesion 11 - Capitulo 1: Resolucion de problemas", 
        "startScene" : "82", 
        "highlights" : [
            "This chapter is a review of all the previous sessions, it presents questions related to on all the previous sessions: empathy, emotional recognition, relaxation, visualisation, breathing, active listening, Muslim culture, social skills, etc. If the student gets a lot of questions right, it means that he/she has paid attention to all the previous sessions and has acquired the skills taught in this programme."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Capitulo21.PNG"
    },
    { 
        "chapterCode" : "3885", 
        "gameCode" : "1", 
        "version" : "1", 
        "startX" : NumberInt(9), 
        "startY" : NumberInt(1), 
        "chapterDescription" : "Sesion 11 - Capitulo 2: Resolucion de problemas", 
        "startScene" : "97", 
        "highlights" : [
            "It presents the end of the videogam. It can be seen whether the student has put into practice the steps of solve-problems to make a final decision."
        ], 
        "snapshot" : "https://upm365-my.sharepoint.com/personal/raquel_menendez_upm_es/Documents/YoungRes/SCRIPTS%20JUEGO/Imagenes%20y%20hightlight/Capitulo22.PNG"
    }
]);

db.events.insertMany([
    {
        "eventCode": "1",
        "chapterCode": "1593",
        "gameCode": "1",
        "version": "1",
        "description": "Are you a boy or a girl?",
        "highlights":[
          "The kid selects the sex of the main character."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Boy", "Girl"]
      },
      {
        "eventCode": "2",
        "chapterCode": "1593",
        "gameCode": "1",
        "version": "1",
        "description": "How happy are you with your classmates?",
        "highlights":[
          "The kid is asked about his/her relationship with his current classmates."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Nothing", "A little", "Quite a lot", "A lot"]
      },
      {
        "eventCode": "3",
        "chapterCode": "1593",
        "gameCode": "1",
        "version": "1",
        "description": "Should you remain sit?",
        "highlights":[
          " The kid doubts between staying sit or moving around the room."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"]
      },
      {
        "eventCode": "4",
        "chapterCode": "1593",
        "gameCode": "1",
        "version": "1",
        "description": "Will you remain silent, or complain about the problem?",
        "highlights":[
          "The kid decides if he/she shall reply to the director or remain silent."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Remain silent", "Complain"]
      },
      {
        "eventCode": "5",
        "chapterCode": "1593",
        "gameCode": "1",
        "version": "1",
        "description": "Will you slam the door, or close normally?",
        "highlights":[
          "The kid decides if he/she shall slam the door."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Slam the door", "Close normally"]
      },
      {
        "eventCode": "6",
        "chapterCode": "1593",
        "gameCode": "1",
        "version": "1",
        "description": "How shall you answer to mom?",
        "highlights":[
          "The kid decides how to confront the conversation with his/her mother."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Do not answer", "Complain about the director", "Leave the scene"]
      },
      {
        "eventCode": "7",
        "chapterCode": "1593",
        "gameCode": "1",
        "version": "1",
        "description": "Should you argue with your mom?",
        "highlights":[
          "The kid decides if he shall argue with her mother, after complaining about the director."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "6",
          "triggerDecision": 2
        },
        "possibleChoices":["Shout at her", "Answer aggressively", "Leave the scene"]
      },
	  {
        "eventCode": "8",
        "chapterCode": "1593",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do now?",
        "highlights":[
          "The kid arrives to his/her room, and decides what to do next."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Rest", "Play with the computer", "Read", "Call a friend"]
      },
	    {
        "eventCode": "9",
        "chapterCode": "1593",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do now?",
        "highlights":[
          "The kid meets Kami for the first time, and does not know how to react."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Run", "Calm down", "Attack the toy"]
      },
	  {
        "eventCode": "10",
        "chapterCode": "1593",
        "gameCode": "1",
        "version": "1",
        "description": "(Kami) Will you accept my help?",
        "highlights":[
          "Kami, the toy, explains to the kid that he is there to help him/her.IMPORTANT: election 2 gets the user back to the decision-making process."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "But...I don´t know you!", "No. You are a toy!"]
      },
	  {
        "eventCode": "41",
        "chapterCode": "1593",
        "gameCode": "1",
        "version": "1",
        "description": "Which emotion is experiencing the character after all the events occurred today?",
        "highlights":[
          "The player is asked about how he thinks that the character felt during the day."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Happiness", "Anger", "Boringness", "Sadness"]
      },
	   {
        "eventCode": "11",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Should you start eating?",
        "highlights":[
          "The kid is told to start eating breakfast, and he/she shall what to do before."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes. We are in a hurry", "First, thank mom for the breakfast"]
      },
	  {
        "eventCode": "12",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Will you kiss mom?",
        "highlights":[
          "The kid is now on the school, and must decide if he/she gives a kiss to her mom to say goodbye."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"]
      },
	  {
        "eventCode": "13",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think Tom was interested in talking with you?",
        "highlights":[
          "The main character speaks with Tom, who leaves quickly instead of conversing with you. The kid is asked about it."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"]
      },
	  {
        "eventCode": "14",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "How are you feeling, mate?",
        "highlights":[
          "The main character speaks with Rob and his group, and is asked about his feelings about the fight with Ahmed the day before."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Just scratches. I’m ok!", "I argued with my mom…", "I shouldn’t have fight with Ahmed"],
		"correctChoice": 1,
		"evaluation": {"type": "Rob_group"}
      },
	   {
        "eventCode": "15",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Do you feel like they try to push to you be aggressive?",
        "highlights":[
          "After listening to Rob and his group conversation, Kami asks the main character if he feels that they try to push him/her to be aggressive."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "14",
          "triggerDecision": 1
        },
        "possibleChoices":["Yes", "No"],
		"correctChoice": 2,
		"evaluation": {"type": "Rob_group"}
      },
	   {
        "eventCode": "16",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Will you leave Ahmed alone?",
        "highlights":[
          "The main character speaks with Rebeca, who blames him/her because of the fight of the previous day."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Of course", "I didn’t want to disturb both of you"]
      },
	   {
        "eventCode": "17",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Will you sit next to Rob?",
        "highlights":[
          "The main character shall decide if he/she will sit next to Rob or not."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"]
      },
	   {
        "eventCode": "18",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Will the main character be ashamed?",
        "highlights":[
          "The professor talks about the problem that took place the day before between the main character and Ahmed."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"]
      },
	   {
        "eventCode": "19",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Do you have anything to say in your defense?",
        "highlights":[
          "The professor is discussing with Ahmed and the main character about the previous day events. He gives the main character the chance to defend him/herself."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Complain", "Apologize to Ahmed", "Don’t say anything"]
      },
	  {
        "eventCode": "20",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Who will you support?",
        "highlights":[
          "Rob is arguing with Ahmed after the main character is named his “old brother/sister”. The main character shall now decide if he/she helps Ahmed, or stays with Rob during this fight."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Ahmed", "Rob"],
		"correctChoice": 2,
		"evaluation": {"type": "Rob_group"}
      },
	  	  {
        "eventCode": "21",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "What do you think Tom was thinking?",
        "highlights":[
          "In the end of chapter 2, Kami asks the main character about different people and their behavior, thoughts or emotions. The first one is Tom."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["I don’t know", "Maybe that I could bully him, like with Ahmed", "Maybe he was in a hurry", "That he doesn’t like me"],
		"correctChoice": [2, 4],
		"evaluation": {"type": "emotion_identification", "measure": "pre"}
      },
	  	  {
        "eventCode": "23",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Why do you think Rebeca was angry with you?",
        "highlights":[
          "In the end of chapter 2, Kami asks the main character about different people and their behavior, thoughts or emotions. The second one is Rebeca."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["She doesn’t like me", "I don’t know", "I suppose is because I bullied Ahmed", "She is jealous of my group"],
		"correctChoice": [1, 3],
		"evaluation": {"type": "emotion_identification", "measure": "pre"}
      },
	    {
        "eventCode": "24",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Why do you think mom kept distance with you all the day?",
        "highlights":[
          "At the end of chapter 2, Kami asks the main character about different people and their behavior, thoughts or emotions. The last one is Mom."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["She may be sad because of dad’s death", "Maybe she is still angry because of me", "I don’t know", "She’s probably having a bad day"],
		"correctChoice": [1, 2],
		"evaluation": {"type": "emotion_identification", "measure": "pre"}
      },
	  {
        "eventCode": "42",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think Rob is worried?",
        "highlights":[
          "After listening to Rob and his group conversation, Kami asks the main character if he thinks Rob is worried about your discussion with mom."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "14",
          "triggerDecision": 2
        },
        "possibleChoices":["Yes", "No"],
		"correctChoice": 1,
		"evaluation": {"type": "Rob_group"}
      },
	   {
        "eventCode": "43",
        "chapterCode": "2377",
        "gameCode": "1",
        "version": "1",
        "description": "Why did you change your opinion about the fight yesterday?",
        "highlights":[
          "After listening to Rob and his group conversation, Kami asks the main character why did he change its opinion about the fight with Ahmed."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "14",
          "triggerDecision": 3
        },
        "possibleChoices":["Due to the argument with mom", "Due to the argument with the director", "Is a general feeling", "Being alone made me think"]
      },
	  {
        "eventCode": "25",
        "chapterCode": "3009",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think this advice can be useful?",
        "highlights":[
          "At the beginning of chapter 3, the main character thinks about what Kami said the night before."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No", "I don’t know"]
      },
	  {
        "eventCode": "26",
        "chapterCode": "3009",
        "gameCode": "1",
        "version": "1",
        "description": "Shall I wait for mom?",
        "highlights":[
          "At the beginning of chapter 3, the main character walks down to eat breakfast. However, he/she can’t see mom anywhere."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Start eating", "Where is she?"]
      },
	  {
        "eventCode": "27",
        "chapterCode": "3009",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think mom is feeling right now?",
        "highlights":[
          "Kami points out that mom is outside, and he asks the main character about her feelings."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "26",
          "triggerDecision": 1
        },
        "possibleChoices":["Happy", "Scared", "Angry", "Sad"],
		"correctChoice": 4,
		"evaluation": {"type": "emotion_identification", "measure": "pre"}
      },
	  {
        "eventCode": "28",
        "chapterCode": "3009",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think mom is feeling right now?",
        "highlights":[
          "When looking for mom, the main character founds her at the backyard. Kami  asks the main character about her feelings."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "26",
          "triggerDecision": 2
        },
        "possibleChoices":["Happy", "Scared", "Angry", "Sad"],
		"correctChoice": 4,
		"evaluation": {"type": "emotion_identification", "measure": "pre"}
      },
	  {
        "eventCode": "29",
        "chapterCode": "3009",
        "gameCode": "1",
        "version": "1",
        "description": "What would you say to Mike?",
        "highlights":[
          "When arriving to school, Mike apologies for his behavior with you."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["It’s Ok. I forgive you", "I won’t forgive you. You could have supported me"],
		"correctChoice": 1,
		"evaluation": {"type": "general_behaviour"}
      },
	   {
        "eventCode": "30",
        "chapterCode": "3009",
        "gameCode": "1",
        "version": "1",
        "description": "How should you answer?",
        "highlights":[
          "When the main character meets Ahmed, the last greets him with an Islamic term, “Salam Alaikum”. How should the main character answer?."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["That’s stupid. Hi, that’s all", "Eh… hi?", "I didn’t know that term. What does it mean?"],
		"correctChoice": [2, 3],
		"evaluation": {"type": "general_behaviour"}
      },
	   {
        "eventCode": "31",
        "chapterCode": "3009",
        "gameCode": "1",
        "version": "1",
        "description": "How should you answer?",
        "highlights":[
          "When you ask Ahmed about the meaning of that expression, the main character has the chance to say it back or not."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "30",
          "triggerDecision": 3
        },
        "possibleChoices":["Malekum Salam", "Wa Alaikum Assalam", "That’s stupid", "Could you repeat, please?"],
		"correctChoice": [1, 2, 4],
		"evaluation": {"type": "general_behaviour"}
      },
	  {
        "eventCode": "32",
        "chapterCode": "3009",
        "gameCode": "1",
        "version": "1",
        "description": "How does Ahmed feel right now?",
        "highlights":[
          "Once the main character tries to answer Ahmed using his language, he changes his expression. The player shall identify the emotion."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "31",
          "triggerDecision": [1, 2, 3]
        },
        "possibleChoices":["Happy", "Sad", "Upset", "Scared"],
		"correctChoice": 1,
		"evaluation": {"type": "emotion_identification", "measure": "pre"}
      },
	  {
        "eventCode": "33",
        "chapterCode": "3009",
        "gameCode": "1",
        "version": "1",
        "description": "How would you feel if you were accused of getting into troubles on Ahmed’s condition?",
        "highlights":[
          "After seeing the argument between Ahmed and Kong, the main character gets involved into another argument with Ahmed, who finally leaves the scene. Then, Kami makes the main character wonder how does Ahmed feels about being constantly bullied."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["I think I didn’t do anything bad", "Maybe I should had stopped before"],
		"correctChoice": 2,
		"evaluation": {"type": "general_behaviour"}
      },
	  {
        "eventCode": "44",
        "chapterCode": "3009",
        "gameCode": "1",
        "version": "1",
        "description": "Check Tom’s expression. Why is he so evasive with you?",
        "highlights":[
          "The main character starts a conversation with Tom, and is questioned about what Tom feels watching his expression."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["He is angry with you", "He is scared of you", "He is ashamed"],
		"correctChoice": 2,
		"evaluation": {"type": "emotion_identification", "measure": "pre"}
      },
	   {
        "eventCode": "45",
        "chapterCode": "3009",
        "gameCode": "1",
        "version": "1",
        "description": "How should you answer Tom?",
        "highlights":[
          "The main character starts a conversation with Tom, and he decides how to answer Tom."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Why don’t you stop this attitude?", "Calm down, Tom. I don’t want to bother you"],
		"correctChoice": 2,
		"evaluation": {"type": "general_behaviour"}
      },
	  {
        "eventCode": "34",
        "chapterCode": "4474",
        "gameCode": "1",
        "version": "1",
        "description": "How is Ahmed feeling right now?",
        "highlights":[
          "The main character arrives outside in time to see how his/her friends are throwing a ball, without letting Ahmed to play. The player shall first try to understand how Ahmed is feeling on this situation."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Happy", "Angry", "Sad", "Scared"],
		"correctChoice": 3,
		"evaluation": {"type": "emotion_identification", "measure": "post_1"}
      },
	  {
        "eventCode": "35",
        "chapterCode": "4474",
        "gameCode": "1",
        "version": "1",
        "description": "Should you try to include Ahmed in the game?",
        "highlights":[
          "The main character arrives outside in time to see how his/her friends are throwing a ball, without letting Ahmed to play. Now, the player must decide if he shall try to include Ahmed in the game, or leave the scene to avoid problems."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Include Ahmed", "Leave the scene with Ahmed, to avoid problems"],
		"correctChoice": 1,
		"evaluation": {"type": "general_behaviour"}
      },
	  {
        "eventCode": "36",
        "chapterCode": "4474",
        "gameCode": "1",
        "version": "1",
        "description": "How is Rob feeling right now?",
        "highlights":[
          "After starting to play with the Ahmed and Rob’s group, you throw the ball so Ahmed can catch it. Rob then starts feeling angry. The player must identify this emotion."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Happy", "Sad", "Surprised", "Angry"],
		"correctChoice": 4,
		"evaluation": {"type": "emotion_identification", "measure": "post_1"}
      },
	  {
        "eventCode": "37",
        "chapterCode": "4474",
        "gameCode": "1",
        "version": "1",
        "description": "What do you think that you should do now?",
        "highlights":[
          "The third time he receives the ball, the main character shall decide if he is going to throw the ball to Ahmed again, challenging Rob, or if Rob is right."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Rob is right. Let’s stop", "Challenge Rob. Ahmed should be included"],
		"correctChoice": 2,
		"evaluation": {"type": "general_behaviour"}
      },
	  {
        "eventCode": "38",
        "chapterCode": "4474",
        "gameCode": "1",
        "version": "1",
        "description": "The questions are:",
        "highlights":[
          "The main character shall decide if he tells the whole problem with Rob to the professor."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Tell him", "Remain silent"]
      },
	  {
        "eventCode": "39",
        "chapterCode": "4474",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think that Ahmed felt after all the recess problem?",
        "highlights":[
          "Kami and the main character maintain a final talk on the backyard. Kami asks the player how does he think that Ahmed felt after the recess scene."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Sad", "Angry", "Happy"],
		"correctChoice": 3,
		"evaluation": {"type": "emotion_identification", "measure": "post_1"}
      },
	  {
        "eventCode": "40",
        "chapterCode": "4474",
        "gameCode": "1",
        "version": "1",
        "description": "How do you feel after helping Ahmed?",
        "highlights":[
          "Kami and the main character maintain a final talk on the backyard. Kami asks the player how did he/she felt when helping Ahmed."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Very well", "Nor good or bad", "Sad. I don’t like to argue with my friends"]
      },
	  {
        "eventCode": "46",
        "chapterCode": "5578",
        "gameCode": "1",
        "version": "1",
        "description": "How do you manage stress?",
        "highlights":[
          "The player is questioned about how he manages the stress."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["I hit things", "I breathe deeply and try to calm down", "I look for someone to help me", "Nothing, I don’t usually lose my temper"]
      },
	    {
        "eventCode": "47",
        "chapterCode": "5578",
        "gameCode": "1",
        "version": "1",
        "description": "Who will you choose as bus companion?",
        "highlights":[
          "The player shall decide who to sit with."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Kong", "Ahmed"],
		"correctChoice": 1,
		"evaluation": {"type": "Rob_group"}
      },
	  {
        "eventCode": "48",
        "chapterCode": "5578",
        "gameCode": "1",
        "version": "1",
        "description": "Did the player won the game?",
        "highlights":[
          "The player participates in the first breathing game."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"]
      },
	    {
        "eventCode": "49",
        "chapterCode": "5578",
        "gameCode": "1",
        "version": "1",
        "description": "Why do you seem nervous?",
        "highlights":[
          "The player is questioned by Kami about his nerves."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Because of what happened yesterday during recess", "Is just due to the game", "I don’t know", "I’m not nervous"]
      },
	  {
        "eventCode": "50",
        "chapterCode": "5578",
        "gameCode": "1",
        "version": "1",
        "description": "How do you call this effect?",
        "highlights":[
          "If you are trembling, that’s a mirror of your emotions. How do we call this?."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Behavior triangle", "Empathy", "Worries"],
		"correctChoice": 1,
		"evaluation": {"type": "emotion_identification", "measure": "post_2"}
      },
	  {
        "eventCode": "51",
        "chapterCode": "6968",
        "gameCode": "1",
        "version": "1",
        "description": "Which emotion do you think Ahmed felt during the dream?",
        "highlights":[
          "The player is questioned about how he thinks Ahmed felt during the dream."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Surprise", "Anger", "Sadness", "Fear"],
		"correctChoice": 4,
		"evaluation": {"type": "emotion_identification", "measure": "post_2"}
      },
	  {
        "eventCode": "52",
        "chapterCode": "7511",
        "gameCode": "1",
        "version": "1",
        "description": "Why do you think Ahmed had a nightmare?",
        "highlights":[
          "The main character discuss with Kami about the reasons why Ahmed had a nightmare."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Maybe he is not confident when he is away from home", "Maybe he is still scared of me", "Well... I saw Kong talking with him at the school bathroom", "How could I know it?"]
      },
	  {
        "eventCode": "53",
        "chapterCode": "7511",
        "gameCode": "1",
        "version": "1",
        "description": "What do you think that you should do with Ahmed?",
        "highlights":[
          "The main character is questioned about what should he do with Ahmed."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Help him", "Let him be"],
		"correctChoice": 1,
		"evaluation": {"type": "general_behaviour"}
      },
	  {
        "eventCode": "54",
        "chapterCode": "7511",
        "gameCode": "1",
        "version": "1",
        "description": "Do you believe Elle?",
        "highlights":[
          "Elle tries to deceive the main character, telling him that Ahmed wants to speak with Kong. The player shall decide if he believes it or not."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"]
      },
	   {
        "eventCode": "55",
        "chapterCode": "7511",
        "gameCode": "1",
        "version": "1",
        "description": "Are you going to ask me if I try to get into troubles with Kong?",
        "highlights":[
          "Ahmed asks if the player thinks that he is trying to get into troubles with Kong."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes, you need to be more careful", "No, it wasn’t your fault"],
		"correctChoice": 2,
		"evaluation": {"type": "general_behaviour"}
      },
	   {
        "eventCode": "56",
        "chapterCode": "7511",
        "gameCode": "1",
        "version": "1",
        "description": "How difficult was the boat game?",
        "highlights":[
          "The main character is asked to score the difficulty of the boat game."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["It cost me a little…", "Quite easy!", "It was difficult…"]
      },
	  {
        "eventCode": "57",
        "chapterCode": "8744",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do first?",
        "highlights":[
          "Rebeca asks Ahmed about the order of the body parts for relaxation. This is the first question."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the eyes", "Relax the eyebrows", "Take a sit relaxed"],
		"correctChoice": 3,
		"evaluation": {"type": "relaxation", "measure": "pre"}
      },
	  {
        "eventCode": "58",
        "chapterCode": "8744",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Rebeca asks Ahmed about the order of the body parts for relaxation. This is the second question."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the legs", "Relax the head", "Relax the arms"],
		"correctChoice": 3,
		"evaluation": {"type": "relaxation", "measure": "pre"}
      },
	  {
        "eventCode": "59",
        "chapterCode": "8744",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Rebeca asks Ahmed about the order of the body parts for relaxation. This is the third question."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the mouth", "Relax the forehead and eyes", "Relax the head in general"],
		"correctChoice": 2,
		"evaluation": {"type": "relaxation", "measure": "pre"}
      },
	  {
        "eventCode": "60",
        "chapterCode": "8744",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Rebeca asks Ahmed about the order of the body parts for relaxation. This is the fourth question."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the neck", "Relax the nose", "Relax the mouth"],
		"correctChoice": 3,
		"evaluation": {"type": "relaxation", "measure": "pre"}
      },
	  {
        "eventCode": "61",
        "chapterCode": "8744",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Rebeca asks Ahmed about the order of the body parts for relaxation. This is the fifth question."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the neck", "Relax the shoulders", "Relax the legs"],
		"correctChoice": 1,
		"evaluation": {"type": "relaxation", "measure": "pre"}
      },
	  {
        "eventCode": "62",
        "chapterCode": "8744",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Rebeca asks Ahmed about the order of the body parts for relaxation. This is the sixth question."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the stomach", "Relax the rest of the body", "Relax the upper chest"],
		"correctChoice": 3,
		"evaluation": {"type": "relaxation", "measure": "pre"}
      },
	  {
        "eventCode": "63",
        "chapterCode": "8744",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Rebeca asks Ahmed about the order of the body parts for relaxation. This is the seventh question."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the legs", "Relax the himps", "Relax the stomach"],
		"correctChoice": 3,
		"evaluation": {"type": "relaxation", "measure": "pre"}
      },
	  {
        "eventCode": "64",
        "chapterCode": "8744",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Rebeca asks Ahmed about the order of the body parts for relaxation. This is the final question."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the legs", "Relax the feet", "Relax the body in general"],
		"correctChoice": 1,
		"evaluation": {"type": "relaxation", "measure": "pre"}
      },
	   {
        "eventCode": "65",
        "chapterCode": "8744",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think they are a bad influence for you?",
        "highlights":[
          "Rebeca thinks that Rob and the others are a bad influence for you. Do you think so?."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["I think you are right", "I don’t agree"],
		"correctChoice": 2,
		"evaluation": {"type": "Rob_group"}
      },
	  {
        "eventCode": "66",
        "chapterCode": "8744",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think Rob influenced you?",
        "highlights":[
          "Rebeca thinks that the players bad behaviour was influenced by Rob."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["I am also responsible", "Yes, you are right"],
		"correctChoice": 2,
		"evaluation": {"type": "Rob_group"}
      },
	  {
        "eventCode": "67",
        "chapterCode": "1228",
        "gameCode": "1",
        "version": "1",
        "description": "Which is the first strategy you learnt?",
        "highlights":[
          "Ahmed experiences a new nightmare, and has to confront it with the strategies he has learnt during the last days. What shall he do before?."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Breathing", "Visualization", "Relaxation"]
      },
	  {
        "eventCode": "68",
        "chapterCode": "1228",
        "gameCode": "1",
        "version": "1",
        "description": "Which is the second strategy you learnt?",
        "highlights":[
          "Ahmed experiences a new nightmare, and has to confront it with the strategies he has learnt during the last days. What shall he do as a second step?."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Visualization", "Relaxation"]
      },
	  {
        "eventCode": "69",
        "chapterCode": "1228",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do first?",
        "highlights":[
          "Ahmed needs to apply relaxation techniques while he is inside the nightmare. This is the first step."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the eyes", "Relax the eyebrows", "Sit in a relaxed position"],
		"correctChoice": 3,
		"evaluation": {"type": "relaxation", "measure": "post_1"}
      },
	  {
        "eventCode": "70",
        "chapterCode": "1228",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Ahmed needs to apply relaxation techniques while he is inside the nightmare. This is the second step."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the legs", "Relax the head", "Relax the arms"],
		"correctChoice": 3,
		"evaluation": {"type": "relaxation", "measure": "post_1"}
      },
	   {
        "eventCode": "71",
        "chapterCode": "1228",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Ahmed needs to apply relaxation techniques while he is inside the nightmare. This is the third step."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the mouth", "Relax the eyes", "Relax the head in general"],
		"correctChoice": 2,
		"evaluation": {"type": "relaxation", "measure": "post_1"}
      },
	   {
        "eventCode": "72",
        "chapterCode": "1228",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Ahmed needs to apply relaxation techniques while he is inside the nightmare. This is the fourth step."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the neck", "Relax the nose", "Relax the mouth"],
		"correctChoice": 3,
		"evaluation": {"type": "relaxation", "measure": "post_1"}
      },
	  {
        "eventCode": "73",
        "chapterCode": "1228",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Ahmed needs to apply relaxation techniques while he is inside the nightmare. This is the fifth step."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the neck", "Relax the shoulders", "Relax the legs"],
		"correctChoice": 1,
		"evaluation": {"type": "relaxation", "measure": "post_1"}
      },
	  {
        "eventCode": "74",
        "chapterCode": "1228",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Ahmed needs to apply relaxation techniques while he is inside the nightmare. This is the sixth step."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the stomach", "Relax the rest of the body", "Relax the upper chest"],
		"correctChoice": 3,
		"evaluation": {"type": "relaxation", "measure": "post_1"}
      },
	  {
        "eventCode": "75",
        "chapterCode": "1228",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Ahmed needs to apply relaxation techniques while he is inside the nightmare. This is the seventh step."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the legs", "Relax the himps", "Relax the stomach"],
		"correctChoice": 3,
		"evaluation": {"type": "relaxation", "measure": "post_1"}
      },
	   {
        "eventCode": "76",
        "chapterCode": "1228",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do next?",
        "highlights":[
          "Ahmed needs to apply relaxation techniques while he is inside the nightmare. This is the final step."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relax the legs", "Relax the feet", "Relax the body in general"],
		"correctChoice": 1,
		"evaluation": {"type": "relaxation", "measure": "post_1"}
      },
      {
        "eventCode": "77",
        "chapterCode": "1228",
        "gameCode": "1",
        "version": "1",
        "description": "During the second nightmare, Ahmed needs to use his breath to end up with Kong. If he breathes too early, Kong goes back, and it is count as 1 fail (this variable += 1)",
        "highlights":[
          "The less this value scores, the better the player performed."
        ],
        "type":"timed",
        "parentDecision": null,
        "possibleChoices":[0, 100],
		"evaluation": {"type": "breathing", "measure": "post_5"}
      },
	  {
        "eventCode": "78",
        "chapterCode": "6802",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do with the cat?",
        "highlights":[
          "Kami is being pursued by the cat. The main character helps him capturing the cat, but he/she shall decide what to do with the cat."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Throw it through the window!", "Put it in a box"]
      },
	  {
        "eventCode": "79",
        "chapterCode": "6802",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you answer to Kami?",
        "highlights":[
          "Kami and the main character are back in the room. Kami says that the main character would have done the same with the cat."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Actually, is very funny", "You said that we shall be kind with others", "My mom could hear us with the cat. Be careful next time!"],
		"correctChoice": 2,
		"evaluation": {"type": "general_behaviour"}
      },
	  {
        "eventCode": "80",
        "chapterCode": "6802",
        "gameCode": "1",
        "version": "1",
        "description": "Do you remember what is the current job of Ahmed’s father?",
        "highlights":[
          "Kami uses the example of a conversation between Ahmed and the main character to explain what the active listening is."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["He is engineer", "He works in a pie shop", "It does not have any relevance", "His father died"],
		"correctChoice": 4,
		"evaluation": {"type": "active_listening", "measure": "pre"}
      },
	   {
        "eventCode": "81",
        "chapterCode": "6802",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think that you and your mother listened actively to each other?",
        "highlights":[
          "Kami uses the example of a conversation between mom and the main character to explain what the active listening is."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"],
		"correctChoice": 2,
		"evaluation": {"type": "active_listening", "measure": "pre"}
      },
	  {
        "eventCode": "82",
        "chapterCode": "6802",
        "gameCode": "1",
        "version": "1",
        "description": "Will you follow the conversation?",
        "highlights":[
          "The main character starts talking with his/her mother. After the first question, the main character shall decide if he/she is going to continue with the conversation."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"],
		"correctChoice": 1,
		"evaluation": {"type": "active_listening", "measure": "pre"}
      },
	  {
        "eventCode": "83",
        "chapterCode": "6802",
        "gameCode": "1",
        "version": "1",
        "description": "Will you follow the conversation?",
        "highlights":[
          "The main character starts talking with his/her mother. After the second question, the main character shall decide if he/she is going to continue with the conversation."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "82",
          "triggerDecision": 1
        },
        "possibleChoices":["Would you like to tell me more?", "Ok, I don’t want to disturb you"]
      },
	  {
        "eventCode": "84",
        "chapterCode": "6802",
        "gameCode": "1",
        "version": "1",
        "description": "Will you follow the conversation?",
        "highlights":[
          "The main character starts talking with his/her mother. After the third question, the main character shall decide if he/she is going to continue with the conversation."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "83",
          "triggerDecision": 1
        },
        "possibleChoices":["Keep asking", "Leave it now"],
		"correctChoice": 2,
		"evaluation": {"type": "active_listening", "measure": "pre"}
      },
	  {
        "eventCode": "85",
        "chapterCode": "6802",
        "gameCode": "1",
        "version": "1",
        "description": "What will you answer?",
        "highlights":[
          "The main character starts talking with his/her mother. After the fourth question, in this case related with his/her dad’s death, the main character shall decide how is he going to end the conversation."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "84",
          "triggerDecision": 1
        },
        "possibleChoices":["If it helps you feel more comfortable, I can go with you", "I understand you. It makes me feel bad too"]
      },
	  {
        "eventCode": "86",
        "chapterCode": "6802",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think that Kami’s advice is useful to solve this kind of conflicts?",
        "highlights":[
          "The main character is questioned about the usefulness of Kami’s advice to resolve conflicts like the one he/she has with his/her mother."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"]
      },
	  {
        "eventCode": "87",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "What do you think about horse riding?",
        "highlights":[
          "The main character shall talk with 5 different partners to try his/her active listening skills. In this case, the questions are directed to Ana, while she says that she likes horses."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["It is a very beautiful sport", "Horses are a waste of time"],
		"correctChoice": 2,
		"evaluation": {"type": "general_behaviour"}
      },
	   {
        "eventCode": "88",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "Which member of Ana’s family decided to teach him to ride horses?",
        "highlights":[
          "The main character shall talk with 5 different partners to try his/her active listening skills. In this case, the questions are directed to Ana."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Her father", "Her mother", "Her grandmother", "Her grandfather"],
		"correctChoice": 3,
		"evaluation": {"type": "active_listening", "measure": "post_1"}
      },
	  {
        "eventCode": "89",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think Tom is feeling?",
        "highlights":[
          "The main character shall talk with 5 different partners to try his/her active listening skills. In this case, the questions are directed to Tom."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Fine", "Bad"]
      },
	  	{
        "eventCode": "90",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "Do you understand how Tom is feeling about your previous behavior?",
        "highlights":[
          "The main character shall talk with 5 different partners to try his/her active listening skills. In this case, the questions are directed to Tom."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["I understand how are you feeling", "That won’t happen", "That’s stupid"],
		"correctChoice": [1, 2],
		"evaluation": {"type": "active_listening", "measure": "post_1"}
      },
	  {
        "eventCode": "91",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "Do you understand why Tom behaved like that before?",
        "highlights":[
          "The main character shall talk with 5 different partners to try his/her active listening skills. In this case, the questions are directed to Tom. Kami asks the main character if he/she understands how Tom is feeling."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes. I understand how he is feeling", "No. I think he is exaggerating"]
      },
	  {
        "eventCode": "92",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think Antonio is listening to you?",
        "highlights":[
          "The main character shall talk with 5 different partners to try his/her active listening skills. In this case, the questions are directed to Antonio. But he starts talking about completely different topics, so the main character must understand that he is now listening him/her."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"],
		"correctChoice": 2,
		"evaluation": {"type": "active_listening", "measure": "post_1"}
      },
	  {
        "eventCode": "93",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "Which is the favorite subject of Antonio?",
        "highlights":[
          "The main character shall talk with 5 different partners to try his/her active listening skills. In this case, the questions are directed to Antonio. Now, the main character has to answer regarding Antonio’s preferences."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Maths", "Gimnastics", "Literature", "All the previous ones"],
		"correctChoice": 3,
		"evaluation": {"type": "active_listening", "measure": "post_1"}
      },
	   {
        "eventCode": "94",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "Will you insist?",
        "highlights":[
          "The main character shall talk with 5 different partners to try his/her active listening skills. In this case, the questions are directed to Rebeca. The main character asks her about Ahmed, but she prefers not to talk. The main character must decide if insisting or not."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Insist", "Don´t insist"]
      },
	  {
        "eventCode": "95",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "Will you keep insisting?",
        "highlights":[
          "The main character shall talk with 5 different partners to try his/her active listening skills. In this case, the questions are directed to Rebeca. The main character asks her about Ahmed, but she prefers not to talk. The main character insists, but she doesn’t want to talk. What to do next?."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Keep insisting", "Stop insisting"],
		"correctChoice": 2,
		"evaluation": {"type": "active_listening", "measure": "post_1"}
      },
	  {
        "eventCode": "96",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "Which animals did Lori said, and on which order?",
        "highlights":[
          "The main character shall talk with 5 different partners to try his/her active listening skills. In this case, the questions are directed to Lori."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Cat, dog, turtle, hamster", "Dog, hamster, canary and lizard", "She does not like animals", "Hamster, dog, turtle, cat" ],
		"correctChoice": 1,
		"evaluation": {"type": "active_listening", "measure": "post_1"}
      },
      {
        "eventCode": "97",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "How many questions has the player answered correctly.",
        "highlights":[
          "Summary of correct answers during the active listening game."
        ],
        "type":"timed",
        "parentDecision": null,
        "possibleChoices":[0, 5]
      },
	  {
        "eventCode": "98",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "Who were you talking with?",
        "highlights":[
          "After the questions, Ahmed arrives, and he asks the main character who is he/she talking with."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["With my toy Kami. He is helping me behave properly", "With no one"]
      },
	  {
        "eventCode": "99",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "What do you think? Should the group include Mike?",
        "highlights":[
          "Mike comes to Ahmed, Rebeca and the main character to ask them to participate with the group."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Rebeca is right. Mike should leave", "We should help Mike"],
		"correctChoice": 2,
		"evaluation": {"type": "general_behaviour"}
      },
	  {
        "eventCode": "100",
        "chapterCode": "1477",
        "gameCode": "1",
        "version": "1",
        "description": "What do you think?",
        "highlights":[
          "After denying the help, Ahmed justifies why does he think Mike should stay. The main character shall decide again."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["If we kick him out, we will be like Rob", "If he apologies, he can stay", "I still think is not a good idea"],
		"correctChoice": [1, 2],
		"evaluation": {"type": "general_behaviour"}
      },
	  {
        "eventCode": "101",
        "chapterCode": "3858",
        "gameCode": "1",
        "version": "1",
        "description": "Do you remember what is to listen actively?",
        "highlights":[
          "The chapter starts asking the player if he remembers what is to listen actively."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["It implies remaining quiet when the other speaks", "It implies listening and asking questions", "Both 1 and 2 are true", "Everything is not correct"],
		"correctChoice": 2,
		"evaluation": {"type": "active_listening", "measure": "post_1"}
      },
	  {
        "eventCode": "102",
        "chapterCode": "3858",
        "gameCode": "1",
        "version": "1",
        "description": "How would Tom answer to Martin?",
        "highlights":[
          "The player plays the role of Tom, as he has to deal with different social situations acting as he thinks Tom would act. The first decision is related with Martin, surprisingly appearing behind the player. The decision involves how the character greets someone."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Hi Martin! How are you?", "H-hi Martin…", "I would not answer", "Wow, you stink!"],
		"correctChoice": 2,
		"evaluation": {"type": "social_skills", "measure": "pre"}
      },
	   {
        "eventCode": "103",
        "chapterCode": "3858",
        "gameCode": "1",
        "version": "1",
        "description": "How would Tom answer to Lori?",
        "highlights":[
          "The player plays the role of Tom, as he has to deal with different social situations acting as he thinks Tom would act. The second decision is related with Lori, who asks the player about his opinion of Antonio’s clothes. The decision involves how the character praise someone."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Well…I… think…. It… suits you", "It looks great!", "You look like a mummy!"],
		"correctChoice": 1,
		"evaluation": {"type": "social_skills", "measure": "pre"}
      },
	  {
        "eventCode": "104",
        "chapterCode": "3858",
        "gameCode": "1",
        "version": "1",
        "description": "How would Tom ask Rebeca to let him pass?",
        "highlights":[
          "The player plays the role of Tom, as he has to deal with different social situations acting as he thinks Tom would act. The third decision is related with Rebeca, who is blocking the way. The decision involves how the character asks things."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Hi… eh.. could I… pass?", "Hi Rebeca! Could you please let me pass?", "Move away, you idiot!"],
		"correctChoice": 1,
		"evaluation": {"type": "social_skills", "measure": "pre"}
      },
	  {
        "eventCode": "105",
        "chapterCode": "3858",
        "gameCode": "1",
        "version": "1",
        "description": "How would Tom answer Kong and Lori insults?",
        "highlights":[
          "The player plays the role of Tom, as he has to deal with different social situations acting as he thinks Tom would act. The forth decision is related with Lori and Kong, who are messing with him. The decision involves how the character deals with a problem."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Well… I… don’t want to… have a problem with you", "Let me alone. Don’t you have anything better to do?", "You look like a whole circus, Kong", "Don’t say nothing and leave"],
		"correctChoice": 1,
		"evaluation": {"type": "social_skills", "measure": "pre"}
      },
	  {
        "eventCode": "106",
        "chapterCode": "3858",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think Tom would accept the critic without complaining?",
        "highlights":[
          "The player plays the role of Tom, as he has to deal with different social situations acting as he thinks Tom would act. The fifth decision is related with the teacher, who unfairly accuses Tom of being late. The decision involves how the character deals with criticism."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"],
		"correctChoice": 1,
		"evaluation": {"type": "social_skills", "measure": "pre"}
      },
	   {
        "eventCode": "107",
        "chapterCode": "3858",
        "gameCode": "1",
        "version": "1",
        "description": "Why?",
        "highlights":[
          "After saying “yes” to the first question, the player justifies why he thinks Tom would accept without complaining."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "106",
          "triggerDecision": 1
        },
        "possibleChoices":["He does not care", "He is too shy?", "He thinks he is right"],
		"correctChoice": 2,
		"evaluation": {"type": "social_skills", "measure": "pre"}
      },
	  {
        "eventCode": "108",
        "chapterCode": "3858",
        "gameCode": "1",
        "version": "1",
        "description": "Why?",
        "highlights":[
          "After saying “no” to the first question, the player justifies why he thinks Tom would accept without complaining."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "106",
          "triggerDecision": 2
        },
        "possibleChoices":["Because he likes to complain", "He know it isn’t his fault", "He does not like to be criticize in public"]
      },
	  {
        "eventCode": "109",
        "chapterCode": "9663",
        "gameCode": "1",
        "version": "1",
        "description": "How would Rob answer to Martin?",
        "highlights":[
          "The player plays the role of Rob, as he has to deal with different social situations acting as he thinks Rob would act. The first decision is related with Martin, surprisingly appearing behind the player. The decision involves how the character greets someone."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Hi Martin! How are you?", "H-hi Martin…", "I would not answer", "Wow, you stink!"],
		"correctChoice": 4,
		"evaluation": {"type": "social_skills", "measure": "post_1"}
      },
	  {
        "eventCode": "110",
        "chapterCode": "9663",
        "gameCode": "1",
        "version": "1",
        "description": "How would Rob answer to Lori?",
        "highlights":[
          "The player plays the role of Rob, as he has to deal with different social situations acting as he thinks Rob would act. The second decision is related with Lori, who asks the player about his opinion of Antonio’s clothes. The decision involves how the character praise someone."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Well…I… think…. It… suits you", "It looks great!", "You look like a mummy!"],
		"correctChoice": 3,
		"evaluation": {"type": "social_skills","measure": "post_1"}
      },
	  {
        "eventCode": "111",
        "chapterCode": "9663",
        "gameCode": "1",
        "version": "1",
        "description": "How would Rob ask Rebeca to let him pass?",
        "highlights":[
          "The player plays the role of Rob, as he has to deal with different social situations acting as he thinks Rob would act. The third decision is related with Rebeca, who is blocking the way. The decision involves how the character asks things."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Hi… eh.. could I… pass?", "Hi Rebeca! Could you please let me pass?", "Move away, you idiot!"],
		"correctChoice": 3,
		"evaluation": {"type": "social_skills", "measure": "post_1"}
      },
	  {
        "eventCode": "112",
        "chapterCode": "9663",
        "gameCode": "1",
        "version": "1",
        "description": "How would Rob answer Kong and Lori insults?",
        "highlights":[
          "The player plays the role of Rob, as he has to deal with different social situations acting as he thinks Rob would act. The forth decision is related with Lori and Kong, who are messing with him. The decision involves how the character deals with a problem."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Well… I… don’t want to… have a problem with you", "Let me alone. Don’t you have anything better to do?", "You look like a whole circus, Kong", "Don’t say nothing and leave"],
		"correctChoice": 3,
		"evaluation": {"type": "social_skills", "measure": "post_1"}
      },
	  {
        "eventCode": "113",
        "chapterCode": "9663",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think Rob would accept the critic without complaining?",
        "highlights":[
          "The player plays the role of Rob, as he has to deal with different social situations acting as he thinks Rob would act. The fifth decision is related with the teacher, who unfairly accuses Rob of being late. The decision involves how the character deals with criticism."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "No"],
		"correctChoice": 2,
		"evaluation": {"type": "social_skills", "measure": "post_1"}
      },
	  {
        "eventCode": "114",
        "chapterCode": "9663",
        "gameCode": "1",
        "version": "1",
        "description": "Why",
        "highlights":[
          "After saying “yes” to the first question, the player justifies why he thinks Rob would accept without complaining."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "113",
          "triggerDecision": 1
        },
        "possibleChoices":["He does not care", "He is too shy?", "He thinks he is right"]
      },
	  {
        "eventCode": "115",
        "chapterCode": "9663",
        "gameCode": "1",
        "version": "1",
        "description": "Why",
        "highlights":[
          "After saying “no” to the first question, the player justifies why he thinks Rob would accept without complaining."
        ],
        "type":"multiple-choice",
        "parentDecision": {
          "parentEvent": "113",
          "triggerDecision": 2
        },
        "possibleChoices":["Because he likes to complain", "He know it isn’t his fault", "He does not like to be criticize in public"],
		"correctChoice": [1, 3],
		"evaluation": {"type": "social_skills", "measure": "post_1"}
      },
	  {
        "eventCode": "116",
        "chapterCode": "3558",
        "gameCode": "1",
        "version": "1",
        "description": "Which job has Ahmed’s mother?",
        "highlights":[
          "While waiting for Mike, Rebeca asks the main character about Ahmed’s mother."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["She is engineer, but works as backer", "Baker, but she works as engineer", "His mother died", "I don’t remember"],
		"correctChoice": 1,
		"evaluation": {"type": "active_listening", "measure": "post_3"}
      },
	  {
        "eventCode": "117",
        "chapterCode": "3558",
        "gameCode": "1",
        "version": "1",
        "description": "How will you greet Ahmed?",
        "highlights":[
          "Once arrived to Ahmed’s house, the main character decides how to greet him."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Salam Alaikum, Ahmed!", "Good morning, Ahmed!"],
		"correctChoice": 1,
		"evaluation": {"type": "general_behaviour"}
      },
	  {
        "eventCode": "118",
        "chapterCode": "3558",
        "gameCode": "1",
        "version": "1",
        "description": "What is exactly the pillar of fasting?",
        "highlights":[
          "When remembering his past, Ahmed talks about the Mosque and how did he learnt there about the Islam principles. The imam asks him about the pillar of fasting."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["The fasting during Saturday night", "The fasting during the Ramadan", "The fasting during all mornings of the year"],
		"correctChoice": 2,
		"evaluation": {"type": "culture", "measure": "pre"}
      },
	   {
        "eventCode": "119",
        "chapterCode": "3558",
        "gameCode": "1",
        "version": "1",
        "description": "What is the “Mecca”?",
        "highlights":[
          "When remembering his past, Ahmed talks about the Mosque and how did he learnt there about the Islam principles. Second, the imam asks him about the Mecca."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["The sacred city for Islam", "The most important prophet", "The name of the mandatory payment"],
		"correctChoice": 1,
		"evaluation": {"type": "culture", "measure": "pre"}
      },
	  {
        "eventCode": "120",
        "chapterCode": "3558",
        "gameCode": "1",
        "version": "1",
        "description": "How many times shall a Muslim pray per day?",
        "highlights":[
          "When remembering his past, Ahmed talks about the Mosque and how did he learnt there about the Islam principles. Third, the imam asks Ahmed how many times shall he pray per day."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["One", "Three", "Five", "No one"],
		"correctChoice": 3,
		"evaluation": {"type": "culture", "measure": "pre"}
      },
	  {
        "eventCode": "121",
        "chapterCode": "3558",
        "gameCode": "1",
        "version": "1",
        "description": "Which is a holy book for Muslims?",
        "highlights":[
          "When remembering his past, Ahmed talks about the Mosque and how did he learnt there about the Islam principles. Finally, the imam asks Ahmed about the Quran."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["The bible", "The Torah", "The Quran"],
		"correctChoice": 3,
		"evaluation": {"type": "culture", "measure": "pre"}
      },
	  {
        "eventCode": "122",
        "chapterCode": "8851",
        "gameCode": "1",
        "version": "1",
        "description": "Why do you think Mike apologizes?",
        "highlights":[
          "After listening to Ahmed’s story, Mike apologizes to Ahmed. This is the reason that the player uses to justify it."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Because of your past behavior with Ahmed", "Because he is sorry about what happened to his city", "Because you don’t have more baklavas", "I don’t know"],
		"correctChoice": 1,
		"evaluation": {"type": "general_behaviour"}
      },
	  {
        "eventCode": "123",
        "chapterCode": "8851",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think Ahmed is?",
        "highlights":[
          "The player has to define the interpersonal style of Ahmed."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Aggressive", "Shy", "Assertive"],
		"correctChoice": 2,
		"evaluation": {"type": "interpersonal_style", "measure": "pre"}
      },
	  {
        "eventCode": "124",
        "chapterCode": "8851",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think Mike is?",
        "highlights":[
          "The player has to define the interpersonal style of Mike."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Aggressive", "Shy", "Assertive"],
		"correctChoice": 1,
		"evaluation": {"type": "interpersonal_style", "measure": "pre"}
      },
	  {
        "eventCode": "125",
        "chapterCode": "8851",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think Rebeca is?",
        "highlights":[
          "The player has to define the interpersonal style of Rebeca."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Aggressive", "Shy", "Assertive"],
		"correctChoice": 3,
		"evaluation": {"type": "interpersonal_style", "measure": "pre"}
      },
	  {
        "eventCode": "126",
        "chapterCode": "8851",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think the main character is?",
        "highlights":[
          "The player has to define the interpersonal style of the main character."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Aggressive", "Shy", "Assertive"]
      },
	  {
        "eventCode": "127",
        "chapterCode": "2580",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think this type of person was?",
        "highlights":[
          "The player has to define the interpersonal style of the first person that denies their solicitude."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Aggressive", "Assertive", "Shy"],
		"correctChoice": 1,
		"evaluation": {"type": "interpersonal_style", "measure": "post_1"}
      },
	  {
        "eventCode": "128",
        "chapterCode": "2580",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think this type of person was?",
        "highlights":[
          "The player has to define the interpersonal style of the second person that denies their solicitude."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Aggressive", "Assertive", "Shy"],
		"correctChoice": 3,
		"evaluation": {"type": "interpersonal_style", "measure": "post_1"}
      },
	  {
        "eventCode": "129",
        "chapterCode": "2580",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think this type of person was?",
        "highlights":[
          "The player has to define the interpersonal style of the third person that denies their solicitude."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Aggressive", "Assertive", "Shy"],
		"correctChoice": 2,
		"evaluation": {"type": "interpersonal_style", "measure": "post_1"}
      },
	  {
        "eventCode": "130",
        "chapterCode": "7549",
        "gameCode": "1",
        "version": "1",
        "description": "What do you think the main character thinks?",
        "highlights":[
          "After hearing the exposition of the team, the teacher asks them questions about the story to find out if they truly paid attention to the whole content. The main character begins to feel nervous."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["I’m getting so nervous…", "Come on, it can be that bad", "I’ Come on, it can be that bad me really anxious when I have to speak in public" ],
		"correctChoice": 2,
		"evaluation": {"type": "self_instructions", "measure": "pre"}
      },
	   {
        "eventCode": "131",
        "chapterCode": "7549",
        "gameCode": "1",
        "version": "1",
        "description": "How is named the place where Ahmed went to pray on his town?",
        "highlights":[
          "After hearing the exposition of the team, the teacher asks them questions about the story to find out if they truly paid attention to the whole content. The first question is about the Mosque."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Church", "School", "Mosque", "Temple" ],
		"correctChoice": 3,
		"evaluation": {"type": "culture", "measure": "post_1"}
      },
	  {
        "eventCode": "132",
        "chapterCode": "7549",
        "gameCode": "1",
        "version": "1",
        "description": "How many rules has Ahmed’s religion?",
        "highlights":[
          "After hearing the exposition of the team, the teacher asks them questions about the story to find out if they truly paid attention to the whole content. The second question is related with the pillars of Islam."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["One", "Three", "Five", "Seven" ],
		"correctChoice": 3,
		"evaluation": {"type": "culture", "measure": "post_1"}
      },
	  {
        "eventCode": "133",
        "chapterCode": "7549",
        "gameCode": "1",
        "version": "1",
        "description": "Can you tell me a typical dish from Ahmed’s land?",
        "highlights":[
          "After hearing the exposition of the team, the teacher asks them questions about the story to find out if they truly paid attention to the whole content. Last question regards a typical food from Ahmed’s land."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Baklavas", "Kebab", "Humus", "Market fruit" ],
		"correctChoice": 1,
		"evaluation": {"type": "culture", "measure": "post_1"}
      },
      {
        "eventCode": "134",
        "chapterCode": "7549",
        "gameCode": "1",
        "version": "1",
        "description": "How many questions has the player answered correctly?",
        "highlights":[
          "Summary of correct answers during the questions to the team."
        ],
        "type":"timed",
        "parentDecision": null,
        "possibleChoices":[0, 3]
      },
		{
        "eventCode": "135",
        "chapterCode": "7549",
        "gameCode": "1",
        "version": "1",
        "description": "What do you think Ahmed was feeling?",
        "highlights":[
          "After telling Ahmed that Rob has proposed you to come back to the group, he leaves the room. The main character must identify his face to understand what he feels."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Happy", "Normal", "Sad", "Angry"],
		"correctChoice": 3,
		"evaluation": {"type": "emotion_identification", "measure": "post_3"}
      },
	   {
        "eventCode": "136",
        "chapterCode": "7549",
        "gameCode": "1",
        "version": "1",
        "description": "How do you feel about this problem?",
        "highlights":[
          "After identifying the problem, the main character express how he feels about it."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["It pisses me that he behaves like that, after all this time", "I think I understand how he feels", "He could be happy for me, instead of only thinking about himself"],
		"correctChoice": 2,
		"evaluation": {"type": "self_instructions", "measure": "pre"}
      },
	   {
        "eventCode": "137",
        "chapterCode": "7549",
        "gameCode": "1",
        "version": "1",
        "description": "What are you going to do now?",
        "highlights":[
          "After identifying the problem, the main character shall decide what to do next."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["I will look for him", "I will wait for him", "I’m tired of this…"],
		"correctChoice": 1,
		"evaluation": {"type": "self_instructions", "measure": "pre"}
      },
	  {
        "eventCode": "138",
        "chapterCode": "7549",
        "gameCode": "1",
        "version": "1",
        "description": "What should you do?",
        "highlights":[
          "Ahmed tries to stop the conversation about the problem. The main character must decide if he wants to show interest on the conversation."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Let him talk. It matters", "Stop the conversation. It doesn’t matter"],
		"correctChoice": 1,
		"evaluation": {"type": "self_instructions", "measure": "pre"}
      },
	  {
        "eventCode": "139",
        "chapterCode": "7549",
        "gameCode": "1",
        "version": "1",
        "description": "What should you tell her?",
        "highlights":[
          "Once he arrives home, the main character looks for Kami. However, your mother interrupts you."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["I’m in a hurry, I can’t talk now! Sorry!", "I didn’t do it!", "Yes… continue"]
      },
	   	  {
        "eventCode": "140",
        "chapterCode": "2656",
        "gameCode": "1",
        "version": "1",
        "description": "What should you tell yourself?",
        "highlights":[
          "The chapter begins with Kami asking you what should you tell yourself to escape from a toxic thinking."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Everything is over", "I messed it up", "I can change it"],
		"correctChoice": 3,
		"evaluation": {"type": "self_instructions", "measure": "post_1"}
      },
	  {
        "eventCode": "141",
        "chapterCode": "2656",
        "gameCode": "1",
        "version": "1",
        "description": "What kind of sentence would you need?",
        "highlights":[
          "The chapter begins with Kami asking which kind of sentence would you need to escape from a toxic thinking."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Action", "Reflection", "Value"],
		"correctChoice": 3,
		"evaluation": {"type": "self_instructions", "measure": "post_1"}
      },
	  {
        "eventCode": "142",
        "chapterCode": "2656",
        "gameCode": "1",
        "version": "1",
        "description": "What should you have told yourself?",
        "highlights":[
          "The second question asked by Kami is related with which sentence would have been useful to avoid a problem with Ahmed."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["He is trying to piss me off", "He is feeling bad", "Why should I accept that he treats me like that?"],
		"correctChoice": 2,
		"evaluation": {"type": "self_instructions", "measure": "post_1"}
      },
	  {
        "eventCode": "143",
        "chapterCode": "2656",
        "gameCode": "1",
        "version": "1",
        "description": "What kind of sentence would you need?",
        "highlights":[
          "The second question asked by Kami is related with which type of self-instruction would have been useful to avoid a problem with Ahmed."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Action", "Value", "Sympathy"],
		"correctChoice": 3,
		"evaluation": {"type": "self_instructions", "measure": "post_1"}
      },
	   {
        "eventCode": "144",
        "chapterCode": "2656",
        "gameCode": "1",
        "version": "1",
        "description": "What should you have told yourself?",
        "highlights":[
          "The third question asked by Kami is related with which sentence would have been useful to avoid getting nervous on classroom."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["I’m very nervous", "For god’s sake, calm down", "I should use a relaxation technique"],
		"correctChoice": 3,
		"evaluation": {"type": "self_instructions", "measure": "post_1"}
      },
	  {
        "eventCode": "145",
        "chapterCode": "2656",
        "gameCode": "1",
        "version": "1",
        "description": "What kind of sentence would you need?",
        "highlights":[
          "The third question asked by Kami is related with which type of self-instruction would have been useful to avoid getting nervous on classroom."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Control", "Sympathy", "Value"],
		"correctChoice": 1,
		"evaluation": {"type": "self_instructions", "measure": "post_1"}
      },
	  {
        "eventCode": "146",
        "chapterCode": "2656",
        "gameCode": "1",
        "version": "1",
        "description": "What could Ahmed being thinking?",
        "highlights":[
          "The forth question asked by Kami is related with which sentence would Ahmed being thinking about his problems on the lake."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["He thought he couldn’t achieve it", "He thought everything was going to be alright", "He thought he could resolve it himself"],
		"correctChoice": 1,
		"evaluation": {"type": "self_instructions", "measure": "post_1"}
      },
	  {
        "eventCode": "147",
        "chapterCode": "2656",
        "gameCode": "1",
        "version": "1",
        "description": "What kind of sentence would you need?",
        "highlights":[
          "The forth question asked by Kami is related with which type of self-instruction would have been useful to convince Ahmed about confronting his problems."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Control", "Sympathy", "Value"],
		"correctChoice": 2,
		"evaluation": {"type": "self_instructions", "measure": "post_1"}
      },
	  {
        "eventCode": "148",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "What concepts underly the behavior pyramid?",
        "highlights":[
          "The player is asked about the concepts underlying the behavior pyramid."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Emotion, thinking and behavior", "Emotion and thinking", "Relaxation, breathing and visualization"],
		"correctChoice": 1,
		"evaluation": {"type": "emotion_identification", "measure": "post_4"}
      },
	  {
        "eventCode": "149",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "What did your mother notice to know you were nervous?",
        "highlights":[
          "The player is asked about how his mother knew he was upset."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["My acting", "My feelings", "My thoughts"],
		"correctChoice": 1,
		"evaluation": {"type": "emotion_identification", "measure": "post_4"}
      },
	 {
        "eventCode": "150",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think Mike is feeling?",
        "highlights":[
          "The player is asked about how he thinks Mike is feeling."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Happy", "Angry", "Sad", "Scared"],
		"correctChoice": 3,
		"evaluation": {"type": "emotion_identification", "measure": "post_4"}
      },
	   {
        "eventCode": "151",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "How do you think Rebeca is feeling?",
        "highlights":[
          "The player is asked about how he thinks Rebeca is feeling."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Happy", "Angry", "Sad", "Scared"],
		"correctChoice": 2,
		"evaluation": {"type": "emotion_identification", "measure": "post_4"}
      },
	   {
        "eventCode": "152",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "How do you feel after talking with your friends?",
        "highlights":[
          "The player is asked what is he feeling after talking with his friends."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Happy", "Angry", "Sad", "Scared"],
		"correctChoice": 1,
		"evaluation": {"type": "emotion_identification", "measure": "post_4"}
      },
      {
        "eventCode": "153",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "Breathing summary event",
        "highlights":[
          "Summary of wrong jumps."
        ],
        "type":"timed",
        "parentDecision": null,
        "possibleChoices":[0, 100],
		"evaluation": {"type": "breathing", "measure": "post_6"}
      },
	  {
        "eventCode": "154",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "What should you relax first?",
        "highlights":[
          "The player is asked what should he relax first, before meeting Ahmed."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Arms", "Head", "Shoulders"],
		"correctChoice": 1,
		"evaluation": {"type": "relaxation", "measure": "post_2"}
      },
	  {
        "eventCode": "155",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "What should you relax second?",
        "highlights":[
          "The player is asked what should he relax second, before meeting Ahmed."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Arms", "Head", "Shoulders"],
		"correctChoice": 2,
		"evaluation": {"type": "relaxation", "measure": "post_2"}
      },
	  {
        "eventCode": "156",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "What should you relax finally?",
        "highlights":[
          "The player is asked what should he relax finally, before meeting Ahmed."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Arms", "Head", "Shoulders"],
		"correctChoice": 3,
		"evaluation": {"type": "relaxation", "measure": "post_2"}
      },
	  {
        "eventCode": "157",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "Which technique should Ahmed use?",
        "highlights":[
          "The player suggests Ahmed to use a relaxing technique. Which one?"
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Relaxation", "Breathing", "Visualization"]
      },
	  {
        "eventCode": "158",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "Why was Ahmed angry?",
        "highlights":[
          "The player shall answer why he thinks Ahmed was angry."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["He thought you were going to leave him alone", "He knew you were going to punch him", "Because you keep talking with Rob"],
		"correctChoice": 1,
		"evaluation": {"type": "active_listening", "measure": "post_2"}
      },
	  {
        "eventCode": "159",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "Who did Ahmed talked to?",
        "highlights":[
          "The player shall answer who did Ahmed talked to about this problem."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Mike", "Rebeca", "Both of them"],
		"correctChoice": 3,
		"evaluation": {"type": "active_listening", "measure": "post_2"}
      },
	  {
        "eventCode": "160",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "What was Rob’s intention?",
        "highlights":[
          "The player doubts about Rob’s reason to ask him to get back to his group."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["To apologize", "To have a good relationship with Ahmed", "To confront the main character and Ahmed"],
		"correctChoice": [1, 2],
		"evaluation": {"type": "Rob_group"}
      },
	    {
        "eventCode": "161",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think Mike’s idea is correct?",
        "highlights":[
          "The player doubts about how to confront Rob. Mike gives his opinion."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "Too aggressive", "Too shy"],
		"correctChoice": 2,
		"evaluation": {"type": "social_skills", "measure": "post_2"}
      },
	  {
        "eventCode": "162",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think Ahmed’s idea is correct?",
        "highlights":[
          "The player doubts about how to confront Rob. Ahmed gives his opinion."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "Too aggressive", "Too shy"],
		"correctChoice": 3,
		"evaluation": {"type": "social_skills", "measure": "post_2"}
      },
	  {
        "eventCode": "163",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think Rebeca’s idea is correct?",
        "highlights":[
          "The player doubts about how to confront Rob. Rebeca gives his opinion."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Yes", "Too aggressive", "Too shy"],
		"correctChoice": 1,
		"evaluation": {"type": "social_skills", "measure": "post_2"}
      },
	  {
        "eventCode": "164",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think Rob is assertive, shy or aggressive?",
        "highlights":[
          "The player is asked to identify the social style of a person."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Assertive", "Shy", "Aggressive"],
		"correctChoice": 3,
		"evaluation": {"type": "interpersonal_style", "measure": "post_2"}
      },
	  {
        "eventCode": "165",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think Elle is assertive, shy or aggressive?",
        "highlights":[
          "The player is asked to identify the social style of a person."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Assertive", "Shy", "Aggressive"],
		"correctChoice": 3,
		"evaluation": {"type": "interpersonal_style", "measure": "post_2"}
      },
	  {
        "eventCode": "166",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "Do you think Kong is assertive, shy or aggressive?",
        "highlights":[
          "The player is asked to identify the social style of a person."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Assertive", "Shy", "Aggressive"],
		"correctChoice": 3,
		"evaluation": {"type": "interpersonal_style", "measure": "post_2"}
      },
	   {
        "eventCode": "167",
        "chapterCode": "4799",
        "gameCode": "1",
        "version": "1",
        "description": "What shall you do?",
        "highlights":[
          "The main character must decide what to do. If he/she goes back with Rob, stays with the new group, or stays with both of them."
        ],
        "type":"multiple-choice",
        "parentDecision": null,
        "possibleChoices":["Go back with Rob", "Stay with Ahmed", "Stay with both of them"]
      },
      {
        "eventCode": "168",
        "chapterCode": "5578",
        "gameCode": "1",
        "version": "1",
        "description": "First breathing game, on which the player must move the character according to the breathing rhythm. If he moves it too early, the character goes back, and it is count as 1 fail (this variable += 1)",
        "highlights":[
          "The less this value scores, the better the player performed"
        ],
        "type":"timed",
        "parentDecision": null,
        "possibleChoices":[0, 100],
		"evaluation": {"type": "breathing", "measure": "pre"}
      },
      {
        "eventCode": "169",
        "chapterCode": "6968",
        "gameCode": "1",
        "version": "1",
        "description": "During his nightmare, Ahmed needs to use his breath to control his movements, in order to be silent enough to stay hide. If he moves it too early, the character goes back, and it is count as 1 fail (this variable += 1)",
        "highlights":[
          "The less this value scores, the better the player performed."
        ],
        "type":"timed",
        "parentDecision": null,
        "possibleChoices":[0, 100],
		"evaluation": {"type": "breathing", "measure": "post_1"}
      },
      {
        "eventCode": "170",
        "chapterCode": "7511",
        "gameCode": "1",
        "version": "1",
        "description": "The main character explains Ahmed how to control his breath, using a boat moving as an example. If he moves it too early, the character goes back, and it is count as 1 fail (this variable += 1)",
        "highlights":[
          "The less this value scores, the better the player performed."
        ],
        "type":"timed",
        "parentDecision": null,
        "possibleChoices":[0, 100],
		"evaluation": {"type": "breathing", "measure": "post_2"}
      },
      {
        "eventCode": "171",
        "chapterCode": "9322",
        "gameCode": "1",
        "version": "1",
        "description": "The main character plays on which he has to inflate a balloon until it reaches the sky. If he breathes too early, the balloon goes back, and it is count as 1 fail (this variable += 1)",
        "highlights":[
          "The less this value scores, the better the player performed."
        ],
        "type":"timed",
        "parentDecision": null,
        "possibleChoices":[0, 100],
		"evaluation": {"type": "breathing", "measure": "post_3"}
      },
      {
        "eventCode": "172",
        "chapterCode": "1228",
        "gameCode": "1",
        "version": "1",
        "description": "During the second nightmare, Ahmed needs to use his breath to control his movements, in order to be silent enough to stay hide. If he moves it too early, the character goes back, and it is count as 1 fail (this variable += 1)",
        "highlights":[
          "The less this value scores, the better the player performed."
        ],
        "type":"timed",
        "parentDecision": null,
        "possibleChoices":[0, 100],
		"evaluation": {"type": "breathing", "measure": "post_4"}
      }
]);

db.students.insertOne({ 
    "studentCode" : "student", 
    "groupCode" : "group_1", 
    "sex" : "male", 
    "age" : 15.0
});

db.groups.insertOne({ 
    "groupCode" : "group_1", 
    "country" : "Spain", 
    "city" : "Madrid", 
    "type" : "release", 
    "description" : "debug group"
});

db.credentials.insertOne({ 
    "username" : "admin", 
    "password" : "youngres", 
    "role" : "admin", 
    "groups" : [
        "group_1"
    ], 
    "filters" : [
        "g_country", 
        "g_city", 
        "s_sex", 
        "s_age", 
        "s_code"
    ]
});

db.filters.insertMany([
  { 
    "filterCode" : "g_country", 
    "table" : "groups", 
    "field" : "country", 
    "type" : "textual"
  },
  { 
    "filterCode" : "g_city", 
    "table" : "groups", 
    "field" : "city", 
    "type" : "textual"
  },
  { 
    "filterCode" : "s_sex", 
    "table" : "students", 
    "field" : "sex", 
    "type" : "textual"
  },
  { 
    "filterCode" : "s_age", 
    "table" : "students", 
    "field" : "age", 
    "type" : "numeric"
  },
  { 
    "filterCode" : "s_code", 
    "table" : "students", 
    "field" : "studentCode", 
    "type" : "textual"
  }
]);
