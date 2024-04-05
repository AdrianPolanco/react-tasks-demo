import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Start } from "./Start";

describe("Getting started", () => {
    //Before each test this code will be executed
    beforeEach(() => {
        render(<Start technology="NextJS"></Start>);
    });

    test("Test Start component", () => {
        expect(
            screen.getByText((text) => text.includes("NextJS..."))
        ).toBeDefined();
    });
});
