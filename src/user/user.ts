import { User } from 'src/utils/typeorm';
import { FindUserParams, RegisterDetails } from '../utils/types';

export interface IUserService {
	createUser(createUserDetails: RegisterDetails);
	findUser(findUserParams: FindUserParams);
	saveUser(user: User): Promise<User>;
}
