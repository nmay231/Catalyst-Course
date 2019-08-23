// Project: Full-stack Blog
// Definitions by: Noah May <https://github.com/nmay231>

declare interface IBlog {
    id: number,
    authorid: number,
    authorName: string,
    title: string,
    content: string,
    tags: string | null,
    tagList?: string[],
}

declare interface IAuthor {
    id: number,
    name: string,
    email: string,
    hash?: string,
    role?: string,
}

declare interface ITag {
    id: number,
    name: string,
}

declare interface IPayload {
    authorid: number,
    expires?: Date,
    tokenid?: number,
    unique?: string,
}