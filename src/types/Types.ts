export type PostType = {
    userId:number;
    id:number;
    title:string;
    body:string;
}
export type SortType = 'title'|'description'|''
export type SortAndSearchedTypes = {
    sort:SortType
    query:string;
}
export type CommentsType = {
    "postId": number;
    "id": number;
    "name": string;
    "email": string;
    "body": string;
}