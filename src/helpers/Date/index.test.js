/**
 * 
 */
import { getMonth } from "../../helpers/Date";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        test("the function return janvier for 2022-01-01 as date", () => {
            const dateTest = new Date("2022-01-01");
            expect(getMonth(dateTest)).toBe("janvier");
        });
        test("the function return juillet for 2022-07-08 as date", () => {
            const dateTest = new Date("2022-07-08");
            expect(getMonth(dateTest)).toBe("juillet");
        });
    });
})

