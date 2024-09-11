import isValidBracketSequence from './balancedBrackets';

describe('Balanced Brackets', () => {
    it('should validate valid bracket sequences', () => {
        expect(isValidBracketSequence("(){}[]")).toBe(true);
        expect(isValidBracketSequence("[{()}](){}")).toBe(true);
    });

    it('should invalidate incorrect bracket sequences', () => {
        expect(isValidBracketSequence("[]{()}")).toBe(false);
        expect(isValidBracketSequence("[{)]")).toBe(false);
    });
});
