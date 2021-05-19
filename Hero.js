class Hero {
  constructor(x,y,width,height)
	{
		var options = { 
			density: 1, 
			frictionAir: 0.01
			
		};
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.image = loadImage("superhero1.png");
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width,this.height);
			pop()
			
	}
}
