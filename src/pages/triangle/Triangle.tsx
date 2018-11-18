import {autobind} from 'core-decorators';
import * as React from 'react';
import {default as triangleType, TriangleType} from '../../utils/triangleType';
import './Triangle.css';
import TriangleForm from './TriangleForm';
import TriangleResult from './TriangleResult';

interface Props {
}

interface State {
    triangleType: TriangleType;
}

class Triangle extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            triangleType: TriangleType.InvalidInputs,
        }
    }


    render(): React.ReactNode {
        const {triangleType} = this.state;

        return (
            <div className="triangle-container">
                <div className="triangle-box">
                    <TriangleForm onEdgeChange={this.calcTriangleType}/>
                </div>
                <div className="triangle-box triangle-result-box">
                    <TriangleResult triangleType={triangleType}/>
                </div>
            </div>
        );
    }

    @autobind
    calcTriangleType(edgeA: number, edgeB: number, edgeC: number) {
        this.setState({triangleType: triangleType(edgeA, edgeB, edgeC)});
    }
}

export default Triangle;