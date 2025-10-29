export type Color = (typeof colors)[number];
<<<<<<< HEAD
export type ColorName = Color['name'];
=======
export type ColorName = Color["name"];
>>>>>>> fae945514fecb9d2f7205440a0930cdbb50cde3d
export declare const colors: readonly [{
    readonly name: "white";
    readonly value: "#FFFFFF";
}, {
<<<<<<< HEAD
=======
    readonly name: "black";
    readonly value: "#000000";
}, {
    readonly name: "transparent";
    readonly value: "transparent";
}, {
>>>>>>> fae945514fecb9d2f7205440a0930cdbb50cde3d
    readonly name: "neutral-0";
    readonly value: "var(--color-neutral-0)";
}, {
    readonly name: "neutral-50";
    readonly value: "var(--color-neutral-50)";
}, {
    readonly name: "neutral-100";
    readonly value: "var(--color-neutral-100)";
}, {
    readonly name: "neutral-200";
    readonly value: "var(--color-neutral-200)";
}, {
    readonly name: "neutral-300";
    readonly value: "var(--color-neutral-300)";
}, {
    readonly name: "neutral-400";
    readonly value: "var(--color-neutral-400)";
}, {
    readonly name: "neutral-500";
    readonly value: "var(--color-neutral-500)";
}, {
    readonly name: "neutral-600";
    readonly value: "var(--color-neutral-600)";
}, {
    readonly name: "neutral-700";
    readonly value: "var(--color-neutral-700)";
}, {
    readonly name: "neutral-800";
    readonly value: "var(--color-neutral-800)";
}, {
    readonly name: "neutral-900";
    readonly value: "var(--color-neutral-900)";
}, {
    readonly name: "neutral-950";
    readonly value: "var(--color-neutral-950)";
}, {
    readonly name: "red-50";
    readonly value: "var(--color-red-50)";
}, {
    readonly name: "red-100";
    readonly value: "var(--color-red-100)";
}, {
    readonly name: "red-200";
    readonly value: "var(--color-red-200)";
}, {
    readonly name: "red-300";
    readonly value: "var(--color-red-300)";
}, {
    readonly name: "red-400";
    readonly value: "var(--color-red-400)";
}, {
    readonly name: "red-500";
    readonly value: "var(--color-red-500)";
}, {
    readonly name: "red-600";
    readonly value: "var(--color-red-600)";
}, {
    readonly name: "red-700";
    readonly value: "var(--color-red-700)";
}, {
    readonly name: "red-800";
    readonly value: "var(--color-red-800)";
}, {
    readonly name: "red-900";
    readonly value: "var(--color-red-900)";
}, {
    readonly name: "red-950";
    readonly value: "var(--color-red-950)";
}, {
    readonly name: "orange-50";
    readonly value: "var(--color-orange-50)";
}, {
    readonly name: "orange-100";
    readonly value: "var(--color-orange-100)";
}, {
    readonly name: "orange-200";
    readonly value: "var(--color-orange-200)";
}, {
    readonly name: "orange-300";
    readonly value: "var(--color-orange-300)";
}, {
    readonly name: "orange-400";
    readonly value: "var(--color-orange-400)";
}, {
    readonly name: "orange-500";
    readonly value: "var(--color-orange-500)";
}, {
    readonly name: "orange-600";
    readonly value: "var(--color-orange-600)";
}, {
    readonly name: "orange-700";
    readonly value: "var(--color-orange-700)";
}, {
    readonly name: "orange-800";
    readonly value: "var(--color-orange-800)";
}, {
    readonly name: "orange-900";
    readonly value: "var(--color-orange-900)";
}, {
    readonly name: "orange-950";
    readonly value: "var(--color-orange-950)";
}, {
    readonly name: "yellow-50";
    readonly value: "var(--color-yellow-50)";
}, {
    readonly name: "yellow-100";
    readonly value: "var(--color-yellow-100)";
}, {
    readonly name: "yellow-200";
    readonly value: "var(--color-yellow-200)";
}, {
    readonly name: "yellow-300";
    readonly value: "var(--color-yellow-300)";
}, {
    readonly name: "yellow-400";
    readonly value: "var(--color-yellow-400)";
}, {
    readonly name: "yellow-500";
    readonly value: "var(--color-yellow-500)";
}, {
    readonly name: "yellow-600";
    readonly value: "var(--color-yellow-600)";
}, {
    readonly name: "yellow-700";
    readonly value: "var(--color-yellow-700)";
}, {
    readonly name: "yellow-800";
    readonly value: "var(--color-yellow-800)";
}, {
    readonly name: "yellow-900";
    readonly value: "var(--color-yellow-900)";
}, {
    readonly name: "yellow-950";
    readonly value: "var(--color-yellow-950)";
}, {
    readonly name: "green-50";
    readonly value: "var(--color-green-50)";
}, {
    readonly name: "green-100";
    readonly value: "var(--color-green-100)";
}, {
    readonly name: "green-200";
    readonly value: "var(--color-green-200)";
}, {
    readonly name: "green-300";
    readonly value: "var(--color-green-300)";
}, {
    readonly name: "green-400";
    readonly value: "var(--color-green-400)";
}, {
    readonly name: "green-500";
    readonly value: "var(--color-green-500)";
}, {
    readonly name: "green-600";
    readonly value: "var(--color-green-600)";
}, {
    readonly name: "green-700";
    readonly value: "var(--color-green-700)";
}, {
    readonly name: "green-800";
    readonly value: "var(--color-green-800)";
}, {
    readonly name: "green-900";
    readonly value: "var(--color-green-900)";
}, {
    readonly name: "green-950";
    readonly value: "var(--color-green-950)";
}, {
    readonly name: "teal-50";
    readonly value: "var(--color-teal-50)";
}, {
    readonly name: "teal-100";
    readonly value: "var(--color-teal-100)";
}, {
    readonly name: "teal-200";
    readonly value: "var(--color-teal-200)";
}, {
    readonly name: "teal-300";
    readonly value: "var(--color-teal-300)";
}, {
    readonly name: "teal-400";
    readonly value: "var(--color-teal-400)";
}, {
    readonly name: "teal-500";
    readonly value: "var(--color-teal-500)";
}, {
    readonly name: "teal-600";
    readonly value: "var(--color-teal-600)";
}, {
    readonly name: "teal-700";
    readonly value: "var(--color-teal-700)";
}, {
    readonly name: "teal-800";
    readonly value: "var(--color-teal-800)";
}, {
    readonly name: "teal-900";
    readonly value: "var(--color-teal-900)";
}, {
    readonly name: "teal-950";
    readonly value: "var(--color-teal-950)";
}, {
    readonly name: "sky-50";
    readonly value: "var(--color-sky-50)";
}, {
    readonly name: "sky-100";
    readonly value: "var(--color-sky-100)";
}, {
    readonly name: "sky-200";
    readonly value: "var(--color-sky-200)";
}, {
    readonly name: "sky-300";
    readonly value: "var(--color-sky-300)";
}, {
    readonly name: "sky-400";
    readonly value: "var(--color-sky-400)";
}, {
    readonly name: "sky-500";
    readonly value: "var(--color-sky-500)";
}, {
    readonly name: "sky-600";
    readonly value: "var(--color-sky-600)";
}, {
    readonly name: "sky-700";
    readonly value: "var(--color-sky-700)";
}, {
    readonly name: "sky-800";
    readonly value: "var(--color-sky-800)";
}, {
    readonly name: "sky-900";
    readonly value: "var(--color-sky-900)";
}, {
    readonly name: "sky-950";
    readonly value: "var(--color-sky-950)";
}, {
    readonly name: "blue-50";
    readonly value: "var(--color-blue-50)";
}, {
    readonly name: "blue-100";
    readonly value: "var(--color-blue-100)";
}, {
    readonly name: "blue-200";
    readonly value: "var(--color-blue-200)";
}, {
    readonly name: "blue-300";
    readonly value: "var(--color-blue-300)";
}, {
    readonly name: "blue-400";
    readonly value: "var(--color-blue-400)";
}, {
    readonly name: "blue-500";
    readonly value: "var(--color-blue-500)";
}, {
    readonly name: "blue-600";
    readonly value: "var(--color-blue-600)";
}, {
    readonly name: "blue-700";
    readonly value: "var(--color-blue-700)";
}, {
    readonly name: "blue-800";
    readonly value: "var(--color-blue-800)";
}, {
    readonly name: "blue-900";
    readonly value: "var(--color-blue-900)";
}, {
    readonly name: "blue-950";
    readonly value: "var(--color-blue-950)";
}, {
    readonly name: "purple-50";
    readonly value: "var(--color-purple-50)";
}, {
    readonly name: "purple-100";
    readonly value: "var(--color-purple-100)";
}, {
    readonly name: "purple-200";
    readonly value: "var(--color-purple-200)";
}, {
    readonly name: "purple-300";
    readonly value: "var(--color-purple-300)";
}, {
    readonly name: "purple-400";
    readonly value: "var(--color-purple-400)";
}, {
    readonly name: "purple-500";
    readonly value: "var(--color-purple-500)";
}, {
    readonly name: "purple-600";
    readonly value: "var(--color-purple-600)";
}, {
    readonly name: "purple-700";
    readonly value: "var(--color-purple-700)";
}, {
    readonly name: "purple-800";
    readonly value: "var(--color-purple-800)";
}, {
    readonly name: "purple-900";
    readonly value: "var(--color-purple-900)";
}, {
    readonly name: "purple-950";
    readonly value: "var(--color-purple-950)";
}, {
    readonly name: "pink-50";
    readonly value: "var(--color-pink-50)";
}, {
    readonly name: "pink-100";
    readonly value: "var(--color-pink-100)";
}, {
    readonly name: "pink-200";
    readonly value: "var(--color-pink-200)";
}, {
    readonly name: "pink-300";
    readonly value: "var(--color-pink-300)";
}, {
    readonly name: "pink-400";
    readonly value: "var(--color-pink-400)";
}, {
    readonly name: "pink-500";
    readonly value: "var(--color-pink-500)";
}, {
    readonly name: "pink-600";
    readonly value: "var(--color-pink-600)";
}, {
    readonly name: "pink-700";
    readonly value: "var(--color-pink-700)";
}, {
    readonly name: "pink-800";
    readonly value: "var(--color-pink-800)";
}, {
    readonly name: "pink-900";
    readonly value: "var(--color-pink-900)";
}, {
    readonly name: "pink-950";
    readonly value: "var(--color-pink-950)";
}, {
    readonly name: "alpha-red-10";
    readonly value: "var(--color-alpha-red-10)";
}, {
    readonly name: "alpha-red-16";
    readonly value: "var(--color-alpha-red-16)";
}, {
    readonly name: "alpha-red-24";
    readonly value: "var(--color-alpha-red-24)";
}, {
    readonly name: "alpha-orange-10";
    readonly value: "var(--color-alpha-orange-10)";
}, {
    readonly name: "alpha-orange-16";
    readonly value: "var(--color-alpha-orange-16)";
}, {
    readonly name: "alpha-orange-24";
    readonly value: "var(--color-alpha-orange-24)";
}, {
    readonly name: "alpha-yellow-10";
    readonly value: "var(--color-alpha-yellow-10)";
}, {
    readonly name: "alpha-yellow-16";
    readonly value: "var(--color-alpha-yellow-16)";
}, {
    readonly name: "alpha-yellow-24";
    readonly value: "var(--color-alpha-yellow-24)";
}, {
    readonly name: "alpha-green-10";
    readonly value: "var(--color-alpha-green-10)";
}, {
    readonly name: "alpha-green-16";
    readonly value: "var(--color-alpha-green-16)";
}, {
    readonly name: "alpha-green-24";
    readonly value: "var(--color-alpha-green-24)";
}, {
    readonly name: "alpha-teal-10";
    readonly value: "var(--color-alpha-teal-10)";
}, {
    readonly name: "alpha-teal-16";
    readonly value: "var(--color-alpha-teal-16)";
}, {
    readonly name: "alpha-teal-24";
    readonly value: "var(--color-alpha-teal-24)";
}, {
    readonly name: "alpha-sky-10";
    readonly value: "var(--color-alpha-sky-10)";
}, {
    readonly name: "alpha-sky-16";
    readonly value: "var(--color-alpha-sky-16)";
}, {
    readonly name: "alpha-sky-24";
    readonly value: "var(--color-alpha-sky-24)";
}, {
    readonly name: "alpha-blue-10";
    readonly value: "var(--color-alpha-blue-10)";
}, {
    readonly name: "alpha-blue-16";
    readonly value: "var(--color-alpha-blue-16)";
}, {
    readonly name: "alpha-blue-24";
    readonly value: "var(--color-alpha-blue-24)";
}, {
    readonly name: "alpha-purple-10";
    readonly value: "var(--color-alpha-purple-10)";
}, {
    readonly name: "alpha-purple-16";
    readonly value: "var(--color-alpha-purple-16)";
}, {
    readonly name: "alpha-purple-24";
    readonly value: "var(--color-alpha-purple-24)";
}, {
    readonly name: "alpha-pink-10";
    readonly value: "var(--color-alpha-pink-10)";
}, {
    readonly name: "alpha-pink-16";
    readonly value: "var(--color-alpha-pink-16)";
}, {
    readonly name: "alpha-pink-24";
    readonly value: "var(--color-alpha-pink-24)";
}, {
    readonly name: "alpha-neutral-10";
    readonly value: "var(--color-alpha-neutral-10)";
}, {
    readonly name: "alpha-neutral-16";
    readonly value: "var(--color-alpha-neutral-16)";
}, {
    readonly name: "alpha-neutral-24";
    readonly value: "var(--color-alpha-neutral-24)";
}, {
    readonly name: "alpha-white-2";
    readonly value: "var(--color-alpha-white-2)";
}, {
    readonly name: "alpha-white-4";
    readonly value: "var(--color-alpha-white-4)";
}, {
    readonly name: "alpha-white-6";
    readonly value: "var(--color-alpha-white-6)";
}, {
    readonly name: "alpha-white-10";
    readonly value: "var(--color-alpha-white-10)";
}, {
    readonly name: "alpha-white-16";
    readonly value: "var(--color-alpha-white-16)";
}, {
    readonly name: "alpha-white-24";
    readonly value: "var(--color-alpha-white-24)";
}, {
    readonly name: "alpha-black-2";
    readonly value: "var(--color-alpha-black-2)";
}, {
    readonly name: "alpha-black-4";
    readonly value: "var(--color-alpha-black-4)";
}, {
    readonly name: "alpha-black-6";
    readonly value: "var(--color-alpha-black-6)";
}, {
    readonly name: "alpha-black-10";
    readonly value: "var(--color-alpha-black-10)";
}, {
    readonly name: "alpha-black-16";
    readonly value: "var(--color-alpha-black-16)";
}, {
    readonly name: "alpha-black-24";
    readonly value: "var(--color-alpha-black-24)";
}, {
    readonly name: "alpha-black-32";
    readonly value: "var(--color-alpha-black-32)";
}, {
    readonly name: "alpha-black-40";
    readonly value: "var(--color-alpha-black-40)";
}, {
    readonly name: "alpha-black-50";
    readonly value: "var(--color-alpha-black-50)";
}];
export declare const colorsMap: Record<ColorName, Color>;
export declare function getColor<N extends ColorName>(name: N): Color;
export declare const dsColorsTokens: {
    name: string;
    colors: {
        name: string;
        value: string;
        white: boolean;
    }[];
}[];
export declare const dsColors: {
    name: string;
    variations: number[];
}[];
