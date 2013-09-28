#pragma strict
	
	private var direction : int;
	private var zClamp : float;
	private var newvelocity : float;
	
	var ballSpeed : float = 15;
	var momentum : float = 200;
	
	var rotatespeed : float = 5;
	
	//Scoreboard
	static var playerScore:int = 0;
	static var enemyScore:int = 0;
	
	//iphone optimization
	private var myTransform : Transform;
	private var myRigid : Rigidbody;
	
	function Awake()
	{
		myTransform = transform;
		myRigid = rigidbody;
	}
	function Start()
	{
		direction = 0;
		myRigid.AddForce (Vector3.left * 500);
		zClamp = myTransform.position.z;
	}
	
	function Update()
	{
		transform.Rotate(Vector3.up * rotatespeed * Time.deltaTime, Space.World);
		transform.Rotate(Vector3.left * rotatespeed * Time.deltaTime, Space.World);
	
		//clamp z
		myTransform.position.z = Mathf.Clamp(transform.position.y, zClamp, zClamp);
		//keep momentum
		 newvelocity = myRigid.velocity.x * momentum;
		 myRigid.velocity.x = Mathf.Clamp(newvelocity, (ballSpeed * -1 * (Time.deltaTime * 100)), ballSpeed);
		 
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
	
	function OnCollisionEnter(collision : Collision)
	{
		Debug.Log("Collision");
		if (collision.gameObject.tag == "Players")
		{
			direction = direction * -1;
		}
		direction = direction * -1;
	}
	
	function Stop()
	{
		renderer.enabled = false;
		zClamp = 0;
	}