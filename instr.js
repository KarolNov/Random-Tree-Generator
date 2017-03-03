var instructions = function(){
  var w = 400;
  var h = 150;
  var ins = "Size of a tree crown is " + (s/25 - 1) +". Click S for + and A for -\n" 	 +
  			"Density of a tree crown is "+ (density/50) +". Click D for + and F for -\n" +
  			"Bigger size and density may reduce speed of creating tree!\n" 			   	 + 
  			"Branch length is "+ branchLen +". Click L for + and K for -\n"			     + 
  			"Small branch length is making tree more curvy and smooth, but it may be slower.\n" +
  			"Big branch length is making it more sharp and is usually faster.\n"				+
  			"Press V to show/hide attractors.";

  fill(102);
  rect(0, 0, w, h);
  fill(255);
  text(ins, 10, 10, w-10, h);
  push();
  textSize(9);
  fill(255, 100);
  textAlign(RIGHT);
  text("Psst, press P for party! (epilepsy warning!)", w-5, h-5);
  pop();
  if(pMode){
    push();
    textAlign(CENTER, CENTER);
    textSize(120);
    fill(random(255), random(255), random(255));
    text("PARTY!", width/2, 60);
    pop();
    push();
    textAlign(RIGHT);
    text("Sorry, it works terribly with small branch length!", width-10, 10);
    pop();
  }
}