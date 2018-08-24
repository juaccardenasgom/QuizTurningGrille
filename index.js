var img,im1,im2,im3,logo;
var currentStage = "intro",count = 0;
var stagesNames = [];
var stagesBools = [];
var number1=0,number2=0;
var enterPressed  = false;
var terminalX=50,terminalY=50,padding=50;
var currentInput = 0,currentDecision = 0;
var terminalInput = ["El material que va a ver a continuación puede ser traumático para algunas personas. Favor tener discreción.",
              "En este juego usted será la doctora a cargo de salvar el mundo.",
              "(Agente P) Buenos días, doctora.",
              "(Agente P) Nos alegra contar con su presencia el día de hoy.",
              "(Agente P) Como ya debe ser de su conocimiento, hace algunos meses el gobierno ha trabajado en una nueva tecnología dental con el fin de evitar que capturen a los espías colombianos y logren sacar información preciada de la nación.",
              "(Agente P) El dispositivo es colocado en los dientes del espía y consta de un agente explosivo que no solo causa muerte instantánea en el portador sino también logra un daño en un rango de 500 metros a la redonda.",
              "(Agente P) Sin embargo, algo salió mal con el experimento, los primeros agentes en ser intervenidos han presentado síntomas de perdida de conocimiento, ataques violentos contra sus compañeros y canibalismo.",
              "(Agente P) Es importante que retire los dispositivos y realice un tratamiento endodóntico para no dejar ningún rastro del material en los espías...",
              "(Agente P) Usted hará parte de un grupo de trabajo especializado. Por ahora su misión, si decide aceptarla, es hacer la apertura y localización de conductos.",
              "(Agente P) ¿Qué opina doctora?",
              "(Agente P) Pero recuerde, cualquier error en el tratamiento puede llevar a la muerte de su paciente y por consiguiente a la suya...",
              "CASO #1",
              "Se presenta en el consultorio una mujer joven de 20 años a la que se le implantó el dispositivo en un 26.",
              "La cavidad de acceso debe tener una forma:",
              "¿Que N° de fresa debería utilizar al momento de abrir la cámara pulpar del 16?",
              "La dirección en la que va dirigida la fresa no puede ser:",
              "(Agente P) Muy bien doctora, ha superado su primer caso.",
              "(Agente P) Por el momento, la seguimos necesitando así que no necesita temer por su vida.",
              "(Agente P) ¿Quiere continuar con el siguiente caso?",
              "CASO #2",
              "Se presenta al consultorio un agente de 24 años que no recuerda muy bien si ya le colocaron el dispositivo o solo le hicieron una resina en un 14.",
              "Según sus conocimientos, ¿cuál es el paso a seguir?",
              "En la radiografía encuentras que efectivamente el paciente  tiene el dispositivo.",
              "¿Comó se debe realizar la apertura?",
              "(Agente P) Haz realizado de manera correcta la apertura del diente ahora necesitas utilizar la fresa redonda a baja velocidad para extender la cavidad en sentido…",
              "(Agente P) Muy bien doctora, continuemos…",
              "CASO #3",
              "Se presenta en el consultorio un paciente con un dispositivo defectuoso y explotó sin ser activado.",
              "Sin embargo, no tenía la cantidad necesaria de detonate, así que dejó apenas una cavidad en el diente 43.",
              "Con esta destrucción coronal, ¿Qué referencias anatómicas se pueden tener en cuenta?",
              "[3 semanas despúes] Luego de haber desintalado otros 20 dispositivos",
              "(Agente P) La felicito doctora por haber hecho tan buena labor, ahora que ha desinstalado gran parte de los dispositivos la Dirección De Inteligencia Nacional, puede continuar con sus labores",
              "Te dan una medalla por tu gran labor…",
              "Pero no puedes compartirlo con nadie por qué es un asunto confidencial",
              "Según el gobierno esto nunca pasó",
              "Continuará...",
              ""
            ];
