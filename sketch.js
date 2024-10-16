let path;
let node;
let movingSprite;
let wall;

let tileSize = 32;
let map;

function setup(){

    createCanvas(windowWidth, windowHeight);

    movingSprite = new Sprite();
    movingSprite.radius = 10;
    movingSprite.tile = 's';
    movingSprite.debug = true;

    wall = new Group();
    wall.tile = '1';
    wall.width = tileSize;
    wall.height = tileSize;
    wall.collider = 's';
    wall.tile = '1';

    map = new Tiles([
"111111111111111111111111",
"1.........1............1",
"1.1.1.1.1.1.1111.1.1..11",
"1.111.1.1.1......1.11.11",
"1.1.1.1.1.111111.1.11.11",
"1.....1.......1..1.1..11",
"1.1111111.1.1.1111....11",
"1.....1...1.1....1111..1",
"1.11111.1.1.1111.......1",
"1.......1.1......1111111",
"1.11111.11111111.......1",
"1.1...1.1.1....1111111.1",
"1.1.1.1................1",
"1.1.1.111111111111111111",
"1.1.1.1...........1..1.1",
"1...1.11111111111.11.1.1",
"1.1.1.1...........11.1.1",
"1.1.1.1.11.1......1..1.1",
"1.1.1.1.11.111111111.1.1",
"1.1.1.1.11.1.........1.1",
"1.1.1....1...1111111.1.1",
"1.111111.1.11111111111.1",
"1........1.....1.......1",
"1.1111111111111111111111",
    ],tileSize/2, tileSize/2, tileSize, tileSize);

}// end setup

function draw(){

}// end draw