<?php
// addStudent.php

// Allow CORS (Cross-Origin Resource Sharing)
header('Access-Control-Allow-Origin: *'); // Allow requests from any origin (replace * with your frontend domain in production)
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204); // No Content
    exit();
}

// Set response content type to JSON
header('Content-Type: application/json');

// Database configuration
$host = 'localhost';
$user = 'studentsdata';
$password = 'kK*SSleYEuq[';
$database = 'studentdetails';

// Connect to the database
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    error_log("Connection failed: " . $conn->connect_error);
    http_response_code(500);
    echo json_encode(['message' => 'Failed to connect to database']);
    exit();
}

// Create table if not exists
$table_query = "CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Student_Name VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(15) NOT NULL,
    CurrentDatetime DATETIME NOT NULL,
    Email VARCHAR(255) NOT NULL,
    course VARCHAR(255) NOT NULL,
    demoJoined VARCHAR(255) DEFAULT NULL,
    remarks TEXT DEFAULT NULL,
    status VARCHAR(255) DEFAULT NULL
)";

if (!$conn->query($table_query)) {
    error_log("Table creation failed: " . $conn->error);
    http_response_code(500);
    echo json_encode(['message' => 'Failed to create table']);
    exit();
}

// Handle POST request to insert student data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['message' => 'Invalid JSON']);
        exit();
    }

    // Debugging: Log the received data
    error_log("Received data: " . print_r($data, true));

    // Sanitize and validate data
    $student_name = $conn->real_escape_string($data['Student_Name'] ?? '');
    $phone_number = $conn->real_escape_string($data['PhoneNumber'] ?? '');
    $email = $conn->real_escape_string($data['Email'] ?? '');
    $course = $conn->real_escape_string($data['course'] ?? '');
    $current_datetime = date('Y-m-d H:i:s');

    // Ensure required fields are not empty
    if (empty($student_name) || empty($phone_number) || empty($email) || empty($course)) {
        http_response_code(400);
        echo json_encode(['message' => 'All fields are required']);
        exit();
    }

    // Insert data into database
    $insert_query = "INSERT INTO students (Student_Name, PhoneNumber, CurrentDatetime, Email, course, demoJoined, remarks, status) VALUES ('$student_name', '$phone_number', '$current_datetime', '$email', '$course', NULL, NULL, NULL)";

    if ($conn->query($insert_query)) {
        echo json_encode(['message' => 'Student added successfully']);
    } else {
        error_log("Error inserting data: " . $conn->error);
        http_response_code(500);
        echo json_encode(['message' => 'Failed to add student']);
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Fetch data from the students table
    $query = "SELECT * FROM students";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $students = [];
        while ($row = $result->fetch_assoc()) {
            $students[] = $row;
        }
        echo json_encode($students);
    } else {
        echo json_encode([]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['message' => 'Method Not Allowed']);
}

// Close the database connection
$conn->close();
?>
