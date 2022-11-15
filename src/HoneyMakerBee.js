var HoneyMakerBee = function() {
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot= 0;
};

var b = new Bee();

HoneyMakerBee.prototype.color = b.color;
HoneyMakerBee.prototype.food = g.food;
HoneyMakerBee.prototype.eat = g.eat;

HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}