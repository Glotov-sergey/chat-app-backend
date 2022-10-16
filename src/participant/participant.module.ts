import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { Services } from 'src/utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from 'src/utils/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([Participant])],
	controllers: [ParticipantController],
	providers: [
		{
			provide: Services.PARTICIPANT,
			useClass: ParticipantService
		}
	],
	exports: [
		{
			provide: Services.PARTICIPANT,
			useClass: ParticipantService
		}
	]
})
export class ParticipantModule {}
