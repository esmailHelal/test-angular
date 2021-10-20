import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  switch = false;
  show = false;
  change_left_side: any = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient) {}
}
