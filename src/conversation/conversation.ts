import { User } from 'src/utils/typeorm';
import { CreateConverssationDetails } from 'src/utils/types';

export interface IConversationService {
	createConversation(
		user: User,
		createConverssationDetails: CreateConverssationDetails
	);
	getAll();
	getById();
}
