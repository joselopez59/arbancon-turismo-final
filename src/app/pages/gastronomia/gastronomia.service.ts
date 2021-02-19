import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class GastronomiaService {

  constructor(
    private apollo: Apollo,
  ) { }

  getGastronomias() {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query {
          getGastronomias{
            headText
            gastronomias {
              id
              name
              features
              list_img { url }
            }
          }
        }
      `
    });
    return query.valueChanges;
  }

  getGastronomia(ide: string) {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query ($id: ID!)
        {
          gastronomia (where: {id: $id})
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
            legal {
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

  getOfertas() {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query {
          getOfertas{
            headText
            ofertas {
              name
              imagen { url }
            }
          }
        }
      `
    });
    return query.valueChanges;
  }
}
