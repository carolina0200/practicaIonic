import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registerForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, public alertController: AlertController, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      user:     new FormControl('', Validators.required),
      pass:     new FormControl('', Validators.required),
      passCon:  new FormControl('', Validators.required)
    });
  }

  async register() {
    if (this.validateFormulario(this.registerForm)) {
      if (this.registerForm.get('pass').value === this.registerForm.get('pass').value) {
        try {
          const res = await this.afAuth.auth.createUserWithEmailAndPassword(this.registerForm.get('user').value + '@caroapp.com' ,
          this.registerForm.get('pass').value);
          console.log(res);
        } catch (err) {
          console.dir(err);
        }
      } else {
        this.presentAlert('Confirme bien la contraseña');
      }
    }

  }


  private validateFormulario(form: FormGroup): boolean {
    this.marcarCamposInvalidos(form);
    if (form.valid) {
      return true;
    } else {
      this.presentAlert('Llene el formulario correctamente.');
      return false;
    }

  }

  public marcarCamposInvalidos(formulario: FormGroup) {
    Object.keys(formulario.controls).forEach(key => {
      if (formulario.get(key).invalid) {
        formulario.get(key).markAsDirty();
      }
    });
  }

  async presentAlert(text: string) {
    const alert = await this.alertController.create({
      header: 'Espere',
      subHeader: 'Login formulario',
      message: text,
      buttons: ['OK']
    });

    await alert.present();
  }

}
