import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
    @ApiProperty( {
        required: true, 
        default: "caian@gmail.com", 
        description: 'Endereço de email do usuário', 
        example: 'usuario@exemplo.com'} )
    email: string;

    @ApiProperty( {
      required: true, 
      default: "S3nh@", 
      description: 'Senha do usuário',
      example: 'senha123'} )
    password: string;
  }