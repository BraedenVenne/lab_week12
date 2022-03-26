//Part 2
function FindSingleElement() {
    const oneElement = document.querySelector(".container")
    console.log(oneElement)
}

//Part 3
const students = [

    { name: 'Tasha', grades: [80, 67, 75, 62] },
    { name: 'Tuvok', grades: [90, 88, 91, 92] },
    { name: 'Dax', grades: [88, 90, 89, 85] },
    { name: 'Neelix', grades: [60, 54, 48, 50] },
]


function GetTotalGrades(student) {
    let total = 0;
    for (const grade of student.grades) {
        total = total + grade;
    }
    return total
}

function GetGradeAvg(total, numGrade) {
    var gradeAvg = total / numGrade
    return gradeAvg
}


function studentScholarship(students) {
    const studentScholarship = [];
    for (let num = 0; num < students.length; num++) {
        let totalGrade = GetTotalGrades(students[num])
        let gradeAvg = GetGradeAvg(totalGrade, students[num].grades.length)

        if (gradeAvg > 80) {
            studentScholarship.push({ name: students[num].name, gradeAvg: gradeAvg });
        }
    }
    return studentScholarship
}