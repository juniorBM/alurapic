import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {PhotoListComponent} from './photo-list.component';
import {PhotosComponent} from './photos/photos.component';
import {LoadButtonComponent} from './load-button/load-button.component';
import {FilterByDescriptionPipe} from './filter-by-description.pipe';

@NgModule({declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe
  ],
  imports:[CommonModule, PhotoModule, CardModule]
})
export class PhotoListModule {}
