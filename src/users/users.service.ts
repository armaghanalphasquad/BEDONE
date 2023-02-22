import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Users } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  create(createUserDto: CreateUserDto){
    return this.prisma.users.create({ data: createUserDto })
  }



  findAll() {
    return this.prisma.users.findMany({
      include:{
        projects:{
          include:{
            collections:{
              include:{
                apirequests:{}
              }
            } }
        }
      }
    });
  }

  findOne(email: string) {
    return this.prisma.users.findUnique({where: {email}});
  }

  /*findOne2(username: string) {
    return this.prisma.users.findFirst({where:{username}});
    return this.users.find(user => user.username === username);
  }*/


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
