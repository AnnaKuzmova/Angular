export interface User {
    img: string,
    name: string,
    jobTitle: string,
    hasChildren: boolean,
    children?: Array<User>
}