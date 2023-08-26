import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDTO } from './dto/create-page.dto';
import { UpdatePageDTO } from './dto/update-page.dto';
import { DeletePageDTO } from './dto/delete-page.dto';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  async create(@Body() dto: CreatePageDTO) {
    const page = await this.pagesService.create(dto);
    if (!page) {
      throw new Error('Failed to create page');
    }
    return page;
  }

  @Post()
  update(@Body() dto: UpdatePageDTO) {
    return null;
  }

  @Delete()
  delete(@Body() dto: DeletePageDTO) {
    return null;
  }

  @Get()
  findAll() {
    return null;
  }

  @Get()
  findByAlias() {
    return null;
  }
}
