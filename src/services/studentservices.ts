
import { Student } from "../modal/student";
export interface IStudent{
createStudent(student: Student):void;
findStudentByid(id, number):student | undefined;
}