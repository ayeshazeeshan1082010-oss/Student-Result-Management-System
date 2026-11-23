
document.getElementById("total").addEventListener("click", function () {

    // Get Student Name
    let student = document.getElementById("student").value;

    // Get Subject Marks
    let english = Number(document.getElementById("english").value);
    let maths = Number(document.getElementById("maths").value);
    let urdu = Number(document.getElementById("urdu").value);
    let computer = Number(document.getElementById("computer").value);
    let biology = Number(document.getElementById("biology").value);

    // Store all marks in array
    let marks = [english, maths, urdu, computer, biology];

    // Check empty inputs and invalid marks
    if (student.trim() === "" || marks.some(mark => mark < 0 || mark > 100) ||
        document.getElementById("english").value === "" ||
        document.getElementById("maths").value === "" ||
        document.getElementById("urdu").value === "" ||
        document.getElementById("computer").value === "" ||
        document.getElementById("biology").value === "") {

        alert("Please enter valid student name and marks (0-100)!");
        return;
    }

    // Calculate Total
    let total = english + maths + urdu + computer + biology;

    // Calculate Percentage
    let percentage = (total / 500) * 100;

    // Calculate Grade
    let grade;

    if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else {
        grade = "Fail";
    }

    // Find Highest and Lowest Marks
    let highest = Math.max(...marks);
    let lowest = Math.min(...marks);

    // Check Pass or Fail
    let result;

    if (marks.every(mark => mark >= 40)) {
        result = "Pass";
    }
    else {
        result = "Fail";
    }

    // Display Result
    alert(
        "Student Result\n\n" +
        "Student Name: " + student + "\n" +
        "English: " + english + "\n" +
        "Maths: " + maths + "\n" +
        "Urdu: " + urdu + "\n" +
        "Computer: " + computer + "\n" +
        "Biology: " + biology + "\n\n" +
        "Total Marks: " + total + " / 500\n" +
        "Percentage: " + percentage.toFixed(2) + "%\n" +
        "Grade: " + grade + "\n" +
        "Highest Marks: " + highest + "\n" +
        "Lowest Marks: " + lowest + "\n" +
        "Final Result: " + result
    );

});
