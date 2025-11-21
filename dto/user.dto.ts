import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsInt, IsNumber, IsOptional, Min, Max, IsBoolean, IsArray,ValidateNested } from 'class-validator';

// ===== USER =====
export class UserDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number;

  @ApiProperty({ example: 1000 })
  @IsNumber()
  vang: number;

  @ApiProperty({ example: 200 })
  @IsNumber()
  sucManh: number;

  @ApiProperty({ example: 123 })
  @IsOptional()
  @IsInt()
  auth_id: number;
}

export class UserDtoNoId {
  @ApiProperty({ example: 1000 })
  @IsNumber()
  vang: number;

  @ApiProperty({ example: 200 })
  @IsNumber()
  sucManh: number;
}

// ===== REGISTER =====
export class RegisterRequestDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number;
}

export class RegisterResponseDto {
  @ApiProperty({ example: true })
  success: boolean;
}

// ===== GET PROFILE =====
export class GetUserRequestDto {
  @ApiProperty({ example: 1 })
  @Type(() => Number) 
  @IsInt()
  id: number;
}

export class UserResponseDto {
  @ApiProperty({ type: UserDto })
  user: UserDto;
}

// ===== SAVE GAME =====
export class SaveGameRequestDto {
  @ApiProperty({ type: UserDtoNoId })
  @ValidateNested()     //Báo cho class-validator rằng trường này là object con cần validate theo class của nó.Nếu thiếu, object sẽ bị coi là một property bình thường → ValidationPipe sẽ loại bỏ vì trong kia k có field nào tên user.
  @Type(() => UserDtoNoId)    
  user: UserDtoNoId;
}

export class SaveGameResponseDto {
  @ApiProperty({ example: 'Lưu game thành công' })
  @IsString()
  message: string;
}
