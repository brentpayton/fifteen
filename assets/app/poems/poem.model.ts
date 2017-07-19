export class Poem {
  constructor (
     public username: string,
     public title: string,
     public content: string,
     public poemId?: string,
     public userId?: string)
  {}
}
