import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    
    if(!user) {
      throw new Error("User doesn't exists, please try another one!");
    } 
    
    if(!user.admin) {
      throw new Error("User's role needs to be admin to use this functionality"); 
    } 

    const users = this.usersRepository.list()
    return users;
  }
}

export { ListAllUsersUseCase };
