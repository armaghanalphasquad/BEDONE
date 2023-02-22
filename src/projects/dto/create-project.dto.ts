import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {

  @ApiProperty({ required: false })
  name: string;

  @ApiProperty()
  userId: number;
}
