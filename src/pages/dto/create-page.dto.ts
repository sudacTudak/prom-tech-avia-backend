import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePageDTO {
  @IsNotEmpty()
  @IsString()
  alias: string;

  @IsString()
  category: string;

  @IsString()
  pageTitle: string;

  @IsString()
  contentTitle: string;

  @IsString()
  content: string;
}
