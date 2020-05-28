import React from 'react'
import { Button } from '@material-ui/core'

const SubmissionPage = (props) => {
    const onPrevPage = () => {
        props.prevStep()
    }

    return (
        <div>
            <h1>Thanks for viewing</h1>
            <Button onClick={onPrevPage}>Back</Button>
        </div>
    )
}

export default SubmissionPage