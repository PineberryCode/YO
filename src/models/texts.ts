
/**
 * @param id identify what topic of the portfolio is. E.g: [about-me] | [hobbies] | ...
 * @param item contents an array of topics by id
 */

export type TextItem = {
    id: string,
    item: TextContent[]
}

/**
 * @param subTitle contents an idea or topic
 * @param text paragraph of the subtitle
 */
export type TextContent = {
    subTitle: string,
    text: string
}