var decisionInput = ["(Agente P) ¿Qué opina doctora?",
                    "La cavidad de acceso debe tener una forma:",
                    "¿Que N° de fresa debería utilizar al momento de abrir la cámara pulpar del 16?",
                    "La dirección en la que va dirigida la fresa no puede ser:",
                    "(Agente P) ¿Quiere continuar con el siguiente caso?",
                    "Según sus conocimientos, ¿cuál es el paso a seguir?",
                    "¿Comó se debe realizar la apertura?",
                    "(Agente P) Haz realizado de manera correcta la apertura del diente ahora necesitas utilizar la fresa redonda a baja velocidad para extender la cavidad en sentido…",
                    "Con esta destrucción coronal, ¿Qué referencias anatómicas se pueden tener en cuenta?",



                    ""];
var gameOverInput = ["Lo hiciste mal","Pero terriblemente mal","Jorribol","@"];
var gameOverAlternatives = [["Lo hiciste mal","Pero terriblemente mal","Jorribol","@"],
                            ["No puede abandonarnos en este momento, tiene mucha información.","@"],
                            ["(Agente P) Noooo! el paciente no tenía el dispositivo.","El paciente comienza a sangrar de forma exagerada, descubres que tenía la pulpa viva", "El paciente estaba anticoagulado","No puedes parar la hemorragia","El paciente muere desangrado","@"],
                            ["(Agente P) Eres una inútil.", "El gobierno no tiene compasión de ti y decide encerrarte en una celda de máxima seguridad por traición.","@"],
                            ["(Agente P) Haz hecho mal la apertura , por lo tanto no se logran ver los dos conductos radiculares.","(Agente P) Mereces morir. jaja bueno no es para tanto por favor estudia la anatomia y la apertura de premolares","En realidad el Agente P solo estaba intentando ser un buen tipo. Cuando su superior se entera, lo echa de la agencia. Por lo tanto tú que eres su subordinada también quedas sin trabajo.","Ahora el es un indigente y todo es por tu culpa.","@"],
                            ["Ohh no has extendido la cavidad de forma errónea","Dejaste una zona de la corona muy delgada y se ha fracturado","La intervención se complicó y el paciente no dejó que siguieras trabajando en él.","Tus superiores están muy decepcionados y creen que ya no mereces hacer parte del equipo.","@"]
                          ];
var gameOverTextAlternative = 0;
var decisiones = [["Acepto","No, mejor no."],
                  ["Triangular","Cuadrada","Romboidal"],
                  ["2","3","4"],
                  ["Palatino", "Distovestibular", "Mesiovestibular"],
                  ["¡No! ¿Ya me puedo ir?.","Claro… Me gusta la adrenalina.","Pues sí."],
                  ["Realizar una apertura inicial en la fosa central.","Tomar una radiografía periapical del 14","No lo sé... No soy científica."],
                  ["Vestibulolingual","Mesiodistal","Distovestibular"],
                  ["Margen gingival y la unión amelocementaria","Conductos radiculares.","No lo sé."]
                ];

var correctas = [["Acepto"],
                ["Romboidal"],
                ["3"],
                ["Distovestibular"],
                ["Pues sí.","Claro… Me gusta la adrenalina."],
                ["Tomar una radiografía periapical del 14"],
                ["Vestibulolingual"],
                ["Margen gingival y la unión amelocementaria"]
              ];

var textCounter = 0;
var test = false;
const INIT_TIME = Date.now()
var youGood = false;
var currentPregunta = 0;
var once=false,once2=false;
var elegida = "";
var gameOverMessage = "";


//PRELOAD
function preload(){
  img = loadImage("Zombie_Jake.png");
  im1 = loadImage("1.png");
  im2 = loadImage("2.png");
  im3 = loadImage("3.png");
  logo = loadImage("logo.png");

}

