import { Bill } from './bill';
import { StudentI } from './student';
export interface StudentFullDetail extends StudentI {
    bills: Bill[];
}
