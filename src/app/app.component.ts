import { Component } from "@angular/core";
import dialogs = require("ui/dialogs");

@Component({
    selector: "calculator",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent { 
    constructor() { }
    operation: string = '';
    result: string= '';

    append(element: string){
        this.operation += element;
    }
    
    undo(){
        if (this.operation != ''){
            this.operation = this.operation.slice(0, -1)
        }
    }
    
    clear(){
        this.result = '';
        this.operation = '';
    }
    
    evaluate(){
        try{
            this.result = eval(this.operation.replace("X","*"));
            console.log(this.result);
        }catch(e){
            console.error("Cannot evaluate expression!");
            dialogs.alert({title: 'Error', message: 'Cannot evaluate expression!', okButtonText: 'OK'});
        }        
    }

    ngOnInit(): void {
    }
}
