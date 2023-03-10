import { Component, OnInit } from '@angular/core';
import { ImagenesServices } from '../images/images_service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  imagenes: any;

  constructor(public imagen: ImagenesServices) {}

  ngOnInit() {
    this.imagen.getImagenes().subscribe(
      (res) => {
        this.imagenes = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
