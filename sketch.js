const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops,umbrella,engine,world,maxDrops,ground;
var drops=[];
var thunderimg,thunder;

function preload(){
    thunderimg=loadImage("Thunder-1.png");
}

function setup(){

    createCanvas(displayWidth,displayHeight-500);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(displayWidth/2,displayHeight-500,displayWidth,5);
    
    umbrella = new Umbrella(displayWidth/2,displayHeight-600);

    maxDrops = 1000;

    if(frameCount%40===0){
        for(var i = 0;i<maxDrops; i++){
            drops.push(new Drops(random(0,width),random(0,height)));
        }
    }
    
}

function draw(){

    Engine.update(engine);

    background(0);
    fill(9,0,128);


    for(var i = 0; i<maxDrops;i++){
        drops[i].showMode();
        drops[i].update();
    }

    ground.display();
    umbrella.display();

    if(frameCount%100===0){
        image(thunderimg,random(0,displayWidth),50,150,150);
    }

}   

