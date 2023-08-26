import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PagesModule } from './pages/pages.module';

@Module({
  imports: [PagesModule],
  providers: [PrismaService],
})
export class AppModule {}
