import { FindUserParams, RegisterDetails } from '../utils/types';

export interface IUserService {
	createUser(createUserDetails: RegisterDetails);
	findUser(findUserParams: FindUserParams);
}
