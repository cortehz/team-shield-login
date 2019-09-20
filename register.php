<?php

require_once("connection.php");

if ($connection->connect_error) die ("error when connecting");

if (isset($_POST['email']))
{

	$name=$_POST['fullname'];
	$email=$_POST['email'];
	$password=sha1($_POST['password']);

	$query="SELECT * FROM users where Email='$email'";
	$result=$connection->query($query);
	if (!$result) die("error".$connection->error);
	$rows=$result->num_rows;
	if($rows==0)
	{
		$query="INSERT INTO users (Name,Email,Password) VALUES ('$name','$email','$password')";
		$result=$connection->query($query);

		if(!$result)
		{
			echo "<script>
				window.alert('OOOPs!!! Insertion has failed. Please try again');
				window.location.href='signup.html';
			</script>";
		} 
		else
		{
			echo "<script>
				window.alert('insertion successful, you can now login');
				window.location.href='index.html';
			</script>";	

		}
	}
	else
	{
		echo "<script>
				window.alert('email already in use, please try again');
				window.location.href='signup.html';
			</script>";
	}
}
else
{
	header('location:signup.html');
}

$connection->close();

?>