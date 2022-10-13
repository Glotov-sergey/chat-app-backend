import { Entity, JoinTable, ManyToMany } from 'typeorm';
import { Base } from './Base';
import { Conversation } from './Conversation';

@Entity({ name: 'participants' })
export class Participant extends Base {
	@ManyToMany(
		() => Conversation,
		(conversation) => conversation.chatParticipants
	)
	@JoinTable()
	conversations: Conversation[];
}
