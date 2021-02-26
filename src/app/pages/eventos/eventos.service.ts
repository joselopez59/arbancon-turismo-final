import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
@Injectable({
  providedIn: 'root'
})

export class EventosService {

  env = environment;

  constructor(
    private http: HttpClient,
    private apollo: Apollo
    ) { }

  getEventosPasados(today: Date) {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query ($date: DateTime)
        {
          eventos(
            where: { startTime_lt: $date }
            orderBy: startTime_DESC)
            {
              title
              descr
              startTime
              endTime
              allDay
              link
            }
        }
        `
        ,
        variables: {
          date: today
        }
    });

    return query.valueChanges;
  }

  getProximosEventos(today: Date) {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query ($date: DateTime)
        {
          eventos (
            where: {
              OR:
              [{startTime_gte: $date}, {endTime_gte: $date}]
            }
            orderBy: startTime_ASC
          )
            {
              title
              descr
              startTime
              endTime
              allDay
              link
            }
        }
        `
        ,
        variables: {
          date: today
        }
    });

    return query.valueChanges;
  }

  getCalendarEventos() {
    const query: QueryRef<any> = this.apollo.watchQuery({
      query: gql`
        query {
          eventos {
            title
            startTime
            endTime
            allDay
            link
          }
        }
      `
    });

    return query.valueChanges;
  }


  // getEventos() {
  //   return this.http.get(this.env.cmsURL + '/eventos/');
  // }
}
