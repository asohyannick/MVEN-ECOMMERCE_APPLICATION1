import { Document } from "mongodb";
export interface UserInterface extends Document {
_id: string | number;
username:string;
email: string;
password:string;
}