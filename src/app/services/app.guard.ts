import { Injectable } from "@angular/core";
import { CanLoad, CanActivate } from "@angular/router";

@Injectable()
export class AuthAppGuard implements CanLoad, CanActivate {

    user = { admin: true, logged: true };

    canLoad(): boolean {
        return this.user.logged;
    }

    canActivate(): boolean {
        return this.user.admin;
    }

}