import { Request, Response } from "express";
import { CountHaircutService } from "../../services/haircut/CountHaircutService";

class CountHaircutController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;

    const countHaircuts = new CountHaircutService();

    const count = await countHaircuts.execute({
      user_id,
    });

    return response.json(count);
  }
}

export { CountHaircutController };
