export enum TriangleType {
    InvalidInputs = 'INVALID_INPUTS',
    NotATriangle = 'NOT_A_TRIANGLE',
    Equilateral = 'EQUILATERAL',
    Isosceles = 'ISOSCELES',
    Scalene = 'SCALENE'
}

function triangleType(edgeA: number, edgeB: number, edgeC: number) {
    if (isNaN(edgeA) || isNaN(edgeB) || isNaN(edgeC)) {
        return TriangleType.InvalidInputs;
    }

    if (edgeA <= 0 || edgeB <= 0 || edgeC <= 0) {
        return TriangleType.InvalidInputs;
    }

    if (edgeA + edgeB <= edgeC || edgeA + edgeC <= edgeB || edgeB + edgeC <= edgeA) {
        return TriangleType.NotATriangle;
    }

    if (edgeA === edgeB && edgeB === edgeC) {
        return TriangleType.Equilateral;
    }

    if (edgeA === edgeB || edgeB === edgeC || edgeA === edgeC) {
        return TriangleType.Isosceles;
    }

    return TriangleType.Scalene;
}

export default triangleType;