import { Controller, Inject, Post, Get, UseGuards } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IConversationService } from './conversation';
import { AuthenticatedGuard } from '../auth/utils/guards';

@Controller(Routes.CONVERSATION)
@UseGuards(AuthenticatedGuard)
export class ConversationController {
	constructor(
		@Inject(Services.CONVERSATION)
		private readonly conversationSevice: IConversationService
	) {}

	@Post()
	createConversation() {
		return this.conversationSevice.createConversation();
	}

	@Get()
	getAll() {}

	@Get(':id')
	getById() {}
}
