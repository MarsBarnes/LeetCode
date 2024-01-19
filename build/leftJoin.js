let courses = [
    {
        course_id: 100,
        name: "English 1",
        codes: "EN1",
        dept_id: 12,
    },
    {
        course_id: 101,
        name: "English 2",
        codes: "EN2",
        dept_id: 12,
    },
    {
        course_id: 102,
        name: "Algebra 2",
        codes: "ALG2",
        dept_id: 14,
    },
    {
        course_id: 103,
        name: "Computer Science",
        codes: "CS1",
        dept_id: 15,
    },
];
let departments = [
    {
        dept_id: 12,
        department_name: "English Language Arts",
    },
    {
        dept_id: 14,
        department_name: "Math",
    },
    {
        dept_id: 15,
        department_name: "Technology",
    },
];
//TODO: left join departments onto courses
//start: 3:50
//finish 4:10
function addCourseNameById(courses, departments) {
    let departmentsMap = new Map();
    for (const department of departments) {
        departmentsMap.set(department.dept_id, department.department_name);
    }
    let answer = [];
    for (const course of courses) {
        let updatedCourse = {
            ...course,
            department_name: departmentsMap.get(course.dept_id),
        };
        answer.push(updatedCourse);
    }
    return answer;
}
console.log(addCourseNameById(courses, departments));
//# sourceMappingURL=leftJoin.js.map