//SETUP
function setup() {
  stagesNames.push("intro");
  stagesNames.push("terminal1");
  stagesNames.push("decision1");
  stagesNames.push("gameOver")


  for (var i = 0; i < stagesNames.length; i++) {
    stagesBools.push(false);
  }

  stagesBools[0]=true;

  console.log(stagesNames,stagesBools);
  createCanvas(windowWidth, windowHeight-5);
}

//DRAW
function draw() {
  // console.log((Date.now()-INIT_TIME)/1000);
  showScreen();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight-5);
}


//SHOW FUNCTIONS
function showScreen(){
  if(currentInput >= 31){
    youGood = true;
  }

  switch (terminalInput[currentInput]) {
    case "(Agente P) ¿Quiere continuar con el siguiente caso?":
      gameOverTextAlternative = 1;
      break;
    case "Según sus conocimientos, ¿cuál es el paso a seguir?":
      if(elegida == "Realizar una apertura inicial en la fosa central."){
        gameOverTextAlternative = 2;
      }else{
        gameOverTextAlternative = 3;
      }
      break;
    case "¿Comó se debe realizar la apertura?":
      gameOverTextAlternative = 4;
      break;
    case "(Agente P) Haz realizado de manera correcta la apertura del diente ahora necesitas utilizar la fresa redonda a baja velocidad para extender la cavidad en sentido…":
      gameOverTextAlternative = 5;
      break;
    default:
      //NOTHING

  }

  switch (currentStage) {
    case "intro":
      showIntro();
      break;
    case "terminal":
      if(decisionInput.indexOf(terminalInput[currentInput]) != -1 && currentStage != "decision"){

        if (terminalInput[currentInput] != "¿Comó se debe realizar la apertura?"){
          currentStage = "decision";
        }else{
          currentStage = "decisionImagen";
        }
      }else {
        showTerminal();
      }
      break;
    case "decision":
      showDecision();
      break;
    case "decisionImagen":
      //DO IMAGE STUFF
      showDecisionImagen();
      break;
    case "gameOver":
      showGameOver();
      break;
    default:

  }
}

//Intro
function showIntro(){
  background("#3A473C");

  push();
    imageMode(CENTER);

    push();
     textSize(100);
     fill("#CFE0C3");
     textAlign(CENTER);
     textFont('IM Fell DW Pica');
     var ss = "ME DUELE UN DIENTE";
     text(ss,windowWidth/2, windowHeight/2 - img.height/5);
    pop();

    if(randomTint()){
      tint(255,0,0);
      image(img,(windowWidth/2)+Math.floor(Math.random()*(30)),(windowHeight/2) + Math.floor(Math.random()*(30)),img.width/5, img.height/5);
      tint(0,255,255);
      image(img,(windowWidth/2)+Math.floor(Math.random()*(30)*(Math.random()-1)),(windowHeight/2) + Math.floor(Math.random()*(30)*(Math.random()-1)),img.width/5, img.height/5);
    }else {
      image(img,windowWidth/2,windowHeight/2,img.width/5, img.height/5);
    }

    push();
     textSize(70);
     fill(255);
     textAlign(CENTER);
     textFont('VT323');
     var s = "Presione ENTER para continuar";
     if(randomType() && count == 5){
       count = 0;
       text(s,windowWidth/2,windowHeight/2+img.height/5);
     }else{
       text("> "+s,windowWidth/2,windowHeight/2+img.height/5);
     }
    pop();
  pop();

  showTooth();

  if (enterPressed) {
    enterPressed=false;
    currentStage = "terminal";
  }
}

