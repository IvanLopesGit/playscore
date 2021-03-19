import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  time: string;
  tempo: string;
  score: string;
  time2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { tempo: "32'", time: 'Real Madri', score: '2 x 0', time2: 'Real Madri' },
  { tempo: "41'", time: 'Real Madri', score: '3 x 3', time2: 'Real Madri' },
  { tempo: "20'", time: 'Real Madri', score: '1 x 0', time2: 'Real Madri' },
  { tempo: "57'", time: 'Real Madri', score: '0 x 0', time2: 'Real Madri' },
  { tempo: "10'", time: 'Real Madri', score: '2 x 2', time2: 'Real Madri' },
  { tempo: "90'", time: 'Real Madri', score: '0 x 5', time2: 'Real Madri' },
];

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css'],
})
export class TabGroupComponent implements OnInit {
  displayedColumns: string[] = ['tempo', 'time', 'score', 'time2'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
