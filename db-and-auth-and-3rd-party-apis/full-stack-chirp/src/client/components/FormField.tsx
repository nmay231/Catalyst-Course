import React from 'react'

interface FormFieldProps extends React.Props<{}> {
    state: [
        string | number,
        (newValue: string) => void,
    ]
    name: string,
    type?: 'text' | 'password' | 'textarea',
    transform?: (value: string) => string
}

const FormField: React.FC<FormFieldProps> = ({ state, name, type = 'text', transform }) => {

    const [value, setValue] = state

    const handleChange: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = transform ? transform(e.target.value) : e.target.value
        setValue(newValue)
    }

    return (
        <div className="form-group">
            <div className="form-group m-3">
                <label htmlFor={name}> {name} </label>
                {type === 'textarea' ?
                    <textarea rows={8} id={name} className="form-control"
                        value={value} onChange={handleChange} />
                    : <input type={type} id={name} className="form-control"
                        value={value} onChange={handleChange} />}
            </div>
        </div>
    )
}

export default FormField
