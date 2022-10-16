import { Controller, Inject } from '@nestjs/common';
import { Services } from 'src/utils/constants';
import { IParticpantService } from './participant';
import { ParticipantService } from './participant.service';

@Controller('participant')
export class ParticipantController {
	constructor(
		@Inject(Services.PARTICIPANT)
		private readonly paricipantService: IParticpantService
	) {}
}
