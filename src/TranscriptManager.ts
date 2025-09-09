/**
 * @fileOverview a module for managing student
 * @author Sohibjon Abdimannabov
 */

export type StudentID = number
export type Student = {studentID: number, studentName: string}
export type Course = {coursname: string}
export type CourseGrade = {course:Course, grade:number}
export type Transcript = {student:Student, grades:CourseGrade[]}

let transcripts: Transcript[] = []
let students: Student[] = []

// initializes the database with 4 students,
// each with an empty transcript (handy for debugging)
export function initialize() {
    addStudent("Sardor")
    addStudent("Jasur")
    addStudent("Jasur")
    addStudent("Nigora")

    console.log("Initial list of transcript")
    for(let t of transcripts){
        console.log(t)
    }
}

// returns a list of all the transcripts.
// handy for debugging
export function getAll() {
    throw "not implemented"
}

// creates an empty transcript for a student with this name,
// and returns a fresh ID number
export function addStudent(name:string) : StudentID {
    let newStudentID: StudentID = 1
    if (students.length > 0)
        newStudentID = students[students.length-1].studentID +1

    const newStudent: Student = { studentID: newStudentID, studentName: name }
    students.push(newStudent)

    const newTranscript: Transcript = { student: newStudent, grades: [] }
    transcripts.push(newTranscript)

    return newStudentID
}

// gets transcript for given ID.  Returns undefined if missing
export function getTranscript(studentID:number) : Transcript {
    throw "not implemented"
}

// returns list of studentIDs matching a given name
export function getStudentIDs(studentName:string) : StudentID[]{
    throw "not implemented"
}

// deletes student with the given ID from the database.
// throws exception if no such student. 
export function deleteStudent(studentID:StudentID) {
    throw "not implemented"
}

// adds a grade for the given student in the given course.
// throws error if student already has a grade in that course.
export function addGrade(studentID: StudentID, course: Course, grade: number)  {
    throw "not implemented"
}

// returns the grade for the given student in the given course
// throws an error if no such student or no such grade
export function getGrade(studentID:StudentID, course:Course) : number {
    throw "not implemented"
}
