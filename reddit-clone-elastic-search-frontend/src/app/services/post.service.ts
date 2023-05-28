import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private findPostByTitle = 'http://localhost:8080/api/v1/postDocument/title';
  private findPostByText = 'http://localhost:8080/api/v1/postDocument/text';
  private findPostByUser = 'http://localhost:8080/api/v1/postDocument/user';
  private findPostByFlair = 'http://localhost:8080/api/v1/postDocument/flair';
  private findPostByCommunity = 'http://localhost:8080/api/v1/postDocument/community';
  private findPostByCommentCount = 'http://localhost:8080/api/v1/postDocument/commentCount';
  private findPostByCommentCountGreaterThan = 'http://localhost:8080/api/v1/postDocument/commentCountGreaterThan';
  private findPostByCommentCountLessThan = 'http://localhost:8080/api/v1/postDocument/commentCountLessThan';
  private findPostByKarma = 'http://localhost:8080/api/v1/postDocument/karma';
  private findPostByKarmaGreaterThan = 'http://localhost:8080/api/v1/postDocument/karmaGreaterThan';
  private findPostByKarmaLessThan = 'http://localhost:8080/api/v1/postDocument/karmaLessThan';
  private findPostByFlairAndUser = 'http://localhost:8080/api/v1/postDocument';
  private findPostByFlairOrUser = 'http://localhost:8080/api/v1/postDocument';
  private findPostByTitleFuzzyQuery = 'http://localhost:8080/api/v1/postDocument';
  private findPostByTextPhraseQuery = 'http://localhost:8080/api/v1/postDocument';

  constructor(private http: HttpClient) { }

  searchPostByTitle(title: string): Observable<any> {
    const requestBody = { title: title };
    return this.http.post(this.findPostByTitle, requestBody);
  }

  searchPostByText(text: string): Observable<any> {
    const requestBody = { text: text };
    return this.http.post(this.findPostByText, requestBody);
  }

  searchPostByUser(user: string): Observable<any> {
    const requestBody = { user: user };
    return this.http.post(this.findPostByUser, requestBody);
  }

  searchPostByFlair(flair: string): Observable<any> {
    const requestBody = { flair: flair };
    return this.http.post(this.findPostByFlair, requestBody);
  }

  searchPostByCommunity(community: string): Observable<any> {
    const requestBody = { community: community };
    return this.http.post(this.findPostByCommunity, requestBody);
  }

  getPostDocumentsByCommentCount(commentCount1: number, commentCount2: number): Observable<any> {
    const url = `${this.findPostByCommentCount}/${commentCount1}/to/${commentCount2}`;
    return this.http.get(url);
  }

  getPostDocumentsByCommentCountGreaterThan(commentCount: number): Observable<any> {
    const url = `${this.findPostByCommentCountGreaterThan}/${commentCount}`;
    return this.http.get(url);
  }

  getPostDocumentsByCommentCountLessThan(commentCount: number): Observable<any> {
    const url = `${this.findPostByCommentCountLessThan}/${commentCount}`;
    return this.http.get(url);
  }

  getPostDocumentsByKarma(karma1: number, karma2: number): Observable<any> {
    const url = `${this.findPostByKarma}/${karma1}/to/${karma2}`;
    return this.http.get(url);
  }

  getPostDocumentsByKarmaGreaterThan(karma: number): Observable<any> {
    const url = `${this.findPostByKarmaGreaterThan}/${karma}`;
    return this.http.get(url);
  }

  getPostDocumentsByKarmaLessThan(karma: number): Observable<any> {
    const url = `${this.findPostByKarmaLessThan}/${karma}`;
    return this.http.get(url);
  }

  getPostDocumentsByFlairAndUser(flair: string, user: string): Observable<any> {
    const url = `${this.findPostByFlairAndUser}/and/flair/${flair}/user/${user}`;
    return this.http.get(url);
  }

  getPostDocumentsByFlairOrUser(flair: string, user: string): Observable<any> {
    const url = `${this.findPostByFlairOrUser}/or/flair/${flair}/user/${user}`;
    return this.http.get(url);
  }

  getPostByTitleFuzzyQuery(title: string): Observable<any> {
    const url = `${this.findPostByTitleFuzzyQuery}/searchTitle?title=${title}`;
    return this.http.get(url);
  }

  getPostByTextPhraseQuery(text: string): Observable<any> {
    const url = `${this.findPostByTextPhraseQuery}/searchText?searchText=${encodeURIComponent(text)}`;
    return this.http.get(url);
  }
}
