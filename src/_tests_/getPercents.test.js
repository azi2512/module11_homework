import { getPercents } from "../getPercents.js";

test('test with numbers', () => {
    expect(getPercents(30, 200)).toBe(60);
})

describe("tests for getPercents function", () => {  
    xit("should operate correctly with numbers", () => {
        expect(getPercents(30, 200)).toBe(60);
    }),
    it("should operate correctly with invalid number", () => {
        expect(getPercents('sos')).toBe("Неверные данные");
    }),
    it("should operate correctly with zero", () => {
        expect(getPercents(50, 0)).toBe(0);
    }),
    it("should operate correctly with one argument", () => {
        expect(getPercents(5, 'string')).toBe("Неверные данные");
    }),
    it("should operate correctly with one argument", () => {
        expect(getPercents('string', 7)).toBe("Неверные данные");
    });
});