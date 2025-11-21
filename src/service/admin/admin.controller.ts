import { JwtAuthGuard } from 'src/security/JWT/jwt-auth.guard';
import { UserService } from '../user/user.service';
import { Controller, Post, Body, UseGuards, Param, Get, Patch, Put, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody,ApiBearerAuth, ApiQuery, ApiParam } from '@nestjs/swagger';
import {SaveGameRequestDto,GetUserRequestDto} from "dto/user.dto"
import { Roles } from 'src/security/decorators/role.decorator';
import { Role } from 'src/enums/role.enum';
import { RolesGuard } from 'src/security/guard/role.guard';

@Controller('api/admin')
@ApiTags('Api Admin') 
export class AdminController {
  constructor(private readonly userService: UserService) {}

  @Get('profile-admin/:id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Lấy thông tin của 1 user bất kì dựa trên auth id của user đó' })
  async profileadmin(@Param() param: GetUserRequestDto) {
    return this.userService.handleProfile(param);
  }
}