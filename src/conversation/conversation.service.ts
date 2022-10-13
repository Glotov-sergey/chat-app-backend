import { Injectable } from "@nestjs/common";
import { IConversationService } from "./conversation";
import { InjectRepository } from "@nestjs/typeorm";
import { Conversation } from "../utils/typeorm/entities/Conversation";
import {Repository} from "typeorm";

@Injectable()
export class ConversationService implements IConversationService {
  constructor(@InjectRepository(Conversation) private readonly conversationRepository: Repository<Conversation>) {
  }
  createConversation() {
    // TODO: Implement creating
    return "Create";
  }

  getAll() {
    // TODO: Implement Get All
    return "Get all";
  }

  getById() {
    // TODO: Implement Get by id
    return "Get by id";
  }
}
