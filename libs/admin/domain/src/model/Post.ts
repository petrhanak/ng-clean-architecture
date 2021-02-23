import { User } from './User';

export interface Post {
  user: User
  id: string
  title: string
  content: string
}