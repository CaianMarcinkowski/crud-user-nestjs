import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
    @ApiProperty( {required: true, default: "caian@gmail.com"} )
    email: string;

    @ApiProperty( {required: true, default: "S3nh@"} )
    password: string;
  }