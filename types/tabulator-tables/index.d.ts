// Type definitions for tabulator-tables v4.1.4
// Project: http://tabulator.info/
// Definitions by: Sayaka Nakatsuka <https://github.com/sayanaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// http://tabulator.info/docs/4.1/columns
export type ColumnDefinition = {
    // General
    /** **[Required]** This is the title that will be displayed in the header for this column */
    title: string;
    /** **[Required](not required in icon/button columns)** this is the key for this column in the data array */
    field?: string;
    /** determines if the column is visible. */
    visible?: boolean;

    // Layout
    /** sets the text alignment for this column (left|center|right) */
    align?: "left" | "center" | "right";
    /** sets the width of this column, this can be set in pixels or as a percentage of total table width (if not set the system will determine the best) */
    width?: number;
};

// http://tabulator.info/docs/4.1/options
export type Options = {
    // General Table Configuration
    /** Sets the height of the containing element, can be set to any valid height css value. If set to false (the default), the height of the table will resize to fit the table data. */
    height: string | number;

    /** Enable rendering using the Virtual DOM engine */
    virtualDom?: boolean;

    /** Manually set the size of the virtual DOM buffer */
    virtualDomBuffer?: number;

    /** placeholder element to display on empty table */
    placeholder?: string;

    /** Footer element for the table */
    footerElement?: string;

    /** Function to generate tooltips for cells */
    tooltips?: boolean | ITooltipsFunc;
};

interface ITooltipsFunc {
    (): string;
}

// https://github.com/olifolkerd/tabulator/blob/master/src/js/core.js
export function Tabulator(element: any, options: Options): void;
