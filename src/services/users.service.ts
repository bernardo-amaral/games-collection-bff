import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repository/users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async findOne(email: string, password: string): Promise<User> {
    const user = this.userRepository.findOne(
      { email, password },
      {
        select: ['email', 'name', 'id'],
      },
    );

    if (!user) throw new NotFoundException('Usuário não encontrado');

    return user;
  }
}
