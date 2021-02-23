import { User } from './User';

export interface Comment {
  user: User
  id: string
  text: string
}