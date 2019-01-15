import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { NavController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private storage: Storage, private navCtrl: NavController,
    public alertController: AlertController, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      user: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
    });
  }

  changeData() {
    console.log('local');
    this.storage.set('user', this.loginForm.get('user').value);
    this.navCtrl.navigateForward('/');

  }

  async login() {
    if (this.validateFormulario(this.loginForm)) {
      try {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.get('user').value + '@caroapp.com',
          this.loginForm.get('pass').value);
          this.changeData();
      } catch (err) {
        console.dir(err);
        if (err.code === 'auth/user-not-found') {
          this.presentAlert('El usuario no existe');
          console.log('user not found');
        }
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
