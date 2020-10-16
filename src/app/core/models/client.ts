
import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  tva = 0;
  totalCaHt: number;
  state = StateClient.ACTIVE;
  id: number;
  name: string;
  comment: string;

  constructor(obj?: Partial<Client>){
    if (obj){
      Object.assign(this, obj);
    }
  }
}
