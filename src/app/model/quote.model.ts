export class Quote {
    quote: string
    author: string
    person: string
    date: Date
    show: boolean
    upvotes: number
    downvotes: number

    constructor (quote: string, author: string, person: string, upVotes?: number, downVotes?: number, date: Date = new Date((new Date()).getTime()), show: boolean = false) {
        this.quote = quote
        this.author = author
        this.person = person
        this.date = date
        this.show = show
        this.upvotes = upVotes || 0
        this.downvotes = downVotes || 0
    }

    upVote (): void {
        this.upvotes++
    }

    downVote (): void {
        this.downvotes++
    }
}