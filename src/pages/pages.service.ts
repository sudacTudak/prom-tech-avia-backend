import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePageDTO } from './dto/create-page.dto';
import { Page } from '@prisma/client';
import { UpdatePageDTO } from './dto/update-page.dto';
import { DeletePageDTO } from './dto/delete-page.dto';

@Injectable()
export class PagesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreatePageDTO): Promise<Page | null> {
    const createPageCredentials: Page = {
      alias: dto.alias,
      categoryName: dto.category,
      pageTitle: dto.pageTitle,
      contentTitle: dto.contentTitle,
      content: dto.content,
    };

    const page = await this.prismaService.page.create({
      data: createPageCredentials,
    });

    return page;
  }
  async update(dto: UpdatePageDTO): Promise<Page> {
    const { alias, ...updatePageCredentials } = dto;
    const { newAlias, ...updateContentCredentials } = updatePageCredentials;

    const updatedPage = await this.prismaService.page.update({
      where: { alias },
      data: {
        alias: newAlias,
        ...updateContentCredentials,
      },
    });

    return updatedPage;
  }
  async delete({ alias }: DeletePageDTO): Promise<Page> {
    const deletedPage = await this.prismaService.page.delete({
      where: { alias },
    });

    return deletedPage;
  }

  async findAll() {
    const pages = await this.prismaService.page.findMany();

    return pages;
  }

  async findByAlias() {}
}
