import { Controller, Post ,Request,Logger,UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { BasicAuthGurad } from './auth/basic-auth.guard';
import { Observable } from 'rxjs';


@Controller()
export class AppController {
  private readonly logger: Logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Post()
  @UseGuards(BasicAuthGurad)
  returnHeader(@Request() req): String {
    return this.appService.returnHeader(req);
  }

}
