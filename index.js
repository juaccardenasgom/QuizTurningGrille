const N = 4

const questions = [
    {
                 b:"USA",
                 a: "NSA", 
                 c: "CIA", 
                 d: "BMW",  
                 value : true, 
                 r_value: true,
                 done: false, 
                 question : "¿Cuál era el nombre del bote del señor Ellison y Oracle?" ,
                 color: "#540d6e"
    },
    {
                 a: "Organización del trabajo",
                 b: "Coordinación del trabajo, información y conocimiento", 
                 c: "Requerimientos para un producto valioso", 
                 d: "Procedimientos lógicos de transacciones rutinarias",  
                 value : true, 
                 r_value: true,
                 done: false, 
                 question : "¿Cuál NO es una definición de proceso de negocio?" ,
                 color: "#d00000"
    },
    {
                 d: "Un conjunto de procesos de negocio",
                 b: "Un conjunto de funciones", 
                 c: "Un conjunto de productos", 
                 a: "Un conjunto de señores y señoras",  
                 value : true, 
                 r_value: true,
                 done: false, 
                 question : "Con base en la presentación, una empresa puede verse como:" ,
                 color:"#ffba08"
    },
    {
                 a:"Manufactura",
                 b: "Ventas", 
                 d: "Contabilidad", 
                 c: "Recursos Organizacionales",  
                 value : true, 
                 r_value: true,
                 done: false, 
                 question : "Seleccione la opción que no sea un área funcional:" ,
                 color:"#3f88c5"
    },
    {
                 a:"Se enfocan en problemas que son únicos y estáticos",
                 b: "Están dirigidos a gerentes de nivel superior", 
                 d: "Prescinde de los TPS", 
                 c: "Usa información de TPS, MIS y fuentes externas",  
                 value : true, 
                 r_value: true,
                 done: false, 
                 question : "¿Cuál de las siguientes opciones es una carácteristica de los DSS (Sistemas de Soporte de Decisiones)?" ,
                 color:"#ea638c"
    },
    {
                a:"Apple",
                 b: "Intrawest", 
                 d: "Leiner Health Products", 
                 c: "Procter & Gamble",  
                 value : true, 
                 r_value: true,
                 done: false, 
                 question : "¿Qué compañia tiene un ESS que muestra la información en tiempo real?" ,
                 color: "#d84a05"
    },
    {
                 a:"Ambas son falsas.",
                 c: "(I) es falsa y (II) es verdadera.", 
                 b: "(I) es verdadera y (II) es falsa.", 
                 d: "Ambas son verdaderas.",  
                 value : true, 
                 r_value: true,
                 done: false, 
                 question : "(I) Los procesos de negocios abarcan una y solo un área funcional, y (II) Los procesos de negocios son una medida de calidad de las empresas." ,
                 color: "#eca400"
    },
    {
                 a: "Sistema de producción de transacciones",
                 b: "Sistema de planificación de transacciones", 
                 c: "Sistema de transacciones procesales", 
                 d: "Sistema de procesamiento de transacciones",  
                 value : true, 
                 r_value: true,
                 done: false, 
                 question : "Según la exposición: ¿Qué significan las siglas TPS en castellano?" ,
                 color: "#01baef"
    }
]

var s, grid, awidth, awidth, offset, currentQ, currentG, state, fontSize, currentH, rotation, turns;
var angle = 0;

function setup() {

	createCanvas(1440, 1000);
  cursor('grab')


    grid = []
    awidth  =   width < height ? width: height;
    awidth*=0.35 
    offset = width - awidth
    yoffset = offset*0.3;
    
    s = awidth/N;
    currentQ = 0;   
    currentG = 0;
    currentH = 0;
    state = 'start'
    fontSize = 150/N;
    colorMode(HSB);

    for (let i = 0; i < N; i++) {
        grid.push([]);
        for (let j = 0; j < N; j++) {
            console.log ( {a: floor((i + j*N) /2 ) , e: questions[ floor((i + j*N) /2 ) ] })
            grid[i].push( JSON.parse(JSON.stringify(questions[ floor((i + j*N) /2 ) ])));
        }    
    }
    colorMode(RGB); 
    textAlign(CENTER,CENTER);
    textFont('Trebuchet MS');
    textSize(150/N);
    angleMode(DEGREES);
    frameRate(30);

}

var alldone = false;

