import { prismaClient } from "../../../database/prismaClient";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

class CreateUserUseCase {
	async execute({ firstName, lastName, password, email }: ICreateUserDTO) {
		console.log(process.env.DATABASE_URL);

		const user = await prismaClient.user.create({
			data: {
				firstName,
				lastName,
				password,
				email,
			},
		});

		return user;
	}
}

export { CreateUserUseCase };
