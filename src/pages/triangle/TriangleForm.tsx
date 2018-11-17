import {autobind} from "core-decorators";
import * as React from "react";
import {ChangeEvent} from "react";
import Form from "../../components/Form";
import {Partial} from "../../types/Partial";

interface Props {
    onEdgeChange: (a: number, b: number, c: number) => void
}

interface State {
    edgeA: string;
    edgeB: string;
    edgeC: string;
}

class TriangleForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            edgeA: '',
            edgeB: '',
            edgeC: '',
        }
    }


    render(): React.ReactNode {
        const {edgeA, edgeB, edgeC} = this.state;

        return (
            <Form>
                <input type="number" name="edgeA" value={edgeA} onChange={this.handleEdgeChange} min={0}/>
                <input type="number" name="edgeB" value={edgeB} onChange={this.handleEdgeChange} min={0}/>
                <input type="number" name="edgeC" value={edgeC} onChange={this.handleEdgeChange} min={0}/>
            </Form>
        );
    }

    @autobind
    handleEdgeChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({[event.target.name as keyof State]: event.target.value} as Partial<State>, () => this.emitEdgeChange());
    }

    @autobind
    emitEdgeChange() {
        const {onEdgeChange} = this.props;
        const {edgeA, edgeB, edgeC} = this.state;

        onEdgeChange(parseFloat(edgeA), parseFloat(edgeB), parseFloat(edgeC));
    }
}

export default TriangleForm;