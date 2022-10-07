import { RegisterDetails } from '../utils/types';

export interface IUserService {
	createUser(createUserDetails: RegisterDetails);
	findOne(id: number);
}
