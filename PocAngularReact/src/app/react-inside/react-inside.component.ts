import { ReactTreeView } from './react-tree-view';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-inside',
  templateUrl: './react-inside.component.html',
  styleUrls: ['./react-inside.component.css']
})

export class ReactInsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    ReactTreeView.render('toto');

  }

}
