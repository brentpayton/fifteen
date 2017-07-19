export class Poem {
  constructor (
     public content: string,
     public title?: string,
     public username?: string,
     public poemId?: string,
     public userId?: string)
  {}
}
