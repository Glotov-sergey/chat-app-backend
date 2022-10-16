import { Controller, Inject, Post, Get, UseGuards, Body } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IConversationService } from './conversation';
import { AuthenticatedGuard } from '../auth/utils/guards';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { AuthUser } from 'src/utils/decorators/auth-user';
import { User } from 'src/utils/typeorm';
import { IUserService } from 'src/user/user';

@Controller(Routes.CONVERSATION)
@UseGuards(AuthenticatedGuard)
export class ConversationController {
	constructor(
		@Inject(Services.CONVERSATION)
		private readonly conversationSevice: IConversationService,
		@Inject(Services.USER) private readonly userService: IUserService
	) {}

	@Post()
	async createConversation(
		@AuthUser() user: User,
		@Body() createConversationDto: CreateConversationDto
	) {
		const userDb = await this.userService.findUser({ id: user.id });
		console.log(userDb);
		return this.conversationSevice.createConversation(
			userDb,
			createConversationDto
		);
	}

	@Get()
	getAll() {}

	@Get(':id')
	getById() {}
}
