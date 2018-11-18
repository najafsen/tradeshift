import React, {DetailedHTMLProps} from 'react';

interface Props extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
}

const Input: React.FunctionComponent<Props> = (props) => {
    const {label, ...inputProps} = props;

    return (
        <fieldset>
            <label>
                {label && <span>{label}</span>}
                <input {...inputProps}/>
            </label>
        </fieldset>
    );
};

export default Input;
