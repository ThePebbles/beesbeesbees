var RetiredForagerBee = function() {
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};
var f =new ForagerBee();
RetiredForagerBee.prototype.food = g.food;
RetiredForagerBee.prototype.eat = g.eat;
RetiredForagerBee.prototype.treasureChest = f.treasureChest;

RetiredForagerBee.prototype.forage= function() {
  return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.gamble = function(){
  this.treasureChest.push('treasure');
}