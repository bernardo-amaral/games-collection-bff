import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LocalStrategy } from '../auth/local.strategy';
import { JwtStrategy } from '../auth/jwt.strategy';
import { UsersModule } from './users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';
import { UserRepository } from '../repository/users.repository';
import { UsersService } from '../services/users.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    UserRepository,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UserRepository,
    UsersService,
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
