import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'Email do usuário',
    example: 'caian@exemplo.com',
  })
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'senha123',
  })
  password: string;

  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Caian Marcinkowski Ferreira',
  })
  name: string;
}
