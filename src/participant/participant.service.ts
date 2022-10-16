import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participant } from 'src/utils/typeorm';
import { CreateParticipantDetails, FindPartialsParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { IParticpantService } from './participant';

@Injectable()
export class ParticipantService implements IParticpantService {
	constructor(
		@InjectRepository(Participant)
		private readonly participantRepository: Repository<Participant>
	) {}
	async findParicipant(params: FindPartialsParams): Promise<Participant | null> {
		return await this.participantRepository.findOneBy(params);
	}

	async createParticipant(
		createParticipantDetails: CreateParticipantDetails
	): Promise<Participant> {
		const participant = this.participantRepository.create(
			createParticipantDetails
		);
		return await this.participantRepository.save(participant);
	}
}
