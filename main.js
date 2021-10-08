
// Create canvas variable

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}
if(keypress=='87')
{newimage('ball.png');
console.log("b")
}

function up(){
	if(py>=38)
	{
	py=py-10;
	c1.remove(steve);
	playerupdate();
	
	}
	
	}
	function down(){
	if (py<=40)
	{
	py=py+10;
	c1.remove(steve);
	playerupdate();
	}
	
	}
	function right(){
	if(px<=39)
	{
	px=px+10;
	c1.remove(steve);
	playerupdate();
	}
	
	}
	function left(){
	if (px>=37)
	{
	px=px-10;
	c1.remove(steve);
	playerupdate();
	}
	
	}
 