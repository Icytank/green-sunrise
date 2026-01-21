import { describe, it, expect } from "vitest";
import { formatExperience, processCertifications } from "./TeamMember.logic";

describe("TeamMember Logic", () => {
    describe("formatExperience", () => {
        it("should return the number string", () => {
            expect(formatExperience(15)).toBe("15");
        });
    });

    describe("processCertifications", () => {
        it("should filter out empty certifications", () => {
            const certs = ["Cert A", " ", "Cert B"];
            expect(processCertifications(certs)).toEqual(["Cert A", "Cert B"]);
        });

        it("should return identical array if no empty strings", () => {
            const certs = ["Cert A", "Cert B"];
            expect(processCertifications(certs)).toEqual(["Cert A", "Cert B"]);
        });
    });
});
