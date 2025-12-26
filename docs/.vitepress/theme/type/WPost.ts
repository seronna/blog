export interface Post {
    title: string // 标题
    url: string // url
    date: [number, number] // 日期：创建日期，更新日期
    dateText: [string, string] // 日期文本
    abstract: string // 摘要
    category?: string | undefined // 分类
    tags?: string[] | undefined // 标签
}