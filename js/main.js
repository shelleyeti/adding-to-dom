const createStudentComponent = (name, subject, info) => {
    return `
    <div class="student">
        <h2>${name}</h2>
        <section>${subject}</section>
        <p>${info}</p>
    </div>
`
};

const studentContainer = document.querySelector("#container");
for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(
        student.name,
        student.subject,
        student.info
    )
}


const lissa = createStudentComponent(
    "Lissa Goforth",
    "History",
    "Asks pointless, unrelated questions");

const courtney = createStudentComponent(
    "Courtney Seward",
    "History",
    "Has completed all homework");

const greg = createStudentComponent(
    "Greg Lawrence",
    "History",
    "Sub-par performance all around");



