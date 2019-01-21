import { Component, OnInit } from '@angular/core';
import { mobiscroll } from '@mobiscroll/angular';


mobiscroll.settings = {
  theme: 'ios'
};

const now = new Date();

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage  {

  calendar: Date;
  calendarSettings: any = {
      display: 'inline',
      theme: 'ios',
      layout: 'liquid',
      markedDisplay: 'bottom',
      marked: [{
          d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5),
          color: 'rgb(28, 161, 227)'
      }, {
          d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6),
          color: 'rgb(28, 161, 227)'
      }, {
          d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7),
          color: 'rgb(28, 161, 227)'
      }, {
          d: new Date(now.getFullYear(), now.getMonth() + 1, 15),
          color: 'rgb(28, 161, 227)'
      }, {
          d: '11/30',
          color: 'rgb(163, 0, 38)'
      }, {
          d: '5/23',
          color: 'rgb(163, 0, 38)'
      }, {
          d: '3/12',
          color: 'rgb(163, 0, 38)'
      }, {
          d: '14',
          color: 'rgb(204,204,0)'
      }, {
          d: 'w5',
          color: 'rgb(34, 139, 34)'
      }, {
          d: '1/1',
          color: 'rgb(250,104,0)'
      }, {
          d: '1/2',
          color: 'rgb(250,104,0)'
      }, {
          d: '6/4',
          color: 'rgb(250,104,0)'
      }, {
          d: '8/4',
          color: 'rgb(250,104,0)'
      }, {
          d: '12/25',
          color: 'rgb(250,104,0)'
      }, {
          d: '12/26',
          color: 'rgb(250,104,0)'
      }],
      onSetDate: (event, inst) => {
        console.log(event);
    },
  };
  listviewItems = [{
      id: 1,
      text: 'Garbage collection'
  }, {
      id: 2,
      text: 'Special events'
  }, {
      id: 3,
      text: 'Town council meeting'
  }, {
      id: 4,
      text: 'Town hall closed'
  }, {
      id: 5,
      text: 'National holidays'
  }];
  listviewOptions: any = {
      theme: 'ios',
      swipe: true
  };

}
