import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { firstName, lastName, password, email } = req.body;
		const useCase = new CreateUserUseCase();

		await useCase.execute({ firstName, lastName, password, email });

		return res.status(201).send();
	}
}

export { CreateUserController };
