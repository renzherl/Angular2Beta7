import { Component } from 'angular2/core';

@Component({
    selector: 'gotchas',
    styleUrls: ['app/gotchas.component.css'],
    template: `
    <div>
      <label>Double binding for select works for Beta0, Beta7 does not work for Beta1 </label>
      <label>Name:{{name}} </label>
      <select [(ngModel)]="name">
        <option *ngFor="#n of names" [value]="n">{{n}}</option>
      </select>
      <select [ngModel]="name" (change)="name=$event.target.value">
        <option *ngFor="#n of names" [value]="n">{{n}}</option>
      </select>
    </div>

    <div>
        <h3>Double binding for input date</h3>
        <h3>Date:{{date2}}</h3>
        <input type="date" [(ngModel)]="date2">
        <input type="text" [(ngModel)]="date2">
    </div>
    `
})

export class GotchasComponent {
    name = 'TypeScript';
    names = ['C', 'Sharp', 'Java'];

    date = new Date();
    date2 = "2000-01-02";
}
