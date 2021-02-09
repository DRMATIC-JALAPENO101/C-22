const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var Engine, World;
var Object;
var ground, ball;
function setup(){
    var canvas = createCanvas (400, 400);
    Engine = Engine.create();
    World = Engine.World();
    var ground_options = {
        isStatic:"true"
    }
    ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
    Object = Bodies.rectangle (200, 100, 50, 50);
    ball = Bodies.circle (200, 100, 20);
    var ball_options{
        restitution:1.0
    }
    World.add (World.Object);
    World.add (World.ground);
    World.add (World.ball);
    console.log(Object);
    console.log(Objecttype);
    console.log(Object.position.x);
    console.log(Object.position.y);
    console.log(ground);
}
function draw(){
    background (0);
    Engine.update(Engine);
    rectMode (CENTER);
    rect (ground.position.x, ground.position.y, 400, 20);
    ellipseMode(Radius);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}
