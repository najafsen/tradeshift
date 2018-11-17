import * as React from "react";
import {TriangleType} from "../../utils/triangleType";

interface Props {
    triangleType: TriangleType;
}

const TriangleResult: React.FunctionComponent<Props> = ({triangleType}) =>
    <h2>
        {triangleType === TriangleType.Scalene && 'This is a SCALENE triangle.'}
        {triangleType === TriangleType.Isosceles && 'This is a ISOSCELES triangle.'}
        {triangleType === TriangleType.Equilateral && 'This is a EQUILATERAL triangle.'}
        {triangleType === TriangleType.NotATriangle && 'Sorry, I cannot build a triangle with this edges!'}
        {triangleType === TriangleType.InvalidInputs && 'Please enter the lengths of all edges (only numbers)'}
    </h2>;

export default TriangleResult;