ims = ['Rock', 'Paper', 'Scissors']

imageList = ['Gun', 'Rock', 'Sun', 'Fiya', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 
'Sponge', 'Paper', 'Moon', 'Air', 'Bowl', 'Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite'];

Beats = {'Gun': ['Rock', 'Sun', 'Fiya', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf'],
  'Rock': ['Sun', 'Fiya', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 'Sponge'],
  'Sun': ['Fiya', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 'Sponge', 'Paper'],
  'Fiya': ['Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 'Sponge', 'Paper', 'Moon'],
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
  'Air': ['Bowl', 'Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fiya'],
  'Bowl': ['Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fiya', 'Scissors'],
  'Water': ['Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fiya', 'Scissors', 'Axe'],
  'Alien': ['Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fiya', 'Scissors', 'Axe', 'Snake'],
  'Dragon': ['Devil', 'Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fiya', 'Scissors', 'Axe', 'Snake', 'Monkey'],
  'Devil': ['Lightning', 'Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fiya', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman'],
  'Lightning': ['Nuke', 'Dynamite', 'Gun', 'Rock', 'Sun', 'Fiya', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man'],
  'Nuke': ['Dynamite', 'Gun', 'Rock', 'Sun', 'Fiya', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree'],
  'Dynamite': ['Gun', 'Rock', 'Sun', 'Fiya', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach']
}


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
    'Gun': loadImage('res/Gun.png'),
    'Rock': loadImage('res/Rock.png'),
    'Sun': loadImage('res/Sun.png'),
    'Fiya': loadImage('res/Fiya.png'),
    'Scissors': loadImage('res/Scissors.png'),
    'Axe': loadImage('res/Axe.png'),
    'Snake': loadImage('res/Snake.png'),
    'Monkey': loadImage('res/Monkey.png'),
    'Woman': loadImage('res/Woman.jpg'),
    'Man': loadImage('res/Man.jpg'),
    'Tree': loadImage('res/Tree.png'),
    'Cockroach': loadImage('res/Cockroach.png'),
    'Wolf': loadImage('res/Wolf.png'),
    'Sponge': loadImage('res/Sponge.png'),
    'Paper': loadImage('res/Paper.png'),
    'Moon': loadImage('res/Moon.png'),
    'Air': loadImage('res/Air.png'),
    'Bowl': loadImage('res/Bowl.png'),
    'Water': loadImage('res/Water.png'),
    'Alien': loadImage('res/Alien.png'),
    'Dragon': loadImage('res/Dragon.png'),
    'Devil': loadImage('res/Devil.png'),
    'Lightning': loadImage('res/Lightning.png'),
    'Nuke': loadImage('res/Nuke.png'),
    'Dynamite': loadImage('res/Dynamite.png')
  }  
  side_screen =  loadImage('res/background.png')
  img_names = ['Gun', 'Rock', 'Sun', 'Fiya', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 
  'Sponge', 'Paper', 'Moon', 'Air', 'Bowl', 'Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite'];
  bcolour = color(Math.floor(random(255)),Math.floor(random(255)),Math.floor(random(255))) 
}

var sprite_list;
let table;
let pg;
var shapes = 15;
var speed = 1;

function setup() {
  for (const i of img_names) {
    images[i].loadPixels()
  }
  canvasx = 900
  canvasy = 540
  createCanvas(canvasx+350, canvasy);
  pg = createGraphics(canvasx, canvasy);
  new_sprites()
  let title = createDiv('<h1>Choose Your Fighters</h1>');
  title.position(canvasx+30, 0);
  let colour_selection = createDiv('<p>Background: </p>')
  colour_selection.position(canvasx+50, 95);
  let shape_selection = createDiv('<p>Fighters: </p>')
  shape_selection.position(canvasx+210, 95);
  let speed_selection = createDiv('<p>Speed: </p>')
  speed_selection.position(canvasx+60, 55);
  colorPicker = createColorPicker(bcolour);
  colorPicker.position(canvasx+135, 105);
  selector = []
  var box_pic = 0
  for (var y = 175; y < 476; y += 300/ 5) {
    for (var x = canvasx+25; x < canvasx+326; x += 300 / 5) {
      if ((box_pic<imageList.length)*(x<canvasx+301)) {
        rect(x,y,60,60)
        imageList[box_pic]
        selector.push([[x+30,y+30], imageList[box_pic]])
        box_pic += 1
      }
    }
  }
  button = createButton('Rematch');
  button.position(canvasx+215, 71);
  button.mousePressed(new_sprites)
  shape = createInput(shapes)
  shape.size(25);
  shape.position(canvasx+270,110)
  shape.input(shape_input)
  speeds = createSlider(0.1, 2.5, speed, 0.1)
  speeds.position(canvasx+105, 70);
  speeds.style('width', '80px');
}

function new_sprites() {
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
  speed = speeds.value();
  background(120);
  image(side_screen,canvasx,0);
  pg.background(colorPicker.color());
  bcolour = colorPicker.color()
  image(pg, 0, 0);
  for (let i=0; i<(sprite_list.length); i++) {
    type = sprite_list[i].type;
    [x,y] = sprite_list[i].position;
    image(type, x, y, 20, 20)
    sprite_list[i].set_position(move(sprite_list[i]))
  }
  var box_pic = 0
  for (var y = 175; y < 476; y += 300/ 5) {
    for (var x = canvasx+25; x < canvasx+326; x += 300 / 5) {
      if ((box_pic<imageList.length)*(x<canvasx+301)) {
        if (img_names.includes(imageList[box_pic])) {
          fill(120);
          rect(x,y,60,60)
        }
        else {
          fill(200,50,50);
          rect(x,y,60,60)
        }
        image(images[imageList[box_pic]], x+5, y+5, 50, 50)
        box_pic += 1
      }
      stroke(0);
      strokeWeight(1);
      line(x, 175, x, 475);
      line(canvasx+25, y, canvasx+325, y);
    }
  }
}

function shape_input() {
  shapes = parseInt(this.value())
  console.log(shapes+2)
}

function move(sprite) {
  [x,y] = sprite.position;
  var prey_pos = sprite.nearest_prey(sprite_list);
  var prey_x = prey_pos[0];
  var prey_y = prey_pos[1];
  if ((prey_y==y)*(prey_x==x)) {
    x += (random(-4,4)/5)
    y += (random(-4,4)/5)
  }
  else {
    if (prey_y !== y) {
      frac = (prey_x-x)/(prey_y-y);
    }
    else {
      frac = (prey_x-x)/(0.0000000000000001);
    }
    if (y < prey_y) {
      x += (Math.sin(Math.atan(frac)))*(random(-1,2)*speed)
      y += (Math.cos(Math.atan(frac)))*(random(-1,2)*speed)
    } else {
      x -= (Math.sin(Math.atan(frac)))*(random(-1,2)*speed)
      y -= (Math.cos(Math.atan(frac)))*(random(-1,2)*speed)
    }
  }
  if (x<10) {
    x=10
  }
  if (x>canvasx-20) {
    x = canvasx-20
  }
  if (y<10) {
    y=10
  }
  if (y>canvasy-20) {
    y = canvasy-20
  }
  return[x,y]
}

function mousePressed() {
  for (var i=0; i<imageList.length; i++) {
    x = selector[i][0][0]
    y = selector[i][0][1]
    if ((abs(mouseX-x)<30)*(abs(mouseY-y)<30)) {
      type = selector[i][1]
      if (img_names.includes(type)) {
        img_names = img_names.filter(function(e) {return e !== type})
      }
      else {
        img_names.push(type)
      }
    }
  }
}