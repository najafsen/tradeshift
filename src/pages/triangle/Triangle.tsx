import {autobind} from "core-decorators";
import * as React from "react";
import {ChangeEvent} from "react";
import Form from "../../components/Form";

interface Props {
}

interface State {
    numberA: string;
    numberB: string;
    numberC: string;
}

class Triangle extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            numberA: '',
            numberB: '',
            numberC: '',
        }
    }


    render(): React.ReactNode {
        const {numberA, numberB, numberC} = this.state;

        return (
            <Form>
                <input type="number" value={numberA} onChange={this.handleNumberAChange} min={0}/>
                <input type="number" value={numberB} onChange={this.handleNumberBChange} min={0}/>
                <input type="number" value={numberC} onChange={this.handleNumberCChange} min={0}/>
            </Form>
        );
    }

    @autobind
    handleNumberAChange(event: ChangeEvent<HTMLInputElement>) {
        if (this.isEmptyOrNumber(event.target.value)) {
            this.setState({numberA: event.target.value});
        }
    }

    @autobind
    handleNumberBChange(event: ChangeEvent<HTMLInputElement>) {
        if (this.isEmptyOrNumber(event.target.value)) {
            this.setState({numberB: event.target.value});
        }
    }

    @autobind
    handleNumberCChange(event: ChangeEvent<HTMLInputElement>) {
        if (this.isEmptyOrNumber(event.target.value)) {
            this.setState({numberC: event.target.value});
        }
    }


    // TODO handle `-`
    isEmptyOrNumber(value: string): boolean {
        if (value === '') {
            return true;
        }

        return !isNaN(parseFloat(value));
    }
}

export default Triangle;