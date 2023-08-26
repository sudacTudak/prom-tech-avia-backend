import { IsNotEmpty, IsString } from 'class-validator';

export class DeletePageDTO {
  @IsNotEmpty()
  @IsString()
  alias: string;
}
