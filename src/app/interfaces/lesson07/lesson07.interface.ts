export interface IBlogRequest {
  title: string,
    text: string,
    autor: string
}
export interface IBlogResponse extends IBlogRequest{
  id:number
}