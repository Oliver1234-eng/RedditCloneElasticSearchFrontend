import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private findCommunityByName = 'http://localhost:8080/api/v1/communityDocument/name';
  private findCommunityByDescription = 'http://localhost:8080/api/v1/communityDocument/description';
  private findCommunityByRules = 'http://localhost:8080/api/v1/communityDocument/rules';
  private findCommunityByUser = 'http://localhost:8080/api/v1/communityDocument/user';
  private findCommunityByPostCount = 'http://localhost:8080/api/v1/communityDocument/postCount';
  private findCommunityByPostCountGreaterThan = 'http://localhost:8080/api/v1/communityDocument/postCountGreaterThan';
  private findCommunityByPostCountLessThan = 'http://localhost:8080/api/v1/communityDocument/postCountLessThan';
  private findCommunityByAverageKarma = 'http://localhost:8080/api/v1/communityDocument/averageKarma';
  private findCommunityByAverageKarmaGreaterThan = 'http://localhost:8080/api/v1/communityDocument/averageKarmaGreaterThan';
  private findCommunityByAverageKarmaLessThan = 'http://localhost:8080/api/v1/communityDocument/averageKarmaLessThan';
  private findCommunityByNameAndUser = 'http://localhost:8080/api/v1/communityDocument';
  private findCommunityByNameOrUser = 'http://localhost:8080/api/v1/communityDocument';
  private findCommunityByNameFuzzyQuery = 'http://localhost:8080/api/v1/communityDocument';
  private findCommunityByDescriptionPhraseQuery = 'http://localhost:8080/api/v1/communityDocument';
  private addNewCommunity = 'http://localhost:8080/api/v1/communityDocument';
  private addNewCommunityPDF = 'http://localhost:8080/api/v1/communityDocument/pdf';

  constructor(private http: HttpClient) { }

  searchCommunityByName(name: string): Observable<any> {
    const requestBody = { name: name };
    return this.http.post(this.findCommunityByName, requestBody);
  }

  searchCommunityByDescription(description: string): Observable<any> {
    const requestBody = { description: description };
    return this.http.post(this.findCommunityByDescription, requestBody);
  }

  searchCommunityByRules(rules: string): Observable<any> {
    const requestBody = { rules: rules };
    return this.http.post(this.findCommunityByRules, requestBody);
  }

  searchCommunityByUser(user: string): Observable<any> {
    const requestBody = { user: user };
    return this.http.post(this.findCommunityByUser, requestBody);
  }

  getCommunityDocumentsByPostCount(postCount1: number, postCount2: number): Observable<any> {
    const url = `${this.findCommunityByPostCount}/${postCount1}/to/${postCount2}`;
    return this.http.get(url);
  }

  getCommunityDocumentsByPostCountGreaterThan(postCount: number): Observable<any> {
    const url = `${this.findCommunityByPostCountGreaterThan}/${postCount}`;
    return this.http.get(url);
  }

  getCommunityDocumentsByPostCountLessThan(postCount: number): Observable<any> {
    const url = `${this.findCommunityByPostCountLessThan}/${postCount}`;
    return this.http.get(url);
  }

  getCommunityDocumentsByAverageKarma(averageKarma1: number, averageKarma2: number): Observable<any> {
    const url = `${this.findCommunityByAverageKarma}/${averageKarma1}/to/${averageKarma2}`;
    return this.http.get(url);
  }

  getCommunityDocumentsByAverageKarmaGreaterThan(averageKarma: number): Observable<any> {
    const url = `${this.findCommunityByAverageKarmaGreaterThan}/${averageKarma}`;
    return this.http.get(url);
  }

  getCommunityDocumentsByAverageKarmaLessThan(averageKarma: number): Observable<any> {
    const url = `${this.findCommunityByAverageKarmaLessThan}/${averageKarma}`;
    return this.http.get(url);
  }

  getCommunityDocumentsByNameAndUser(name: string, user: string): Observable<any> {
    const url = `${this.findCommunityByNameAndUser}/and/name/${name}/user/${user}`;
    return this.http.get(url);
  }

  getCommunityDocumentsByNameOrUser(name: string, user: string): Observable<any> {
    const url = `${this.findCommunityByNameOrUser}/or/name/${name}/user/${user}`;
    return this.http.get(url);
  }

  getCommunityByNameFuzzyQuery(name: string): Observable<any> {
    const url = `${this.findCommunityByNameFuzzyQuery}/searchName?name=${name}`;
    return this.http.get(url);
  }

  getCommunityByDescriptionPhraseQuery(description: string): Observable<any> {
    const url = `${this.findCommunityByDescriptionPhraseQuery}/searchDescription?searchDescription=${encodeURIComponent(description)}`;
    return this.http.get(url);
  }

  addCommunity(communityData: any): Observable<any> {
    return this.http.post<any>(this.addNewCommunity, communityData);
  }

  addCommunityWithPDF(formData: FormData) {
    return this.http.post(this.addNewCommunityPDF, formData);
  }
}
