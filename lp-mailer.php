    <?php
    // Enable error reporting
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email-address']);
        $phone = htmlspecialchars($_POST['phone-number']);
        $course = htmlspecialchars($_POST['course']);
        $message = htmlspecialchars($_POST['message']);


        // Send email
        $to = "balaji.l@grocat.in ,bharathi.k@grocat.in ,ANTONPERIES@GMAIL.COM ,asbexjmc@gmail.com";
        $subject = "Agni MBA Admission PPC Leads " . date("d-m-Y");
        $message = "Name: $name\nEmail: $email\nPhone: $phone\nCourse: $course\nMessage: $message";
        $headers = "From: asbexjmc@gmail.com";

        if (mail($to, $subject, $message, $headers)) {
            echo "<script>window.location.href='thank-you.php'</script>";
        } else {
            echo "Failed to send Admission Failed request.";
        }
    } else {
        echo "Invalid request method.";
    }
    ?>
