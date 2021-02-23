import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PatrimonioService {

  env = environment;

  constructor(
    // private http: HttpClient,
    private apollo: Apollo
     ) { }

  getPatrimonios() {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query {
          getPatrimonios {
            headText
            patrimonios {
              id
              name
              list_img {
                url
              }
            }
          }
        }
      `
    });
    return query.valueChanges;
  }

  // getPatrimonios() {
  //   return this.http.get(this.env.cmsURL + '/patromonios/');  // TO DO: Corregir
  // }

  // getPatrimonio(id) {
  //   return this.http.get(this.env.cmsURL + '/patromonios/' + id);
  // }

  getPatrimonio(ide: string) {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query ($id: ID!)
        {
          patrimonio(where: {id: $id})
          {
            name
            detail_img
            {
              url
            }
            text
            markdownText
            buttons {
              icon
              label
              url
            }
          }
        }
      `,
      variables: {
        id: ide
      }
    });
    return query.valueChanges;
  }
}
