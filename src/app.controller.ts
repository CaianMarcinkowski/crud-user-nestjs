import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Obter mensagem de boas-vindas',
    description:
      'Esta rota retorna uma mensagem padrão de boas-vindas, incluindo o ambiente em que a aplicação está executando.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Mensagem de boas-vindas retornada com sucesso, incluindo o ambiente de execução.',
    schema: {
      type: 'string',
      example: 'Hello World! Ambiente de: development',
    },
  })
  getHello(): string {
    return this.appService.getHello() + 'Ambiente de: ' + process.env.NODE_ENV;
  }
}
