import { Entity } from "typeorm";
import { Base } from "./Base";

@Entity({name: "conversation"})
export class Conversation extends Base {}