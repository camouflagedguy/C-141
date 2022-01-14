var mario, bricks,clouds,mountains,enemyMushrooms,pipes,platforms,coins;

var control={
  up: "UP_ARROW", // 32=spaceBar
  left: 'LEFT_ARROW',
  right: 'RIGHT_ARROW',
  revive: 32
}

var gameConfig={
status: "start",
    
initialLifes: 4,

moveSpeed: 5,
enemyMoveSpeed: 1,
    
gravity: 1,
gravityEnemy: 10,
jump:-15,
    
startingPointX: 500,
startingPointY: 0,
    
screenX:1240,
screenY:336,
    
timeScores: 0,
scores:0
}

noseX = "";
noseY = "";
GameStatus = "";

function game()
{
console.log("noseX = " + noseX +" ,noseY =  "+ noseY);

instializeInDraw();
moveEnvironment(mario);
drawSprites();
    
if(gameConfig.status==='start'){

}
}