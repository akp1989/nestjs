import { CanActivate, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class BasicAuthGurad extends AuthGuard('basic') implements CanActivate {}