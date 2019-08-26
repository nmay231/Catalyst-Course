import * as path from 'path'

export const BLOGS_API = '/api/blogs'
export const TAGS_API = '/api/tags'
export const AUTHORS_API = '/api/authors'
export const LOGIN_ENDPOINT = '/auth/login'
export const REGISTER_ENDPOINT = '/auth/register'

export function join(...paths: string[]) {
    return path.join(...paths)
}