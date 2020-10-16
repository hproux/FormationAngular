import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-notes-order',
  templateUrl: './notes-order.component.html',
  styleUrls: ['./notes-order.component.scss']
})
export class NotesOrderComponent implements OnInit {

  public comment = new FormControl('');


  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.os.item$.subscribe((data) => {
      if (data){
        this.comment.setValue(data.comment);
      }
    });

    this.comment.valueChanges.pipe(
      debounceTime(400)
    ).subscribe(
      (txt) => {
      this.os.item$.value.comment = txt;
      this.os.update(this.os.item$.value).subscribe((res) => {
        console.log(res);
      });
    });
  }

}
