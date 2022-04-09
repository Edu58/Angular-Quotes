export class Quote {

    upvoteCount: number = 0
    downvoteCount:number = 0

    quote: string
    author: string
    person: string
    show: boolean

    constructor (quote: string, author: string, person: string, show: boolean = false) {
        this.quote = quote
        this.author = author
        this.person = person
        this.show = show
    }
}