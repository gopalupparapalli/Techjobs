<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: DELETE');
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

// Get the ID from the query parameters
$id = $_GET['id'];

// Create the SQL delete statement
$sql = "DELETE FROM students WHERE id = ?";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $id);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(['message' => 'Student deleted successfully']);
} else {
    echo json_encode(['error' => 'Failed to delete student']);
}

// Close the connection
$stmt->close();
$conn->close();
?>
