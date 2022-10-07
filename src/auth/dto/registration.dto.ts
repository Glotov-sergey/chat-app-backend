import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class RegistrationDto {
	@IsEmail()
	email: string;
	@IsString()
	@MinLength(8, { message: 'Password length must be 8 - 21 symbols' })
	@MaxLength(21, { message: 'Password length must be 8 - 21 symbols' })
	password: string;
	@IsString()
	firstName: string;
	@IsString()
	lastName: string;
}
