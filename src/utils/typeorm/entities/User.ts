import { Column, Entity } from 'typeorm';
import { Base } from './Base';

@Entity()
export class User extends Base {
	@Column()
	email: string;
	@Column()
	password: string;
	@Column()
	firstName: string;
	@Column()
	lastName: string;
}
