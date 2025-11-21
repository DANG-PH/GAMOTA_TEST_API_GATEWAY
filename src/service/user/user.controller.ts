import { JwtAuthGuard } from 'src/security/JWT/jwt-auth.guard';
import { UserService } from './user.service';
import { Controller, Post, Body, UseGuards, Param, Get, Patch, Put, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody,ApiBearerAuth, ApiQuery, ApiParam } from '@nestjs/swagger';
import {SaveGameRequestDto} from "dto/user.dto"
import { Roles } from 'src/security/decorators/role.decorator';
import { Role } from 'src/enums/role.enum';
import { RolesGuard } from 'src/security/guard/role.guard';

@Controller('api/player')
@ApiTags('Api Player') 
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Get('profile/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'User xem profile của chính mình' })
  async profile(@Req() req: any) {
    const userId = req.user.userId;
    return this.userService.handleProfile({id: userId});
  }

  @Put('update')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'User lưu thông tin của mình vào database' })
  @ApiBody({ type:  SaveGameRequestDto })
  async saveGame(@Body() body: SaveGameRequestDto, @Req() req: any) {
    const userId = req.user.userId;
    const request = {
      user: {
        ...body.user,
        id: userId,
        auth_id: userId,
      }
    }
    return this.userService.handleSaveGame(request);
  }
}