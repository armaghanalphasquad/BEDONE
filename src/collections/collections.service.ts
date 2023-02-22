import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}
  create(createCollectionDto: CreateCollectionDto) {
    return this.prisma.collections.create({data:createCollectionDto});
  }

  findAll() {
    return this.prisma.collections.findMany();
  }

  findOne(id: number) {
    return this.prisma.collections.findUnique({where:{id}});
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return this.prisma.collections.update({where:{id},data: updateCollectionDto});
  }

  remove(id: number) {
    return this.prisma.collections.delete({where:{id}});
  }
}
