import { Component, OnInit } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
} from 'ngx-gallery-9';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {}

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true,
      },
    ];

    this.galleryImages = [
      {
        // small: 'assets/1-small.jpg',
        small: 'http://lorempixel.com/150/150',
        medium: 'http://lorempixel.com/600/600/',
        big: 'http://lorempixel.com/950/950/'
      },
      {
        small: 'http://lorempixel.com/150/150',
        medium: 'http://lorempixel.com/600/600/',
        big: 'http://lorempixel.com/950/950/'
      },
      {
        small: 'http://lorempixel.com/150/150',
        medium: 'http://lorempixel.com/600/600/',
        big: 'http://lorempixel.com/950/950/'
      },
      {
        small: 'http://lorempixel.com/150/150',
        medium: 'http://lorempixel.com/600/600/',
        big: 'http://lorempixel.com/950/950/'
      },
    ];
  }
}
