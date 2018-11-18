import * as React from 'react';
import {TriangleType} from '../../utils/triangleType';

export const MESSAGES = {
    scalene: 'This is a SCALENE triangle.',
    isosceles: 'This is a ISOSCELES triangle.',
    equilateral: 'This is a EQUILATERAL triangle.',
    notATriangle: 'Sorry, I cannot build a triangle with this edges!',
    invalidInputs: 'Please enter the lengths of all edges (only numbers)',
};

interface Props {
    triangleType: TriangleType;
}

const TriangleResult: React.FunctionComponent<Props> = ({triangleType}) =>
    <h2>
        {triangleType === TriangleType.Scalene && MESSAGES.scalene}
        {triangleType === TriangleType.Isosceles && MESSAGES.isosceles}
        {triangleType === TriangleType.Equilateral && MESSAGES.equilateral}
        {triangleType === TriangleType.NotATriangle && MESSAGES.notATriangle}
        {triangleType === TriangleType.InvalidInputs && MESSAGES.invalidInputs}
    </h2>;

export default TriangleResult;