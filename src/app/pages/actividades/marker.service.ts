import { Injectable } from '@angular/core';

import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MarkerService {

  env = environment;

  // pois: string = '/assets/map/pois2.json';
  // pois: string = this.env.poisURL + "/pois";
  // pois: string = this.env.cmsURL + '/pois';

  constructor(
    private apollo: Apollo,
    private http: HttpClient
  ) {}

  // getPois(layer: string) {
  //   return this.http.get(this.env.cmsURL + '/' + layer );
  // }

  getPois() {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query {
          pois {
            id
            name
            lat
            lon
            iconMap { url }
          }
        }
      `
    });
    return query.valueChanges;
  }

  getPoisTurismo() {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query {
          poisTurismos {
            id
            name
            lat
            lon
            iconMap { url }
          }
        }
      `
    });
    return query.valueChanges;
  }

  getTextPois() {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query {
          mapTexts {
            id
            lat
            lon
            iconText
          }
        }
      `
    });
    return query.valueChanges;
  }

}
