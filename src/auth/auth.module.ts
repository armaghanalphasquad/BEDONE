import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { UsersService } from 'src/users/users.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  providers: [AuthService, LocalStrategy,UsersService,PrismaService],
})
export class AuthModule {}
