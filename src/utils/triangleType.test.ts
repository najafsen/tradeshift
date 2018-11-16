import triangleType, {TriangleType} from "./triangleType";

describe('triangleType', () => {
    it('Should return InvalidInput when giving edgeA NaN', () => {
        expect(triangleType(NaN, 1, 1)).toBe(TriangleType.InvalidInputs);
    });

    it('Should return InvalidInput when giving edgeB NaN', () => {
        expect(triangleType(1, NaN, 1)).toBe(TriangleType.InvalidInputs);
    });

    it('Should return InvalidInput when giving edgeC NaN', () => {
        expect(triangleType(1, 4, NaN)).toBe(TriangleType.InvalidInputs);
    });

    it('Should return InvalidInput when giving edgeA <= 0', () => {
        expect(triangleType(0, 1, 1)).toBe(TriangleType.InvalidInputs);
    });

    it('Should return InvalidInput when giving edgeB <= 0', () => {
        expect(triangleType(1, -1, 1)).toBe(TriangleType.InvalidInputs);
    });

    it('Should return InvalidInput when giving edgeC <= 0', () => {
        expect(triangleType(1, 4, -.5)).toBe(TriangleType.InvalidInputs);
    });

    it('Should return NotATriangle when all edges are > 0, and one edge is greater than the sum of the other edges', () => {
        expect(triangleType(1, 4, 2)).toBe(TriangleType.NotATriangle);
    });

    it('Should return Equilateral when all edges are > 0, and all edges have the same length', () => {
        expect(triangleType(1.5, 1.5, 1.5)).toBe(TriangleType.Equilateral);
    });

    it('Should return Equilateral when all edges are > 0, and two edges have the same length', () => {
        expect(triangleType(1, 1.5, 1.5)).toBe(TriangleType.Isosceles);
    });

    it('Should return Equilateral when all edges are > 0, and none of the edges have the same length', () => {
        expect(triangleType(1, 1.55, 1.5)).toBe(TriangleType.Scalene);
    });
});