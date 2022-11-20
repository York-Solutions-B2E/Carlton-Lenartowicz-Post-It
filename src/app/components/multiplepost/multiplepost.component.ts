import { Component, OnInit } from '@angular/core';
import { Post } from 'src/data/post';

@Component({
  selector: 'app-multiplepost',
  templateUrl: './multiplepost.component.html',
  styleUrls: ['./multiplepost.component.css']
})
export class MultiplepostComponent implements OnInit {
public posts: Post[] = [
new Post('Title 1','Message 1', 'Owner 1'),
new Post('Welcome','Thanks for reading my note', 'Carlton Lenarotwicz')

]
  constructor() { }

  ngOnInit(): void {
  }

}
