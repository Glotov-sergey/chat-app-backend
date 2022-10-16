import { Participant } from 'src/utils/typeorm';
import { CreateParticipantDetails, FindPartialsParams } from 'src/utils/types';

export interface IParticpantService {
	findParicipant(params: FindPartialsParams): Promise<Participant | null>;
	createParticipant(
		createParticipantDetails: CreateParticipantDetails
	): Promise<Participant>;
}
