
function Tree(clickPos) {
  this.leaves = [];
  this.branches = [];
  var dir = createVector(0, -1);
  var found = false;
  var pos = createVector(mouseX, height);
  var root = new Branch(null, pos, dir);
  this.branches.push(root);
  var current = root;
  
  this.addLeaf = function(d, dMin, dMax){
    this.leaves.push(new Leaf(d, dMin, dMax));
  }

  this.showLeaves = function(){
    for (var i = 0; i < this.leaves.length; i++) {
      this.leaves[i].show();
    }
  }

  this.grown = function(){
    if(this.leaves.length<5){
      return true;
    }else{
      return false;
    }
  }

  this.grow = function() {
  while (!found && this.leaves != null) {
    for (var i = 0; i < this.leaves.length; i++) {
      var d = p5.Vector.dist(current.pos, clickPos);
      if (d < this.leaves[i].max_dist) {
        found = true;
      }
    }
    if (!found) {
      var branch = current.next();
      current = branch;
      this.branches.push(current);
    }
  }
    for (var i = 0; i < this.leaves.length; i++) {
      var leaf = this.leaves[i];
      var closestBranch = null;
      var record = 100000;
      for (var j = 0; j < this.branches.length; j++) {
        var branch = this.branches[j];
        var d = p5.Vector.dist(leaf.pos, branch.pos);
        if (d < this.leaves[i].min_dist) {
          leaf.reached = true;
          closestBranch = null;
          break;
        } else if (d > this.leaves[i].max_dist) {

        } else if (closestBranch == null || d < record) {
          closestBranch = branch;
          record = d;
        }
      }

      if (closestBranch != null) {
        var newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
        newDir.normalize();
        closestBranch.dir.add(newDir);
        closestBranch.count++;
      }
    }

    for (var i = this.leaves.length - 1; i >= 0; i--) {
      if (this.leaves[i].reached) {
        this.leaves.splice(i, 1);
      }
    }

    for (var i = this.branches.length - 1; i >= 0; i--) {
      var branch = this.branches[i];
      if (branch.count > 0) {
        branch.dir.div(branch.count + 1);
        this.branches.push(branch.next());
      }
      branch.reset();
    }
  }





  this.show = function() {
    this.col = 0;
    this.changeCol=0.5;
    for (var i = 0; i < this.branches.length; i++) {
      this.branches[i].show(this.col);
      this.col+=this.changeCol;
      if(this.col>360 || this.col<0){
      this.changeCol= -this.changeCol;
      }
    }
  }
}