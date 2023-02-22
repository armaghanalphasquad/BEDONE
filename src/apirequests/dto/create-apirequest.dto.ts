import { ApiProperty } from '@nestjs/swagger';

export class CreateApirequestDto {

  @ApiProperty({ required: false })
  name: string;

  @ApiProperty()
  collectionId: number;

  @ApiProperty()
  method: string;

  @ApiProperty()
  queryparams: string;

  @ApiProperty()
  body: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  request: string;

  @ApiProperty()
  response: string;

}
