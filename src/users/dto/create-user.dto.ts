import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty( {required: true, default: "caian@gmail.com"} )
    email: string;

    @ApiProperty( {required: true, default: "Caian"} )
    username: string;

    @ApiProperty( {required: true, default: "S3nh@"} )
    password: string;
}
