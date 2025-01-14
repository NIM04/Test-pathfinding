//left off vid 1 at 17:30

let path;
let node;
let movingSprite;
let wall;

let tileSize = 32;
let movementSpeed = 5;
let map;

function setup(){

    createCanvas(windowWidth, windowHeight);

    movingSprite = new Sprite();
    movingSprite.radius = 10;
    movingSprite.tile = 's';
    movingSprite.counter = 0;
    //movingSprite.debug = true;

    wall = new Group();
    wall.tile = '1';
    wall.width = tileSize;
    wall.height = tileSize;
    wall.collider = 's';
    wall.tile = '1';

    map = new Tiles([
"111111111111111111111111",
"1.........1..........s.1",
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

    let matrix = [
[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1],
[1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1],
[1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1],
[1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1],
[1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1],
[1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1],
[1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1],
[1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
[1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1],
[1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1],
[1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1],
[1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1],
[1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1],
[1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1],
[1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
[1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1],
[1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1],
[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]

    grid = new PF.Grid(matrix);

    let finder = new PF.AStarFinder();
    //let finder = new PF.DijkstraFinder();

    path = finder.findPath(floor(movingSprite.x / tileSize), floor((movingSprite.y / tileSize)), 1, 1, grid);
    
    //if you want fewer nodes for speed reasons
    //let newPath  = PF.Util.compressPath(grid, path);
    //let newPath  = PF.Util.smoothenPath(grid, path);

    node = new Group();
    //node.visited = false;
    node.radius = 10;
    node.collider = 'n';

    for(p of path){

        let n = new node.Sprite(((p[0])* tileSize) + 16, ((p[1])* tileSize) + 47);
        n.visible = false;

    }

}// end setup

function draw(){

    clear();
    AIControls();



}// end draw

function AIControls(){

    if(node[movingSprite.counter]){

        movingSprite.moveTo(node[movingSprite.counter], movementSpeed);
        
        if(movingSprite.overlaps(node[movingSprite.counter])){
            movingSprite.counter += 1;
        }
    }

    else{
        movingSprite.counter == 0;
    }

}