import {Injectable} from "@angular/core";
/**
 * Created by kalaisr on 20-05-2017.
 */

@Injectable()
export class CompanySetupService{
    getSites():string[]
   {
   /* sites:string[]=["Montreal","chennai"];
    return sites;*/
   return ["Montreal","chennai"];
   }
}