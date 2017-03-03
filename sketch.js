//Created by Karol Novljaković
//Inspired by Coding Challenge by:
  // Coding Rainbow
  // Daniel Shiffman
  // http://patreon.com/codingtrain

var trees;
var max_dist = 50;
var min_dist = 10;
var ready;  //is tree ready to be shown(did user clicked)
var d = 10; //size of a leaf (hard-coded)
var s = 200; //size of a tree crown
var density    = 500; //number of leaves (attractors)
var branchLen  = 10; //length of branch
var showLeaves, //show or hide attractors
    pMode,      // PARTY MODE :)
    instr,      // show or hide instructions
    iPressed;   //hint about instructions
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(120);
  trees = [];
}

function draw() {
  background(51);
  if(!iPressed){
  fill(255);
  text("Press i for instructions!", 10, 20);
  }
  for(var i=0; i<trees.length; i++){
    if(showLeaves){
      trees[i].showLeaves();
    }
    if(ready){
    trees[i].show();
      if(!trees[i].grown()){
        trees[i].grow();
      }
    }
  }
  if(instr){
  instructions();
  }
}

function mousePressed(){
  var clickPos = createVector(mouseX, mouseY);
  var tree     = new Tree(clickPos);
  for(var i=0; i<density; i++){
  tree.addLeaf(d,s);
  }
  trees.push(tree);
  ready=true;
}

//keyboard shortcuts
function keyPressed(){
  if(key=="i" || key=="I"){
    instr = !instr;
    iPressed = true;
  }
	if(key=="s" || key=="S"){
		s+=25;
	}else if(key=="a" || key=="A"){
		s-=25;
	}
  s = constrain(s, 50, 525);
  if(key=="d" || key=="D"){
    density+=50;
  }else if(key=="f" || key=="F"){
    density-=50;
  }
  density = constrain(density, 400, 1000);
  if(key=="l" || key=="L"){
    branchLen+=1;
  }else if(key=="k" || key=="K"){
    branchLen-=1;
  }
  branchLen = constrain(branchLen, 1, 25);
  if(key=="v" || key=="V"){
    showLeaves = !showLeaves;
  }
  if(key=="p" || key=="P"){
    pMode = !pMode;
  }
}