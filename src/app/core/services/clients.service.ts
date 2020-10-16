import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateClient } from '../enums/state-client.enum';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private collection$: Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  // get collection
  get collection(): Observable<Client[]>{
    return this.collection$;
  }

  // set collection
  set collection(obj: Observable<Client[]>){
    this.collection$ = obj;
  }

  // change state item in collection
  public changeState(item: Client, state: StateClient): Observable<Client>{
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

    // update item in collection
    public update(item: Client): Observable<Client>{
      return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
    }

  /**
   * Add an item in collection with http
   * How to subscribe to this methode
   *
   * @exemple
   * this.os.add.subscribe((res)=> {});
   *
   * @return return an Observable<Client>
   * @param item Contain item to add
   */
  public add(item: Client): Observable<Client>{
    return this.http.post<Client>(`${this.urlApi}/clients`, item);
  }

    // delete item in collection
    public delete(id: number): Observable<Client>{
      return this.http.delete<Client>(`${this.urlApi}/clients/${id}`);
    }

    // get item by id
    public getById(id: string): Observable<Client>{
      return this.http.get<Client>(`${this.urlApi}/clients/${id}`);
    }
}
