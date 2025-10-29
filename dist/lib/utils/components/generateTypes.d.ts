import { props } from './ds-types';
declare class GenerationTypesObject {
    private getMockValue;
    generateMockObject(props: props[]): Record<string, any>;
}
declare const generatorObjects: GenerationTypesObject;
export default generatorObjects;
