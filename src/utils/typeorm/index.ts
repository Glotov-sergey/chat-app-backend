import { Session } from "inspector";
import { User } from "./entities/User";
import {Conversation} from "./entities/Conversation" 

const entities = [User, Session, Conversation];

export { User, Session, Conversation };
export default entities;
