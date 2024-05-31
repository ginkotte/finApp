import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

class CreateUserUseCase {
	async execute({ firstName, lastName, password, email }: ICreateUserDTO) {}
}

export { CreateUserUseCase };
