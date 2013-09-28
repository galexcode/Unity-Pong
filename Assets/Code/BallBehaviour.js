#pragma strict

public var cSpeed : float = 10;
public var sFactor : float = 10;

//Scoreboard
static var playerScore:int = 0;
static var enemyScore:int = 0;

function Start () {
	rigidbody.AddForce(10, 0, 0);
}

function Update () {
	var cvel = rigidbody.velocity;
	var tvel = cvel.normalized * cSpeed;
	rigidbody.velocity = Vector3.Lerp(cvel,tvel,Time.deltaTime * sFactor);
	
	//Check left bound
	if(transform.position.x < -29){
		playerScore++;
		transform.position.x = 0;
		transform.position.y = 0;
	}
	
	//Check right bound
	if(transform.position.x > 29){
		enemyScore++;
		transform.position.x = 0;
		transform.position.y = 0;
	}	
}