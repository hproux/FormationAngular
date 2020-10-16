import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order.enum';
import { Order } from '../models/order';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private collection$: Observable<Order[]>;
  public item$: BehaviorSubject<Order> = new BehaviorSubject(null);
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      tap((tab) => {
        this.item$.next(tab[0]);
      })
    );
  }

  // get collection
  get collection(): Observable<Order[]>{
    return this.collection$;
  }

  // set collection
  set collection(obj: Observable<Order[]>){
    this.collection$ = obj;
  }

  // change state item in collection
  public changeState(item: Order, state: StateOrder): Observable<Order>{
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Order): Observable<Order>{
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  /**
   * Add an item in collection with http
   * How to subscribe to this methode
   *
   * @exemple
   * this.os.add.subscribe((res)=> {});
   *
   * @return return an Observable<Order>
   * @param item Contain item to add
   */
public add(item: Order): Observable<Order>{
  return this.http.post<Order>(`${this.urlApi}/orders`, item);
}

  // delete item in collection
  public delete(id: number): Observable<Order>{
    return this.http.delete<Order>(`${this.urlApi}/orders/${id}`);
  }

  // get item by id
  public getById(id: string): Observable<Order>{
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

}
