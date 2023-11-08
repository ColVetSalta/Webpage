
export interface ObCr {
  [key: string]: unknown
}

declare module './handlers/assets/ObjectCreator.js' {
  export function OrgObject (list: any, date: any): Promise<{}>
}
