import { Bill } from './bill';
import { StudentI } from './student';
export interface StudentFD extends StudentI {
    bills: Bill[];
}
