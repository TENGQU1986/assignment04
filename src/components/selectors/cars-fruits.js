export default (items, category) => {
    if (category === 'all') {
        return items
    }
    const filteredItem = items.filter(item => item.category === category)
    return filteredItem
}