import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { JwtStrategy } from 'src/security/JWT/jwt.strategy';
import { RolesGuard } from 'src/security/guard/role.guard';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AdminController],
  providers: [JwtStrategy,RolesGuard],
})
export class AdminModule {}
