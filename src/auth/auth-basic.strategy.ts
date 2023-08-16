import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException,Logger } from '@nestjs/common'; 
import { ConfigService } from '@nestjs/config';
import { BasicStrategy as Strategy } from 'passport-http';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy,'basic') {
    private readonly logger: Logger = new Logger(BasicStrategy.name);
    constructor(
        private readonly configService: ConfigService,
    ) {
        super({
            passReqToCallback: true
        });
    }

    public validate = async (req, username, password): Promise<boolean> => {
        this.logger.debug(`Auth validation using credentials :  ${username}, ${password}`);
        if (            
            username === 'testuser' &&
            password === 'password'
        ) {
            return true;
        }
        throw new UnauthorizedException();
    }
}