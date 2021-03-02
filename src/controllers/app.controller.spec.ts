import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UsersService } from '../services/users.service';
import { AuthModule } from '../modules/auth.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
      controllers: [AppController],
      providers: [AppService, UsersService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    const user = {
      username: 'john',
      password: 'changeme',
    };
    it('should return the access token', () => {
      expect(appController.login({ user }));
    });
  });
});