//Terminal1
function showTerminal(){
  background(50);

  push();
    fill(0)
    rect(terminalX, terminalY, windowWidth-120, windowHeight-120, 20);
  pop();


  push();
    textSize(60);
    fill("#1EC503");
    textAlign(LEFT);
    textFont('VT323');
    if(randomType() && count == 5){
      count = 0;
      text(storyText() + showPuntero(),terminalX+padding+random(padding),terminalY+padding+10, windowWidth-180, windowHeight-120);
    }else{
      text("> " + storyText() + showPuntero(),terminalX+padding,terminalY+padding+10, windowWidth-180, windowHeight-120);
    }
  pop();


  showTooth();

  //Restablecer onces
  once = false;
  once2 = false;

  if(terminalInput[currentInput]==""){
    currentStage="gameOver";
  }

}

function showDecision(){
  background("#334D4A");

  push();
    fill(0)
    rect(terminalX, terminalY, windowWidth-120, windowHeight-120, 20);
  pop();
  push();
    textSize(60);
    fill("#1EC503");
    textAlign(LEFT);
    textFont('VT323');


    text("> " + storyText(),terminalX+padding,terminalY+padding+10, windowWidth-180, windowHeight-120);


    //DECISIONES
    for(i = 0; i<decisiones[currentDecision].length; i++){

      posX = (terminalX+padding) + (((windowWidth-180)/decisiones[currentDecision].length) * (i));
      posY = terminalY+padding+50 + windowHeight/4;
      widthX = (((windowWidth-180)/decisiones[currentDecision].length));
      heightY = windowHeight - (terminalY+padding+10 + windowHeight/3)

      isOver = mouseX >= posX && mouseX <= posX + widthX;

      if(isOver){
        elegida = decisiones[currentDecision][i];
        fill(255);
      }else{
        fill("#1EC503");
      }

      text("> "+decisiones[currentDecision][i], posX, posY, widthX, heightY )
    }
  pop();

  showTooth();

}

function showDecisionImagen(){
  background("#334D4A");

  push();
    fill(0)
    rect(terminalX, terminalY, windowWidth-120, windowHeight-120, 20);
  pop();
  push();
    textSize(60);
    fill("#1EC503");
    textAlign(LEFT);
    textFont('VT323');


    text("> " + storyText(),terminalX+padding,terminalY+padding+10, windowWidth-180, windowHeight-120);


    //DECISIONES
    for(i = 0; i<3; i++){

      posX = (terminalX+padding) + (((windowWidth-180)/3) * (i))-10;
      posY = terminalY+padding+10 + windowHeight/4 - 50;
      widthX = (((windowWidth-180)/3));
      heightY = windowHeight - (terminalY+padding+10 + windowHeight/3)

      isOver = mouseX >= posX && mouseX <= posX + widthX;

      if(isOver){
        elegida = ""+i;
        tint(200);
      }else{
        noTint();
      }

      if(i == 0){
        image(im1, posX, posY, im1.width*(widthX/im1.width)-10, im1.height*(heightY/im1.height)-10)
      }else if(i == 1){
        image(im2, posX, posY, im1.width*(widthX/im1.width)-10, im1.height*(heightY/im1.height)-10)
      }else{
        image(im3, posX, posY, im1.width*(widthX/im1.width)-10, im1.height*(heightY/im1.height)-10)
      }

    }
  pop();

  showTooth();

}

var gameOverTextCounter = 0;

