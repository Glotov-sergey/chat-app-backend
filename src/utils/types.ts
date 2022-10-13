export type RegisterDetails = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
};

export type ValidateUserDetails = {
	email: string;
	password: string;
};

export type FindUserParams = Partial<{
	id: number;
	email: string;
}>;

export type CreateConverssationDetails = {
	authorId: number;
	recipientId: number;
	message: string;
};

export type ConversationIndentityType = 'author | recipient';
