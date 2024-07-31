import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class LoginAuthDto{

  @IsEmail({},{message:"Formato de correo inválido"})
  @IsNotEmpty({message: "Se requiere el correo"})
  @ApiProperty()
  email: string

  @ApiProperty()
  @IsNotEmpty({message: "Se requiere la contraseña"})
  password: string
}