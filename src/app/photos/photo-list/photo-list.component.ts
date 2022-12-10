import {Component, OnDestroy, OnInit} from '@angular/core';
import {Photo} from '../photo/photo';
import {PhotoService} from '../photo/photo.service';
import {ActivatedRoute} from '@angular/router';
import {filter, Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName = '';

  constructor(private photoService: PhotoService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.paramMap.get('userName') ?? '';

    this.photos = this.activatedRoute.snapshot.data['photos'];

    this.debounce.pipe(
      debounceTime(300)
    ).subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  filterPhoto($event: KeyboardEvent) {
    const el = $event.target as HTMLInputElement;
    this.debounce.next(el.value);
    // this.filter = el.value;

  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(photos => {
      // this.photos.push(...photos);
      this.photos = this.photos.concat(photos);
      if (!photos.length) this.hasMore = false;
    })
  }
}
