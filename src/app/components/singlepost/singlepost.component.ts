import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/data/post';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
  @Input() post: Post | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
