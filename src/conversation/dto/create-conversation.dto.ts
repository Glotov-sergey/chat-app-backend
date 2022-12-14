import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateConversationDto {
	@IsNumber()
	@IsNotEmpty()
	authorId: number;
	@IsNumber()
	@IsNotEmpty()
	recipientId: number;
	@IsString()
	@IsNotEmpty()
	message: string;
}
