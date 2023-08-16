import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  returnHeader(request: Request): String {
   
    var requestHeader = request.headers;
    return JSON.stringify(requestHeader);   

  }
}
