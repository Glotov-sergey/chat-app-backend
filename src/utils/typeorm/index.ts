import { Session } from 'inspector';
import { User } from './entities/User';
import { Conversation } from './entities/Conversation';
import { Participant } from './entities/Participant';

const entities = [User, Session, Conversation, Participant];

export { User, Session, Conversation, Participant };
export default entities;