function quizzGrid(){

    translate(0.5*offset, 0.5*yoffset);
    background(0);
    translate(awidth/2 , awidth/2 )
    noStroke();

    alldone = true;
     let group = 2* floor(( currentQ)/2  ),
        groupX = group % N,
        groupY = floor(group/N);
    

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            fill(grid[i][j].value ? color(255) : color(0)); 
            colorMode(HSB);
            fill(grid[ i ][j].color);
            colorMode(RGB);
            noStroke();
            rect(i*s - awidth/2 - 1, j*s - awidth/2 -1, s + 1, s + 1);  
            
            if (grid[i][j].done ){
                fill(grid[i][j].value ? 255: 0);
                push()
                rectMode(CENTER);
                rect(i*s - awidth/2 + s/2, j*s - awidth/2 + s/2, 0.6*s, 0.6*s, 12);  
                pop();
                
            } else{

                alldone = false;
            }
            fill(0);

            
            
            //text(   2* floor(( i + N* j)/2  )   , s/2 + i*s - awidth/2, s/2 + j*s - awidth/2);   
            
        }
    }


   
    push();
    noFill();
    stroke(0);
    strokeWeight(5);


    pop();

    
    translate(-awidth/2 - 0.5*offset, -awidth/2 - 0.5*yoffset)
    

    
        if(mouseX > 0.5*offset &&
           mouseX <awidth + 0.5*offset &&
           mouseY > 0.5*yoffset &&
            mouseY <awidth + 0.5*yoffset){

            let x = mouseX - (mouseX - 0.5*offset) % s;
            let y = mouseY - (mouseY - 0.5*yoffset) % s;     
            noStroke();
            fill(0, 50);            
            rect(x-1, y-1, s+1,s+1);
        }

    

    var ds = awidth/6;

    
    textSize(24);
    fill(255);
    push();
    text(grid[ groupX ][groupY].question , offset/4, 0, awidth + offset/2, 0.5*yoffset) ;
     colorMode(HSB); 

    fill(grid[ groupX ][groupY].color);
     ellipse(0 , 0, 200,200);
     
     
     fill(0);
      textSize(60);
     text((0.5*group + 1), 0, 0, 100, 100);
     
    textSize(20);
    fill(grid[ groupX ][groupY].color );
    

    rect(0, yoffset*0.75 + awidth, width, height - yoffset - awidth  )
        
    fill(0);
    ellipseMode(CORNER)
    ellipse(awidth/6, yoffset*0.85 + awidth, awidth/4,awidth/4 ) //A-------------

    
    rect(awidth/2 , yoffset*0.85 + awidth , awidth*1.5, awidth/4 , 12 );
    fill(255);
    text(  grid[ currentQ % N ][floor(currentQ/N)].a, awidth/2 , yoffset*0.85 + awidth , awidth*1.5, awidth/4 , 12 );  

fill(0);
    ellipse(awidth/6,   yoffset*1.25 + awidth,   awidth/4,   awidth/4) //B-------------       
    fill(255);
    arc(awidth/6,   yoffset*1.25 + awidth,   awidth/4,   awidth/4  ,-90, 90  ) //B-------------
    fill(0);
    rect(awidth/2 , yoffset*1.25 + awidth , awidth*1.5, awidth/4, 12  );
    fill(255);
    text(  grid[ currentQ % N ][floor(currentQ/N)].b, awidth/2 ,yoffset*1.25 + awidth , awidth*1.5, awidth/4, 12  );


    ellipse(-awidth/6 + width - awidth/4, yoffset*0.85 + awidth, awidth/4,awidth/4 ) //C-------------
    fill(0);
    arc(-awidth/6 + width - awidth/4, yoffset*0.85 + awidth, awidth/4,awidth/4, -90, 90 ) //C-------------

    rect( width - awidth/2 - awidth*1.5, yoffset*0.85 + awidth , awidth*1.5, awidth/4, 12 );
    fill(255);
    text(  grid[ currentQ % N ][floor(currentQ/N)].c ,  width - awidth/2 - awidth*1.5, yoffset*0.85 + awidth , awidth*1.5, awidth/4, 12 ); 


    fill(255);
    ellipse(-awidth/6 + width - awidth/4, yoffset*1.25 + awidth, awidth/4,awidth/4) //D-------------


    fill(0);
    rect( width - awidth/2 -awidth*1.5, yoffset*1.25 + awidth , awidth*1.5, awidth/4 , 12 );
    fill(255);
    text(  grid[ currentQ % N ][floor(currentQ/N)].d   ,width - awidth/2 -awidth*1.5, yoffset*1.25 + awidth , awidth*1.5, awidth/4 , 12 );

    pop();    
    
    
    if(alldone){
        fill(0,255,0,150);
        rect(width - awidth/2, -awidth/4, awidth,awidth/2, 20);
        fill(17);
        text("¡YA!", width - awidth/2, 0, awidth/2,awidth/4);

    }
       



}





