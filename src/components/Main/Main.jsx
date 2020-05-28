import React from 'react'
import CounterModal from '../CounterModal/CounterModal'
import FontSizeScroll from '../FontSizeScroll/FontSizeScroll'
import ListFilter from '../ListFilter/ListFilter'
import SubmissionPage from '../SubmissionPage/SubmissionPage'

import styles from './Main.module.css'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            step: 3
        }
    }

    nextStep = () => {
        this.setState(prev => ({ step: prev.step + 1 }))
    }

    prevStep = () => {
        this.setState(prev => ({ step: prev.step - 1 }))
    }

    render() {
        return (
            <div className={styles.container}>
                {this.state.step === 1 && <CounterModal
                    nextStep={this.nextStep}
                />}
                {this.state.step === 2 && <FontSizeScroll
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    title="Font Size"
                />}
                {this.state.step === 3 && <ListFilter
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                />}
                {this.state.step === 4 && <SubmissionPage
                    prevStep={this.prevStep}
                />}
                
            </div>
        )
    }
}

export default Main