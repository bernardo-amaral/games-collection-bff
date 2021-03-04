import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../repository/users.repository';
import { UsersService } from '../services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UsersService, UserRepository],
  exports: [UsersService],
})
export class UsersModule {}
