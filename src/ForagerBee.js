var ForagerBee = function() {
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];

};
ForagerBee.prototype.color = b.color;
ForagerBee.prototype.food = g.food;
ForagerBee.prototype.eat = g.eat;
ForagerBee.prototype.forage = function(){
  this.treasureChest.push('treasure')
}
