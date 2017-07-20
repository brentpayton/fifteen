export class Poem {
  constructor (
     public username: string,
     public title: string,
     public content: string,
     public createdAt?: string,
     public isComplete?: boolean,
     public isHidden?: boolean,
     public poemId?: string,
     public userId?: string)
  {}
}
