import { Injectable } from '@nestjs/common';
import { IConversationService } from './conversation';
import { CreateConverssationDetails } from 'src/utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Conversation, Participant } from 'src/utils/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConversationService implements IConversationService {
	constructor(
		@InjectRepository(Conversation)
		private readonly conversationRepository: Repository<Conversation>,
		@InjectRepository(Participant)
		private readonly participantRepository: Repository<Participant>
	) {}

	createConversation(createConversationDetails: CreateConverssationDetails) {
		return createConversationDetails;
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
