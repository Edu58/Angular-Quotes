export class Quote {
    quote: string
    author: string
    person: string
    show: boolean
    upvotes: number
    downvotes: number

    constructor (quote: string, author: string, person: string, upVotes?: number, downVotes?: number, show: boolean = false) {
        this.quote = quote
        this.author = author
        this.person = person
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