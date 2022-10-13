import { CreateConverssationDetails } from 'src/utils/types';

export interface IConversationService {
	createConversation(createConverssationDetails: CreateConverssationDetails);
	getAll();
	getById();
}
