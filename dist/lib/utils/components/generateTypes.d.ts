<<<<<<< HEAD
import type { props } from "../../types/ds-types.js";
=======
import { props } from './ds-types';
>>>>>>> fae945514fecb9d2f7205440a0930cdbb50cde3d
declare class GenerationTypesObject {
    private getMockValue;
    generateMockObject(props: props[]): Record<string, any>;
}
declare const generatorObjects: GenerationTypesObject;
export default generatorObjects;
