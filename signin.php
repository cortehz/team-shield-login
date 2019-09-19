<?php

require_once("connection.php");


if($connection->connect_error) die("error when connection");

if (isset($_POST['email'])&& isset($_POST['password']))
{

	$email=$_POST['email'];
	$password=sha1($_POST['password']);

	//create  mysql query
	$query="SELECT * FROM users WHERE Email='$email' and Password='$password'";

	$result=$connection->query($query); //run the mysql query

	//query failed, stop the program
	if (!$result) die("failed ".$connection->error);
	$rows=$result->num_rows;
	if($rows ==0) //no such data in the database
	{
		echo "<script>
			window.alert('username or password entered is wrong');
			window.location.href='index.html';
		</script>";
	}
	else //data has been found in the database
	{
		$row=$result->fetch_array(MYSQLI_ASSOC);
		$name=$row['Name'];
		$id=$row['id'];
		echo "<script>
			window.alert('successful login, your name is $name with user_id $id');
		</script>";
			
	}
}

$connection->close(); //end the database connection
	
?>	