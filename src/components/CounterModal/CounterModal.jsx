import React from 'react'
import ReactModal from 'react-modal'
import { Button } from '@material-ui/core/'

import style from './CounterModal.module.css'

ReactModal.setAppElement('#root')

class CounterModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            count: 0
        }
    }

    onModalOpen = () => {
        this.setState(({ count }) => ({ modalOpen: true, count: count + 1 }))
    }

    onModalClose = () => {
        this.setState(() => ({ modalOpen: false }))
    }

    onModalReset = () => {
        this.setState(() => ({ count: 0}))
    }

    onNextPage = () => {
        this.props.nextStep()
    }
    
    render() {
        return (
            <div className={style.container}>
                <div className={style.modalButtons}>
                    <Button onClick={this.onModalOpen} variant="contained" color="primary" className={style.button}>Open</Button>
                    <Button onClick={this.onModalReset} variant="contained" color="secondary" className={style.button}>Reset</Button>
                </div>
                <ReactModal
                    isOpen={this.state.modalOpen}
                    shouldFocusAfterRender={false}
                    className={style.countModal}
                >
                    <h2>Modal is clicked {this.state.count} number of {this.state.count<=1?'time':'times'}.</h2>
                    <Button onClick={this.onModalClose} variant="contained" color="primary">Close Modal</Button>
                </ReactModal>
                <Button className={style.navButton} onClick={this.onNextPage} >Next</Button>
            </div>
        )
    }
}

export default CounterModal