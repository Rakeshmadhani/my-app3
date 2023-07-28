import { AbstractControl } from "@angular/forms";


export function domainValidators(control:AbstractControl){

    if(control. value?.includes('@capgemini')){
        return null;
        
    }
    else{
        return{'domainValidators': '@capgemini.com mising'};
    }
}
export function stateValidators(control:AbstractControl){

    if(control. value?.toLowerCase() == 'telangana' || control. value?.toLowerCase() == 'andra pradesh'  ){
        return null;
        
    }
    else{
        return{'stateValidators': 'Only TS AP accepted'};
    }
}