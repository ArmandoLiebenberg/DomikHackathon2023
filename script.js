ims = ['Rock', 'Paper', 'Scissors']

image = ['Gun', 'Rock', 'Sun', 'Fiya', 'Scissors', 'Axe', 'Snake', 'Monkey', 'Woman', 'Man', 'Tree', 'Cockroach', 'Wolf', 
'Sponge', 'Paper', 'Moon', 'Air', 'Bowl', 'Water', 'Alien', 'Dragon', 'Devil', 'Lightning', 'Nuke', 'Dynamite']

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
    'Gun': loadImage('res/Gun.png'),
    'Rock': loadImage('res/Rock.png'),
    'Sun': loadImage('res/Sun.png'),
    'Fiya': loadImage('res/Fiya.png'),
    'Scissors': loadImage('res/Scissors.png'),
    'Axe': loadImage('res/Axe.png'),
    'Snake': loadImage('res/Snake.png'),
    'Monkey': loadImage('res/Monkey.png'),
    'Woman': loadImage('res/Woman.png'),
    'Man': loadImage('res/Man.png'),
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
}

var sprite_list;
let table;

function setup() {
  shapes = 100;
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
  let title = createDiv('<h1>Let the Games Begin.</h1>');
  title.position(canvasx+30, 0);
  let colour_selection = createDiv('<p>Choose Background: </p>')
  colour_selection.position(canvasx+30, 70);
  colorPicker = createColorPicker('#' + Math.floor(random(16777215)).toString(16));
  colorPicker.position(canvasx+180, 80);
/*
  row1 = new p5.TableRow('Gun, Dynamite, Nuke, Lightning, Devil', ',');
  row2 = new p5.TableRow('Dragon, Alien, Water, Bowl, Air', ',');
  row3 = new p5.TableRow('Moon, Paper, Sponge, Wolf, Cockroach', ',');
  row4 = new p5.TableRow('Tree, Man, Woman, Monkey,Snake', ',');
  row5 = new p5.TableRow('Axe,Scissors,Fiya,Sun,Rock', ',');
  row6 = new p5.TableRow('+, , , , ', ',')

  table = new p5.Table([row1,row2,row3,row4,row5, row6]);
  drawTable(table)
*/
}


function draw() {
  background(colorPicker.color());
  for (let i=0; i<(shapes*img_names.length); i++) {
    type = sprite_list[i].type;
    [x,y] = sprite_list[i].position;
    image(type, x, y, 20, 20)
    sprite_list[i].set_position(move(sprite_list[i]))
  }
  /*
  for (var x = canvasx+30; x < canvasx+150; x += 120 / 6) {
		for (var y = 100; y < 220; y += 120/ 6) {
			stroke(0);
			strokeWeight(1);
			line(x, 100, x, 200);
			line(canvasx+30, y, canvasx+130, y);
		}
	}
  */
}

function move(sprite) {
  speed = 0.8;
  [x,y] = sprite.position;
  var prey_pos = sprite.nearest_prey(sprite_list);
  var prey_x = prey_pos[0];
  var prey_y = prey_pos[1];
  if ((prey_y==y)*(prey_x==x)) {
    x += (random(-4,4)/5)
    y += (random(-4,4)/5)
    return[x,y]
  }
  if (prey_y != y) {
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
  // x += (Math.sin(Math.atan(frac)))*(random(-1,2)/5)
  // y += (Math.cos(Math.atan(frac)))*(random(-1,2)/5)
  if (x<10) {
    x=10
  }
  else if (x>canvasx-20) {
    x = canvasx-20
  }
  if (y<10) {
    y=10
  }
  else if (y>canvasy-20) {
    y = canvasy-20
  }
  return[x,y]
}