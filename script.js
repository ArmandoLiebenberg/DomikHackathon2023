ims = ['Rock', 'Paper', 'Scissors']

image = ['Gun', 'Rock', 'Sun', 'Fire', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 
'Sponge', 'Paper', 'Moon', 'Air', 'Bowl', 'Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite']

Beats = {'Gun': ['Rock', 'Sun', 'Fire', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf'],
        'Rock': ['Sun', 'Fire', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 'Sponge'],
        'Sun': ['Fire', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 'Sponge', 'Paper'],
        'Fire': ['Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 'Sponge', 'Paper', 'Moon'],
        'Scissors': ['Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 'Sponge', 'Paper', 'Moon', 'Air'],
        'Axe': ['Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 'Sponge', 'Paper', 'Moon', 'Air', 'Bowl'],
        'Snake': ['Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 'Sponge', 'Paper', 'Moon', 'Air', 'Bowl', 'Water'],
        'Monkey': ['Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 'Sponge', 'Paper', 'Moon', 'Air', 'Bowl', 'Water', 'Alien'],
        'Woman': ['Man', 'Tree', 'Cockroach', 'Wolf', 'Sponge', 'Paper', 'Moon', 'Air', 'Bowl', 'Water', 'Alien', 'Dragon'], 
        'Man': ['Tree', 'Cockroach', 'Wolf', 'Sponge', 'Paper', 'Moon', 'Air', 'Bowl', 'Water', 'Alien', 'Dragon', 'Devil'],
        'Tree': ['Cockroach', 'Wolf', 'Sponge', 'Paper', 'Moon', 'Air', 'Bowl', 'Water', 'Alien', 'Dragon', 'Devil', 'Lightning'],
        'Cockroach': ['Wolf', 'Sponge', 'Paper', 'Moon', 'Air', 'Bowl', 'Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke'],
        'Wolf': ['Sponge', 'Paper', 'Moon', 'Air', 'Bowl', 'Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite'],
        'Sponge': ['Paper', 'Moon', 'Air', 'Bowl', 'Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun'],
        'Paper': ['Moon', 'Air', 'Bowl', 'Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock'],
        'Moon': ['Air', 'Bowl', 'Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun'],
        'Air': ['Bowl', 'Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fire'],
        'Bowl': ['Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fire', 'Scissors'],
        'Water': ['Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fire', 'Scissors', 'Axe'],
        'Alien': ['Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fire', 'Scissors', 'Axe', 'Snake'],
        'Dragon': ['Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fire', 'Scissors', 'Axe', 'Snake', 'Monkey'],
        'Devil': ['Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fire', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman'],
        'Lightning': ['Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fire', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man'],
        'Nuke': ['Dynamite', 'Gun', 'Rock', 'Sun', 'Fire', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree'],
        'Dynamite': ['Gun', 'Rock', 'Sun', 'Fire', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach']}

/*
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
  
  // Load random sprite sheet from an image list
  image.src = "res/"+ims[Math.floor(Math.random() * ims.length)]+".png";
  */
  class Sprite {
    constructor(type, sprite_name, x, y) {
      this._type = type;
      this._sprite_name = sprite_name;
      this._x = x;
      this._y = y;
    }

    get type() {
      return this._type;
    }

    get sprite_name() {
      return this._sprite_name;
    }

    get position() {
      return [this._x, this._y];
    }

    set_type(type) {
      this._type = type;
    }

    set_sprite_name(sprite_name) {
      this._sprite_name = sprite_name;
    }

    set_position([x,y]) {
      //console.log[x]
      this._x = x;
      this._y = y;
    }

    distance_to([x,y]) {
      return Math.sqrt((Math.abs(this._x-x))**2 + (Math.abs(this._y-y))**2);
    }

    nearest_prey(sprite_list) {
      var nearest = [10000, [this._x,this._y]];
      for (const sprite of sprite_list) {
        var pos = sprite.position;
        var dist = this.distance_to(pos);
        var my_name= this._sprite_name
        if (Beats[my_name].includes(sprite.sprite_name)) {
          if (dist<nearest[0]) {
            nearest = [dist,pos]
          }
        }
        else {
          if (dist<10) {
            this.set_sprite_name(sprite.sprite_name)
            this.set_type(sprite.type)
          }
        }
      }
      return nearest[1];
    }
  }

function preload() {
  images = {
    'Rock': loadImage('res/Rock.png'),
    'Paper': loadImage('res/Paper.png'),
    'Scissors': loadImage('res/Scissors.png')
  }
}

var sprite_list;

function setup() {
  shapes = 50;
  img_names = ['Rock','Paper','Scissors'];
  for (const i of img_names) {
    images[i].loadPixels()
  }
  canvasx = 700
  canvasy = 500
  createCanvas(canvasx, canvasy);
  sprite_list = []
  for (let j = 0; j<img_names.length; j++) {
    sprite_name = img_names[j]
    img = images[sprite_name]
    for (let i=(shapes*j); i<(shapes*(j+1)); i++) {
      sprite_list.push(new Sprite(img,sprite_name,random(10,canvasx-10),random(10,canvasy-10)))
    }
  }
}

function draw() {
  background(220);
  for (let i=0; i<(shapes*img_names.length); i++) {
    type = sprite_list[i].type;
    [x,y] = sprite_list[i].position;
    image(type, x, y, 16, 16)
    sprite_list[i].set_position(move(sprite_list[i]))
  }
}

function move(sprite) {
  [x,y] = sprite.position;
  var prey_pos = sprite.nearest_prey(sprite_list);
  var prey_x = prey_pos[0];
  var prey_y = prey_pos[1];
  if (prey_x != x) {
    x += ((prey_x-x)/Math.abs((prey_x-x)))*(random(-1,2)/5)
  }
  else {
    x += random(-1,1)/5
  }
  if (prey_y != y) {
    y += ((prey_y-y)/Math.abs((prey_y-y)))*(random(-1,2)/5)
  }
  else {
    y += random(-1,1)/5
  }
  if (x<10) {
    x=10
  }
  else if (x>canvasx-10) {
    x = canvasx-10
  }
  if (y<10) {
    y=10
  }
  else if (y>canvasy-10) {
    y = canvasy-10
  }
  return[x,y]
}