import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from '../auth/dto/login-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: 'Cadastrar usuário',
    description: 'Cadastra um novo usuário no sistema. O corpo da requisição deve conter os dados necessários para criar um usuário.',
  })
  @ApiBody({
    description: 'Dados necessários para criar um novo usuário',
    type: CreateUserDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Usuário cadastrado com sucesso.',
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          example: 1,
        },
        username: {
          type: 'string',
          example: 'João da Silva',
        },
        password: {
          type: 'string',
          example:
            '$2b$10$JIsiCc9Kjy1CJPd67ko1Fez.DLWVI/I0uFQPndpk6vjxKBjUCepW.',
        },
        email: {
          type: 'string',
          example: 'usuario@exemplo.com',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Usuário já existe. Verifique as credenciais fornecidas.',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Usuário já existe.',
        },
        error: {
          type: 'string',
          example: 'Conflict',
        },
        statusCode: {
          type: 'number',
          example: 401,
        },
      },
    },
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Obter todos os usuários',
    description:
      'Retorna uma lista de todos os usuários cadastrados. Requer autenticação com token JWT. É necessário efetuar login na rota /login para obter um token.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários retornada com sucesso.',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            example: 1,
          },
          username: {
            type: 'string',
            example: 'João da Silva',
          },
          password: {
            type: 'string',
            example:
              '$2b$10$JIsiCc9Kjy1CJPd67ko1Fez.DLWVI/I0uFQPndpk6vjxKBjUCepW.',
          },
          email: {
            type: 'string',
            example: 'usuario@exemplo.com',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Não autorizado. Token inválido ou não fornecido.',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Não autorizado. Token inválido ou não fornecido.',
        },
        error: {
          type: 'string',
          example: 'Unauthorized',
        },
        statusCode: {
          type: 'number',
          example: 401,
        },
      },
    },
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Obter usuário por ID',
    description:
      'Retorna um usuário com base no ID fornecido. Requer autenticação com token JWT. É necessário efetuar login na rota /login para obter um token.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do usuário a ser retornado',
    type: 'string',
    example: '1',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso.',
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          example: 1,
        },
        username: {
          type: 'string',
          example: 'João da Silva',
        },
        password: {
          type: 'string',
          example:
            '$2b$10$JIsiCc9Kjy1CJPd67ko1Fez.DLWVI/I0uFQPndpk6vjxKBjUCepW.',
        },
        email: {
          type: 'string',
          example: 'usuario@exemplo.com',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Não autorizado. Token inválido ou não fornecido.',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Não autorizado. Token inválido ou não fornecido.',
        },
        error: {
          type: 'string',
          example: 'Unauthorized',
        },
        statusCode: {
          type: 'number',
          example: 401,
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Usuário não encontrado.',
        },
        error: {
          type: 'string',
          example: 'Not Found',
        },
        statusCode: {
          type: 'number',
          example: 404,
        },
      },
    },
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Atualiza o cadastro de um usuário - Requer autenticação',
    description:
      'Esta rota atualiza o cadastro de um usuário de acordo com o id passado. É necessario efetuar login na rota login para obter um token para poder usar esta rota.',
  })
  @ApiParam({ name: 'id', description: 'ID do usuário', type: String })
  @ApiBody({
    description: 'Dados para atualizar o usuário',
    type: UpdateUserDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário atualizado com sucesso.',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Usuário atualizado com sucesso.',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description:
      'Requisição inválida. Dados fornecidos para atualização são inválidos.',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Dados inválidos fornecidos para atualização.',
        },
        error: {
          type: 'string',
          example: 'Bad Request',
        },
        statusCode: {
          type: 'number',
          example: 400,
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Não autorizado. Token inválido ou não fornecido.',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Não autorizado. Token inválido ou não fornecido.',
        },
        error: {
          type: 'string',
          example: 'Unauthorized',
        },
        statusCode: {
          type: 'number',
          example: 401,
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Usuário não encontrado.',
        },
        error: {
          type: 'string',
          example: 'Not Found',
        },
        statusCode: {
          type: 'number',
          example: 404,
        },
      },
    },
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Remove o cadastro de um usuário - Requer autenticação',
    description:
      'Esta rota remove o cadastro de um usuário de acordo com o id passado por parâmetro. É necessario efetuar login na rota login para obter um token para poder usar esta rota.',
  })
  @ApiParam({ name: 'id', description: 'ID do usuário', type: String })
  @ApiResponse({
    status: 200,
    description: 'Usuário removido com sucesso.',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Usuário removido com sucesso.',
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Usuário não encontrado.',
        },
        error: {
          type: 'string',
          example: 'Not Found',
        },
        statusCode: {
          type: 'number',
          example: 404,
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Não autorizado. Token inválido ou não fornecido.',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Não autorizado. Token inválido ou não fornecido.',
        },
        error: {
          type: 'string',
          example: 'Unauthorized',
        },
        statusCode: {
          type: 'number',
          example: 401,
        },
      },
    },
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Efetua o login de um usuário',
    description: 'Esta rota efetua o login de um usuário ja cadastrado.',
  })
  @ApiBody({
    description: 'Dados para autenticação do usuário',
    type: LoginUserDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Login realizado com sucesso. Retorna um token JWT.',
    schema: {
      type: 'object',
      properties: {
        access_token: {
          type: 'string',
          example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          description:
            'JWT token que deve ser usado para autenticação nas demais rotas.',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Credenciais inválidas.',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Credenciais inválidas.',
        },
        error: {
          type: 'string',
          example: 'Unauthorized',
        },
        statusCode: {
          type: 'number',
          example: 401,
        },
      },
    },
  })
  login(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.login(loginUserDto);
  }
}
