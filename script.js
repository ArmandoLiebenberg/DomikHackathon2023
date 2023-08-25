// Get canvas element from html
var c = document.getElementById("game");

// Create 2d drawing object from canvas 
var ctx = c.getContext("2d");

image = new Image();

// Wait for the sprite to load
image.onload = () => {
    Promise.all([
      createImageBitmap(image)
    ]).then((sprites) => {
      // Draw sprite onto the canvas
      ctx.drawImage(sprites[0], 250, 250);
    });
  };
  
  // Load the sprite sheet from an image file
  image.src = "res/Rock.png";