function mousePressed(){
    
    if (state == 'quiz'){
        console.log(alldone)
        let x = -offset*0.5 + mouseX - (mouseX - 0.5*offset) % s;
        let y = -yoffset*0.5 + mouseY - (mouseY - 0.5*yoffset) % s;
        
            if(mouseX > 0.5*offset && mouseX <awidth + 0.5*offset && mouseY > 0.5*yoffset && mouseY <awidth + 0.5*yoffset){
                let g = floor(round(x/s+ y/s*N)/2);
                currentQ = round(x/s+ y/s*N);
                if(currentG != g  ){
                     //&& currentQ != 2*floor(round(x/s+ y/s*N)/2)
                    currentG = g
                    

                    
                }                
                else {
                    grid[ currentQ % N ][floor(currentQ/N)].value = !grid[ currentQ % N ][floor(currentQ/N)].value;    
                    grid[ currentQ % N ][floor(currentQ/N)].done = true;
                }
                
            }
        let ds = awidth/6
        let tx  = 2*ds,
        ty  = 3*ds + 0.5*yoffset + awidth,
        txf = awidth* 0.5  + offset*0.5 - ds/2,
        tyf = 3*ds + 0.5*yoffset + awidth*1.25,     
        fx = ds/2 + awidth* 0.5 + offset*0.5 ,
        fy =  3*ds + 0.5*yoffset + awidth, 
        fxf = awidth - 2*ds + offset, 
        fyf = 3*ds + 0.5*yoffset + awidth*1.25;
        

        if(mouseX > tx && mouseX < txf && mouseY > ty && mouseY < tyf ){
            
            grid[ currentQ % N ][floor(currentQ/N)].value = false;
            grid[ currentQ % N ][floor(currentQ/N)].done = true;
            
        }
        if(mouseX > fx && mouseX < fxf && mouseY > fy && mouseY < fyf ){

            grid[ currentQ % N ][floor(currentQ/N)].value = true;
            grid[ currentQ % N ][floor(currentQ/N)].done = true;
        }
        

        let ax = width - awidth/2, ay = -awidth/4, bx = ax + awidth, by = ay + awidth/2;
        if(alldone && mouseX > ax && mouseX < bx && mouseY > ay && mouseY < by ){

            console.log("AQUI")
            state = 'message';
            currentH = -1;
            turns = 3;
            plaintext = ""

        }
        



    }else if(state == 'stand'){
        //state = 'rotate';

        let ax = width - awidth/2, ay = -awidth/4, bx =  ax + awidth, by = ay + awidth/2;
        if(mouseX > ax && mouseX < bx && mouseY > ay && mouseY < by ){


            state = 'quiz'
        }
        

    }
    
    
}


var message ="blkCr3XiPty/2. r"
var plaintext = "";

var clockwise = false;

function cipheredMessage(){
    
background(0);
        fill(255,255,50,150);
        rect(width - awidth/2, -awidth/4, awidth,awidth/2, 20);
        fill(17);
        text("¿YA?", width - awidth/2, 0, awidth/2,awidth/4);
    translate(0.5*offset , 0.5*yoffset )
   
    
    let limit = false;
    let log =[]

    if(state == 'message'){
        for (var is = 0; is< grid.length; is++){
            for (var js = 0 ; js< grid.length; js++){
                ir = is
                jr = js
                let t = 3 - turns
                while(t-->0){
                    if(clockwise){
                        let temp = ir;
                        ir = jr;
                        jr = N-1-temp

                    }else{
                        let temp = ir;
                        ir = N - 1- jr;
                        jr = temp



                    }
             
                }
                console.log({is,js, ir,jr})
                grid[is][js].r_value = grid[ir][jr].value
            }
        }
    }




    for (let j = 0; j < grid.length; j++) {
        for (let i = 0; i < grid.length; i++) {
            
            fill(51, 200);
            rect(i*s, j*s, s, s);
            
            fill(0);
            c = message.length > i + j*N ? message[    i + j*N  ] : ''
            
            
            

            if(state == 'message'){
                if(!limit){               
                    fill(255,255,0);
                }

                if( !limit && !grid[i][j].r_value && i + j*N > currentH  && currentH != N*N - 1) {
                    currentH = i + j*N;
                    limit = true;
                    plaintext= plaintext  + c;
                }
            
            }
            
           
            text(c, i*s + s/2, j*s + s/2);
            
            
        }
    }    



    if( state == 'message' && !limit) {
        state = 'rotate';
        rotation = 90;
        

    }

    noStroke();
    
    
    fill(255);


    text( plaintext, 0, awidth, awidth, awidth/2);

    translate(awidth/2 , awidth/2 );
    


    if(state == 'rotate'){

        clockwise? angle+=2 : angle-=2;
        rotation-=2;

        if(rotation == 0){

            angle = angle % 360;
            state = 'message'
            currentH = -1;
            
            if(turns-- == 0) {
                
                state = 'stand';
                
            }

        }

    }


    rotate(angle);

    noFill();
    stroke(255);
    rect(-awidth/2,-awidth/2,awidth,awidth);
    noStroke();

    fill(255,50);



    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if(grid[i][j].value){
                rect(i*s - awidth/2, j*s - awidth/2, s, s);
            }        
        }
    }   



}


function draw() {
    console.log(state);
    
    switch(state){

        case('start'):
            state = 'quiz'

            break;
        
        case('quiz'):
            quizzGrid();    
            break;

        case('message'):
        case("rotate"):
            cipheredMessage();            

            break;

        case("stand"):
        break;
        //jojo pose



        
    }
}