import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from './Base';
import { Participant } from './Participant';

@Entity({ name: 'conversations' })
export class Conversation extends Base {
	@ManyToOne(() => Participant, (participant) => participant.conversations)
	chatParticipants: Participant[];
}
