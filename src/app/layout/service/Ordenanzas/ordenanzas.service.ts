import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/enviroments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Ordenanza } from '../../../interface/ordenanza.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdenanzasService {

  private Url: string = environment.baseUrl;
  constructor(private http:HttpClient){}

  private handleError(error: any): Observable<never> {
    console.error('Error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
}

  getOrdenanzas(): Observable<Ordenanza[]>{
    return this.http.get<{Ordenanza:Ordenanza[]}>(`${this.Url}/ordenanza`).pipe(map((data: {Ordenanza:Ordenanza[]}) => data.Ordenanza),
      catchError(this.handleError)
    );
  }

  addOrdenanza(ordenanza: Ordenanza):Observable<Ordenanza>{
    return this.http.post<Ordenanza>(`${this.Url}/ordenanza`,ordenanza);
  }

  updateOrdenanza(ordenanza:Ordenanza):Observable<Ordenanza>{
    return this.http.patch<Ordenanza>(`${this.Url}/ordenanza/${ordenanza.id}`,ordenanza);
  }

  deleteOrdenanza(id:BigInteger):Observable<Ordenanza>{
    return this.http.delete<Ordenanza>(`${this.Url}/ordenanza/${id}`);
  }


  // getMenuList(endpoint: string): Observable<MenuInterface[]>{
  //   return this.http.get<{lista: MenuInterface[]}>(`${this.apiUrl}/${endpoint}`).pipe(
  //       map((data: {lista: MenuInterface[]}) => data.lista),
  //       catchError(this.handleError)
  //   );

  
}
