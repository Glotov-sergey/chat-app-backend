import { compare, genSalt, hash } from 'bcrypt';

export const hashPassword = async (rawPassword: string) => {
	const salt = await genSalt();
	return await hash(rawPassword, salt);
};

export const compareHash = async (
	rawPassword: string,
	hashedPassword: string
) => {
	return await compare(rawPassword, hashedPassword);
};
