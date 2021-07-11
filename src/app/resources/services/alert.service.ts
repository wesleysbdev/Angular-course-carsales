import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public success(message: string, title?: string): void {
    this.showAlert(title, message, 'success');
  }

  public info(message: string, title?: string): void {
    this.showAlert(title, message, 'info');
  }

  public error(message: string, title?: string): void {
    this.showAlert(title, message, 'error');
  }

  public confirm(text: string, title?: string, acceptFunction?: () => void, rejectFunction?: () => void): void {
    Swal.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#0f4e61',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.isConfirmed) {
        acceptFunction();
      }
      if (result.isDismissed && rejectFunction !== undefined) {
        rejectFunction();
      }
    });
  }

  private showAlert(
    title: string,
    message: string,
    icon: SweetAlertIcon
  ): void {
    Swal.fire(title, message, icon);
  }

}
