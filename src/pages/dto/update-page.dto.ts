import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePageDTO {
  @IsNotEmpty()
  @IsString()
  alias: string;

  @IsOptional()
  @IsString()
  newAlias: string;

  @IsOptional()
  @IsString()
  categoryName?: string;

  @IsOptional()
  @IsString()
  pageTitle?: string;

  @IsOptional()
  @IsString()
  contentTitle?: string;

  @IsOptional()
  @IsString()
  content?: string;
}
