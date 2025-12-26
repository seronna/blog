export const formatDate = (hasTime?: boolean) => {
    let formatOption = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }
    return new Intl.DateTimeFormat('zh', formatOption as Intl.DateTimeFormatOptions)
}