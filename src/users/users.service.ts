import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SuccessfulProcess, ErrorProcess } from 'src/utils/response';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const saved = await this.userRepo.findOneBy({
        username: createUserDto.username,
      });

      if (saved) {
        throw new Error(
          `El usuario '${createUserDto.username}' ya se encuentra registrado.`,
        );
      }

      const newUser = this.userRepo.create(createUserDto);
      const result = await this.userRepo.save(newUser);
      return SuccessfulProcess(result, 'Usuario creado exitosamente.');
    } catch (exception) {
      return ErrorProcess(exception.message, null);
    }
  }

  async findAll() {
    try {
      const result = await this.userRepo.find();
      return SuccessfulProcess(result);
    } catch (exception) {
      return ErrorProcess(exception.message, null);
    }
  }

  async findOne(id: number) {
    try {
      const result = await this.userRepo.findOneBy({
        id_user: id,
      });
      return SuccessfulProcess(result);
    } catch (exception) {
      return ErrorProcess(exception.message, null);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.userRepo.findOneBy({
        id_user: id,
      });

      if (updateUserDto.username) {
        updatedUser.username = updateUserDto.username;
      }

      if (updateUserDto.password) {
        updatedUser.password = updateUserDto.password;
      }

      if (updateUserDto.name) {
        updatedUser.name = updateUserDto.name;
      }

      const result = await this.userRepo.save(updatedUser);
      return SuccessfulProcess(result, 'Usuario actualizado exitosamente');
    } catch (exception) {
      return ErrorProcess(exception.message, null);
    }
  }

  async remove(id: number) {
    try {
      const deletedUser = await this.userRepo.findOneBy({
        id_user: id,
      });

      const result = await this.userRepo.remove(deletedUser);

      return SuccessfulProcess(result, 'Usuario eliminado exitosamente');
    } catch (exception) {
      return ErrorProcess(exception.message, null);
    }
  }
}
