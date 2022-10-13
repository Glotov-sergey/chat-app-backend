import { Injectable } from '@nestjs/common';
import { IConversationService } from './conversation';
import { InjectRepository } from '@nestjs/typeorm';
import { Conversation } from '../utils/typeorm/entities/Conversation';
import { Repository } from 'typeorm';
import { CreateConverssationDetails } from 'src/utils/types';

@Injectable()
export class ConversationService implements IConversationService {
	constructor(
		@InjectRepository(Conversation)
		private readonly conversationRepository: Repository<Conversation>
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
