import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Poem } from './poem.model';
import { ErrorService } from '../errors/error.service';

@Injectable()
export class PoemService {
  private poems: Poem[] = [];
  poemIsEdit = new EventEmitter<Poem>();

  constructor(private http: Http, private errorService: ErrorService) {}

  addPoem(poem: Poem) {
    const body = JSON.stringify(poem);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.post('http://localhost:3000/poem' + token, body, {headers: headers})
      .map((response: Response) => {
        const result = response.json();
        const poem = new Poem(
          result.obj.content,
          result.obj.user.firstName,
          result.obj._id,
          result.obj.user.id);
        this.poems.push(poem);
        return poem;
      })
      .catch((error: Response) => {
        console.log(error);
        this.errorService.handleError(error.json());
        return Observable.throw(error.json())
        // this.errorService.handleError(error);
        // return Observable.throw(error)
      });
  }

  getPoems() {
    return this.http.get('http://localhost:3000/poem')
      .map((response: Response) => {
        const poems = response.json().obj;
        let transformedPoems: Poem[] = [];
        for (let poem of poems) {
          transformedPoems.push(new Poem(
            poem.user.firstName,
            'Static Title',
            poem.content,
            poem._id,
            poem.user._id));
        }
        this.poems = transformedPoems;
        return transformedPoems;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json())
      });
  }

  editPoem(poem: Poem) {
    this.poemIsEdit.emit(poem);
  }

  updatePoem(poem: Poem) {
    this.poems.push(poem);
    const body = JSON.stringify(poem);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.patch('http://localhost:3000/poem/' + poem.poemId + token, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json())
      });
  }

  deletePoem(poem: Poem) {
    this.poems.splice(this.poems.indexOf(poem), 1);
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.delete('http://localhost:3000/poem/' + poem.poemId + token)
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json())
      });
  }
}
