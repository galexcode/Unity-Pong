#pragma strict

var pScore:GUIText;
var eScore:GUIText;

function OnGUI(){
	pScore.text = "Player Score: " + BallBehaviour.playerScore;
	eScore.text = "Enemy Score: " + BallBehaviour.enemyScore;
}