function showGameOver(){
  if(youGood){
    background("black");
    push();
     textSize(70);
     fill("white");
     textAlign(CENTER);
     textFont('VT323');
     var s = "Buen trabajo, doctora" + showPuntero();
     text(s,windowWidth/2,windowHeight/2);
    pop();
  }else{
    gameOverInput = gameOverAlternatives[gameOverTextAlternative];
    background("black");
    push();
     textSize(100);
     fill("red");
     textAlign(CENTER);
     textFont('VT323');

     var s = "GAME OVER";
     var s2 = gameOverInput[gameOverTextCounter];

     if(s2=="@"){
       s2="";
     }


     if(randomType() && count == 5){
       count = 0;
       text(s,windowWidth/2 + random(100)*(random(2)-1), windowHeight/3 + random(100)*(random(2)-1));
       push();
         textSize(50);
         text(s2,windowWidth/2 + random(100)*(random(2)-1), windowHeight/2 + random(100)*(random(2)-1) + 50, windowWidth/2,windowHeight);
       pop();
     }else{
       text(s,windowWidth/2,windowHeight/3);
       push();
         textSize(50);
         text(s2,windowWidth/4,windowHeight/2, windowWidth/2,windowHeight);
       pop();
     }


     imageMode(CENTER);

     image(logo,windowWidth/2,windowHeight - windowHeight/6 + 80,logo.width/5,logo.height/5);
     push();
     textSize(40);
      fill("white")
      textAlign(CENTER);
       text("@Carolina Cárdenas, Estudiante de Odontología",windowWidth/2, windowHeight-windowHeight/6 );
     pop();

     if(enterPressed && s2!=""){
       enterPressed=false;
       gameOverTextCounter++;
     }

    pop();
  }
}


//OTHER FUNCTIONS
function randomTint(){
  number1 = Math.floor(Math.random() * (20 - 1) + 1);
  return number1 == 5;
}

function randomType(){
  number2 = Math.floor(Math.random() * (20 - 1) + 1);
  if(number2 == 5)count++;
  return number2 == 5;
}

function keyTyped() {
  if (key === 's') {
    console.log("Current Stage: " + currentStage);
  } else if (key === 'i') {
    console.log("Current Input: " + currentInput);
  }
}

function keyPressed() {
  if (keyCode === ENTER && currentStage != "decision") {
    enterPressed = true;
  }
}

function showTooth(){
  push();
    if (mouseIsPressed) {
      fill(random(60,70));
    } else {
      fill(255);
    }
    noStroke();
    ellipse(mouseX-4, mouseY, 20, 20);
    ellipse(mouseX+4, mouseY, 20, 20)
    ellipse(mouseX-6, mouseY+20, 10, 40);
    ellipse(mouseX+6, mouseY+20, 10, 40);
  pop();
}

function storyText(){
  let auxText = terminalInput[currentInput];
  textCounter++;

  if(enterPressed && currentStage != "decision") {
    enterPressed=false;
    textCounter=0;
    currentInput++;
  }

  if(auxText==undefined){
    return "";
  }

  return auxText.substring(0,textCounter);
}

function showPuntero(){
  //console.log(((Date.now()-INIT_TIME)/1000) % 1.2);
  if( ((Date.now()-INIT_TIME)/1000) % 1.5 >= 0.5){
    //INIT_TIME = Date.now();
    return "|";
  }else{
    return "";
  }
}

function runOnce(boolean){
  const pregunta = currentPregunta;
  boolean = true;

  if( correctas[pregunta] == elegida ){
    // console.log("from: "+ terminalInput[currentInput] + " -> " + terminalInput[currentInput+1]);
    currentInput++;
    currentPregunta++;
    currentDecision++;
    // once=false;

  }else{
    console.log("Pregunta #"+pregunta, elegida, correctas[pregunta]);
    currentStage = "gameOver";
  }
}

function mouseClicked() {
  if (currentStage == "decision") {
    const pregunta = currentPregunta;

    if( correctas[pregunta].indexOf(elegida) != -1 ){
      currentStage = "terminal"
      currentInput++;
      currentPregunta++;
      currentDecision++;
    }else{
      console.log("Pregunta MALA. BUENA: "+correctas[pregunta]);
      gameOverInput =
      currentStage = "gameOver";
    }
  }else if (currentStage == "decisionImagen") {
    const pregunta = currentPregunta;

    if( elegida == "0" ){
      currentStage = "terminal"
      currentInput++;
      // currentPregunta++;
      // currentDecision++;
    }else{
      console.log("Pregunta MALA. BUENA: "+0);
      currentStage = "gameOver";
    }
  }
}

// function moveS
