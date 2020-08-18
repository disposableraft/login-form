import React, {FunctionComponent} from 'react'
import {useFormikContext} from 'formik'

type SubmitButtonType = {
    label: string;
    name: string;
}

const SubmitButton: FunctionComponent<SubmitButtonType> = ({label, ...props}) => {
    const {errors, touched} = useFormikContext()
    const isDisabled = (): boolean => {
        const noErrors = Object.values(errors).every(v => !v)
        const unTouched = Object.values(touched).every(v => !v)
        return noErrors && unTouched
    }

    return (<div>
        <button disabled={isDisabled()} data-testid="submit" type="submit">{label}</button>
    </div>)
}

export default SubmitButton