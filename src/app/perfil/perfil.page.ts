import { Component, OnInit } from '@angular/core';
import { HobbitsService } from '../services/hobbits.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private hobbit: HobbitsService, private storage: Storage, private navCtrl: NavController, private camera: Camera) { }
  myPhoto: any;

  content = document.querySelector('ion-content');
  view: number[] = [350, 300];
  data: any[] = [];
  colorScheme: any;
  interval: number;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  showLegend: boolean;

  ngOnInit() {

    this.data = this.hobbit.getData();

    this.colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
  }

  ionViewDidLoad() {
    this.applyDimensions();
    window.addEventListener('resize', () => {
      this.applyDimensions();
    }, false);
  }

  ionViewDidLeave() {
    clearInterval(this.interval);
    window.removeEventListener('resize', () => {
      console.log('aja');
    });
  }

  applyDimensions() {
    const width = this.content.offsetWidth - 50;
    const state = width >= 320;
    this.showXAxisLabel = state;
    this.showYAxisLabel = state;
    this.showLegend = state;
    this.view = [width, 300];
  }

  logout() {
    this.storage.remove('user');
    this.navCtrl.navigateForward('/login');
  }

  takePhoto() {
    console.log('take phto');
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  uploadImage() {

  }
}
