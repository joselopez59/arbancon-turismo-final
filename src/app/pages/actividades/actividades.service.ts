import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ActividadesService {

  env = environment;

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) { }

  // getactividades() {
  //   return this.http.get(this.env.cmsURL + '/actividades');
  // }

  getActividades() {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query {
          getActividades {
            headText
            actividades {
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

  // getActividad(id) {
  //   return this.http.get(this.env.cmsURL + '/actividades/' + id);
  // }

  getActividad(ide: string) {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query ($id: ID!)
        {
          actividad (where: {id: $id})
          {
            name
            detail_img
            {
              url
            }
            text
            markdownText
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

