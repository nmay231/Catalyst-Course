import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'


interface FormProps extends RouteComponentProps {
    submitText: string,
    action?: (...x: any[]) => any,
    cancel?: (...x: any[]) => any,
}

const Form: React.FC<FormProps> = ({ children, submitText, action, cancel, history }) => {

    if (!cancel) {
        cancel = () => history.goBack()
    }

    const handleClick: React.MouseEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (action) {
            action()
        }
    }

    return (
        <form className="col-lg-6 border rounded">
            {children}
            <div className="d-flex">
                <button
                    onClick={handleClick}
                    className="m-3 ml-auto btn btn-primary">
                    {submitText}
                </button>
                <button className="m-3 btn btn-secondary" type="button"
                    onClick={cancel}>Cancel</button>
            </div>
        </form>
    )
}

export default withRouter(Form)
