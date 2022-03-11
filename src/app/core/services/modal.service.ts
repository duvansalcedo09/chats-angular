import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  public modal = new BehaviorSubject({});

  constructor() {}

  public openModal(output) {
    this.modal.next(output);
  }
}
