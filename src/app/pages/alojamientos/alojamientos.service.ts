import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

// import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AlojamientosService {

  // env = environment;

  constructor(
    private apollo: Apollo,
    // private http: HttpClient
  ) { }

  // getAlojamientos() {
  //   return this.http.get(this.env.cmsURL + '/alojamientos/');
  // }

  getAlojamientos() {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query {
          getAlojamientos {
            headText
            alojamientos {
              id
              name
              shortProfil
              list_img { url }
            }
          }
        }
      `
    });
    return query.valueChanges;
  }

  // getAlojamiento(id) {
  //   return this.http.get(this.env.cmsURL + '/alojamientos/' + id);
  // }
  getAlojamiento(ide: string) {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query ($id: ID!)
        {
          alojamiento (where: {id: $id})
          {
            name
            slider { url }
            features
            profil
            footers {
              label
              icon
              url
            }
            legals {
              propietario
              calle
              localidad
              provincia
              gmapsURL
              telefono
              mail
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
