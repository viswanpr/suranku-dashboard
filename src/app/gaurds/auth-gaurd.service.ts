/**
 * Created by kalaisr on 14-05-2017.
 */

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
import {Router} from '@angular/router';

@Injectable()
export class AuthGaurd implements CanActivate
{
    constructor(private router: Router) { }
canActivate()
{
    return true;
}
}
