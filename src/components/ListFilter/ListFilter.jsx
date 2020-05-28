import React from 'react'
import categoryFilter from '../selectors/cars-fruits'
import sortList from '../selectors/sortList'
import { Button } from '@material-ui/core'

import styles from './ListFilter.module.css'

import carsAndFruits from '../../data/carsAndFruits.json'

class ListFilter extends React.Component {
    constructor() {
        super()
        this.state = {
            category: 'all',
            sortBy: 'asc',
            items: [],
            filteredItems: []
        }
    }

    componentDidMount() {
        this.setState(() => ({ items: carsAndFruits, filteredItems: carsAndFruits }))
    }

    onCategorySelect = (e) => {
        const category = e.target.value
        this.setState(() => ({ category }))
        const filteredItems = categoryFilter(this.state.items, category)
        this.setState(() => ({ filteredItems }))
    }

    onSortChange = async () => {
        this.setState(prev => ({ sortBy: prev.sortBy === 'asc' ? 'desc' : 'asc'}))
        await this.state.sortBy
        const sortedItems = sortList(this.state.filteredItems, this.state.sortBy)
        this.setState(() => ({ filteredItems: sortedItems}))
        // console.log('this.state.sortBy', this.state.sortBy)
        // console.log('sortBy', sortBy)
    }

    onNextPage = () => {
        this.props.nextStep()
    }

    onPrevPage = () => {
        this.props.prevStep()
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.dropDown}>
                    <select onChange={this.onCategorySelect}>
                        <option value="all">all</option>
                        <option value="fruits">fruits</option>
                        <option value="cars">cars</option>
                    </select>
                    <Button onClick={this.onSortChange} variant="contained" color="primary">Sort</Button>
                </div>
                
                <ul>
                    {this.state.filteredItems.map((item, i) => <li key={i}>{item.name}</li>)}
                </ul>
                <div>
                    <Button onClick={this.onPrevPage}>Back</Button>
                    <Button onClick={this.onNextPage}>Next</Button>
                </div>
            </div>
        )
    }
}

export default ListFilter