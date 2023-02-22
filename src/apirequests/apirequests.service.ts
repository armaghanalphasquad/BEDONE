import { Injectable } from '@nestjs/common';
import { CreateApirequestDto } from './dto/create-apirequest.dto';
import { UpdateApirequestDto } from './dto/update-apirequest.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApirequestsService {
  constructor(private prisma: PrismaService) {}
  create(createApirequestDto: CreateApirequestDto) {
    return this.prisma.apirequests.create({data:createApirequestDto});
  }

  findAll() {
    return this.prisma.apirequests.findMany();
  }

  findOne(id: number) {
    return this.prisma.apirequests.findUnique({where:{id}});
  }

  update(id: number, updateApirequestDto: UpdateApirequestDto) {
    return this.prisma.apirequests.update({where:{id},data: updateApirequestDto})
  }

  remove(id: number) {
    return this.prisma.apirequests.delete({where:{id}});
  }
}
