import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfimationMessage } from './../../typings/platform-typings';
import { Component, OnInit } from '@angular/core';
import { SingletonService } from 'src/app/services/singleton.service';

@Component({
  selector: 'app-custom-dialog-box',
  templateUrl: './custom-dialog-box.component.html',
  styleUrls: ['./custom-dialog-box.component.scss']
})
export class CustomDialogBoxComponent implements OnInit {

  public get getDialogMessageData(): ConfimationMessage | undefined {
     return this.ss?.confimationMessage;
  }

  constructor(private ss: SingletonService, private matDialog: MatDialogRef<CustomDialogBoxComponent>) { }

  ngOnInit(): void {
  }

}
