import { Controller, Inject, Post, Get, UseGuards, Body } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IConversationService } from './conversation';
import { AuthenticatedGuard } from '../auth/utils/guards';
import { CreateConversationDto } from './dto/create-conversation.dto';

@Controller(Routes.CONVERSATION)
@UseGuards(AuthenticatedGuard)
export class ConversationController {
	constructor(
		@Inject(Services.CONVERSATION)
		private readonly conversationSevice: IConversationService
	) {}

	@Post()
	createConversation(@Body() createConversationDto: CreateConversationDto) {
		console.log(createConversationDto);
		return this.conversationSevice.createConversation(createConversationDto);
	}

	@Get()
	getAll() {}

	@Get(':id')
	getById() {}
}
