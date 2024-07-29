<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Database configuration
$host = 'localhost';
$user = 'studentsdata';
$password = 'kK*SSleYEuq[';
$database = 'studentdetails';

// Create a new MySQLi connection
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the posted data
$postData = file_get_contents('php://input');
$request = json_decode($postData, true);

// Extract variables from the request
$id = $request['id'];
$demoJoined = $request['demoJoined'];
$remarks = $request['remarks'];
$status = $request['status'];

// Create the SQL update statement
$sql = "UPDATE students SET demoJoined = ?, remarks = ?, status = ? WHERE id = ?";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param('sssi', $demoJoined, $remarks, $status, $id);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(['message' => 'Student updated successfully']);
} else {
    echo json_encode(['error' => 'Failed to update student']);
}

// Close the connection
$stmt->close();
$conn->close();
?>
