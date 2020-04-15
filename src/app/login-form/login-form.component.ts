import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  titleLogin: string = 'Inicio de sesión';
  messageRequiredValues: string = 'Debe ingresar Email y Password :(';

  @ViewChild('inputEmail', {static: false}) inputEmail: ElementRef;
  @ViewChild('inputPassword', {static: false}) inputPassword: ElementRef;

  showValidationMessage: boolean = false;
  hiddenComponentLogin: boolean = false;
  hiddenContent: boolean = false;

  @Output() sendHiddenContent = new EventEmitter<boolean>();

  sendShowCatalog(){
    this.sendHiddenContent.emit(this.hiddenContent);
    console.log('Se envía "false" en sendHiddenCatalogue');
  }

  ngOnInit(): void {
  }

  loginUser() {
    if (this.isValid() === true){
        this.showValidationMessage = false;
        this.hiddenComponentLogin = true;
        this.sendShowCatalog();
        console.log('Login correcto');
      }else{        
        console.log('Ingrese todos los datos');
        this.showValidationMessage = true;
    }
  }


  isValid() {
    var out: boolean = false;
    if (this.inputEmail.nativeElement.value === '' ||
        this.inputPassword.nativeElement.value === ''){
      out = false;
    }else {
      out = true;
    }
    return out;
  }

}
