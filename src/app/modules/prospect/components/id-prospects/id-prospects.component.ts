import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogInfoComponent } from './dialog-info/dialog-info.component';

@Component({
  selector: 'app-id-prospects',
  templateUrl: './id-prospects.component.html',
  styleUrls: ['./id-prospects.component.scss']
})
export class IdProspectsComponent implements OnInit {

  public nom = 'Doe';
  public prenom = 'John';
  public civilite = 'M.';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      width: '900px',
      height: '600px',
      data: {nom: this.nom, prenom: this.prenom, civilite: this.civilite}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}

