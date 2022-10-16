import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { Services } from 'src/utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from 'src/utils/typeorm';
import { ParticipantModule } from 'src/participant/participant.module';
import { UserModule } from 'src/user/user.module';

@Module({
	imports: [
		TypeOrmModule.forFeature([Conversation]),
		ParticipantModule,
		UserModule
	],
	controllers: [ConversationController],
	providers: [
		{
			provide: Services.CONVERSATION,
			useClass: ConversationService
		}
	]
})
export class ConversationModule {}
