export interface Navigation {
    indexTitle: string,
    subindex?: {
                subindexTitle: string,
                url: string
            }[],
    url?: string
}