import { ApiProperty } from '@nestjs/swagger';

export class CreateCollectionDto {

  @ApiProperty({ required: false })
  name: string;

  @ApiProperty()
  projectId: number;
}
