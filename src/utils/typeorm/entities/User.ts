import { Column, Entity } from 'typeorm';
import { Base } from './Base';
import { Exclude } from 'class-transformer';

@Entity({ name: 'users' })
export class User extends Base {
	@Column({ unique: true })
	email: string;
	@Column()
	@Exclude()
	password: string;
	@Column()
	firstName: string;
	@Column()
	lastName: string;
}
