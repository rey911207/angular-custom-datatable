import { Component } from '@angular/core';
import { GuiColumn } from '@generic-ui/ngx-grid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataBefore = {};
  dataAfter = {};
  columns: Array<GuiColumn> = [
    {
      header: 'Name',
      field: 'name'
    },
    {
      header: 'Job',
      field: 'job'
    },
    {
      header: 'Age5',
      field: 'age'
    }];

  source: Array<any> = [
    {
      name: 'Brad',
      job: 'programmer juan dsdsds',
      age: '40'
    },
    {
      name: 'John',
      job: 'athlete',
      age: '22'
    },
    {
      name: 'Eve',
      job: 'artist',
      age: '25'
    }];

    sendData() {
      console.log('no values');
    }

    sendDataValues(event) {
      console.log('test', event);
      this.dataBefore = event.before;
      this.dataAfter = event.after;
    }
}
