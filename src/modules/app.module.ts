import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UsersService } from '../services/users.service';
import { AuthModule } from './auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
