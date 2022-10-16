import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Base } from './Base';
import { Exclude } from 'class-transformer';
import { Participant } from './Participant';

@Entity({ name: 'users' })
export class User extends Base {
	@Column({ unique: true })
	email: string;
	@Column()
	@Column()
	@Exclude()
	password: string;
	@Column()
	firstName: string;
	@Column()
	lastName: string;
	@OneToOne(() => Participant)
	@JoinColumn()
	participant: Participant;
}
