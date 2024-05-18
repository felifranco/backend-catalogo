import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SuccessfulProcess, ErrorProcess } from 'src/utils/response';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async login(createAuthDto: CreateAuthDto) {
    const saved = await this.userRepo.findOneBy({
      username: createAuthDto.username,
    });
    try {
      if (!saved) {
        throw new Error(
          `El usuario '${createAuthDto.username}' no se encuentra registrado.`,
        );
      }

      if (createAuthDto.password === saved.password) {
        return SuccessfulProcess(saved, '¡Bienvenido!');
      }

      throw new Error(`Contraseña incorrecta.`);
    } catch (exception) {
      return ErrorProcess(exception.message, null);
    }
  }
}
