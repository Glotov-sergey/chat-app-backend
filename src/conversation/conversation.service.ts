import { Injectable, Inject } from '@nestjs/common';
import { IConversationService } from './conversation';
import { CreateConverssationDetails } from 'src/utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Conversation, User } from 'src/utils/typeorm';
import { Repository } from 'typeorm';
import { Services } from 'src/utils/constants';
import { IParticpantService } from 'src/participant/participant';
import { IUserService } from 'src/user/user';

@Injectable()
export class ConversationService implements IConversationService {
	constructor(
		@InjectRepository(Conversation)
		private readonly conversationRepository: Repository<Conversation>,
		@Inject(Services.PARTICIPANT)
		private readonly participantService: IParticpantService,
		@Inject(Services.USER) private readonly userService: IUserService
	) {}

	async createConversation(
		user: User,
		createConversationDetails: CreateConverssationDetails
	) {
		const userDb = await this.userService.findUser({ id: user.id });
		if (!userDb.participant) {
			const newParticipant = this.participantService.createParticipant({
				id: createConversationDetails.authorId
			});
			userDb.participant = newParticipant;
			await this.userService.saveUser(userDb);
		}
		const recipient = await this.participantService.findParicipant({
			id: createConversationDetails.recipientId
		});
	}

	getAll() {
		// TODO: Implement Get All
		return 'Get all';
	}

	getById() {
		// TODO: Implement Get by id
		return 'Get by id';
	}
}
