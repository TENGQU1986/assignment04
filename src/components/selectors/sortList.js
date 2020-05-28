export default (items, sortBy) => {
    return items.sort((a, b) => {
        if(sortBy === 'asc') {
            return a.name > b.name ? 1 : -1
        }
        
        return a.name < b.name ? 1 : -1
    })
}