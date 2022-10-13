import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { Services } from 'src/utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation, Participant } from 'src/utils/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([Conversation, Participant])],
	controllers: [ConversationController],
	providers: [
		{
			provide: Services.CONVERSATION,
			useClass: ConversationService
		}
	]
})
export class ConversationModule {}
