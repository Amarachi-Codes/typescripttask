import { DEPARTMENT } from "../constants/departments";
import { GENDER } from "../constants/gender";
import { STATE } from "../constants/state";

export interface Istudent{
    firstName: string;
    lastName: string;
    matricNumber:number|string;
    gender:GENDER;
    department:DEPARTMENT;
    state:STATE;

}