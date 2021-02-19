import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
// import { HttpClient } from '@angular/common/http';

// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EscapadasService {

  // env = environment;

  constructor(
    private apollo: Apollo,
    // private http: HttpClient
  ) { }

  // getEscapadas() {
  //   return this.http.get(this.env.cmsURL + '/escapadas/');
  // }

  getEscapadas() {
    const queryEscapadas: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query
        {
          getEscapadas {
            headText
            escapadas {
              name
              vendor
              features
              price
              list_img { url }
            }
          }
        }
      `
    });
    return queryEscapadas.valueChanges;
  }
}
