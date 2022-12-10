import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Photo} from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnChanges {
  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.photos)
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]) {
    // const newRows = [];
    const newRows: any[] = [];

    for (let index = 0; index < photos.length; index += 3) {
      // console.log(photos.slice(index, index + 3));
      newRows.push(photos.slice(index, index + 3));
    }
    console.log(newRows);
    return newRows;
  }
}
