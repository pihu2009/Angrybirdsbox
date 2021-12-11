//namespacing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies
const Render= Matter.Render;
var myengine,myworld,bird1,ground1,pig1,log1,box1,box2,box3,box4,pig2,log2,box5,log3,log4;
var bg

function preload()
{
 bg=loadImage("sprites/bg11.png")



}






function setup()
{
    
createCanvas(1800,700)


myengine= Engine.create();          
myworld=myengine.world; 


ground1 = new Ground(1500,700,3000,20)
bird1= new Bird(100,100,50,50)
pig1= new Pig(1150,650)
box1= new Box(1000,650)
box2= new Box(1300,650)
log1= new Log(1150,550,450,PI)
box3= new Box(1000,485)
box4= new Box(1300,485)
pig2= new Pig(1150,485)
log2= new Log(1150,385,450,PI)
box5= new Box(1150,300)
log3= new Log(1100,300,220,-PI/4)
log4= new Log(1200,300,220,PI/4)

/* var render = Render.create({
	   element: document.body,
	   engine: myengine,
	   options: 
	   {
         width: 1800,
	     height: 800,
	     wireframes: false
	   }
	 }); 
	
	Render.run(render);
 */
}

function draw()
{
Engine.update(myengine)     
background(bg)
ground1.display()
bird1.display()
pig1.display()
box1.display()
box2.display()
log1.display()
box3.display()
box4.display()
pig2.display()
log2.display()
box5.display()
log3.display()
log4.display()
}


































