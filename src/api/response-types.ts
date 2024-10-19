// more items


export interface Paper {
    doi: string,
    title: string,
    abstract: string | null,
}

export interface TrackedPaper {
    owner: string,
    paper: Paper,
    rating: number,
}