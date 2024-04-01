import { Request, Response, request } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { name, endereco } = request.body;
    const user_id = request.user_id;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      user_id,
      name,
      endereco,
    });

    return response.json(user);
  }
}

export { UpdateUserController };
