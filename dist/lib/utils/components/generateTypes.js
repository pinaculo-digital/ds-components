class GenerationTypesObject {
    getMockValue(typeText) {
        const type = typeText.replace(/\s/g, "").replace(/\|undefined/g, "");
        if (type === "any" || type === "unknown")
            return null;
        if (type === "string")
            return "example";
        if (type === "boolean")
            return false;
        if (type === "number")
            return 12;
        if (type === "Date")
            return new Date().toISOString();
        if (type === "IconName")
            return "question-line";
        if (type === "ColorTheme")
            return "information";
        if (type === "ColorName")
            return "white";
        if (type.endsWith("[]")) {
            const innerType = type.slice(0, -2);
            const val = Array(2).fill(this.getMockValue(innerType));
            return val;
        }
        if (type.includes("|")) {
            const parts = type.split("|").map((p) => p.trim());
            const known = parts.find((t) => ["string", "number", "boolean"].includes(t));
            return known ? this.getMockValue(known) : parts[0];
        }
        if (type.startsWith("{") && type.endsWith("}")) {
            try {
                const inner = type
                    .slice(1, -1)
                    .split(";")
                    .map((s) => s.trim())
                    .filter(Boolean);
                const obj = {};
                for (const pair of inner) {
                    const [key, val] = pair.split(":").map((s) => s.trim());
                    if (key && val) {
                        const cleanKey = key.replace("?", "");
                        obj[cleanKey] = this.getMockValue(val);
                    }
                }
                return obj;
            }
            catch {
                return {};
            }
        }
        return undefined;
    }
    generateMockObject(props) {
        const mock = {};
        for (const { prop, value } of props) {
            const objKey = prop.replace("?", "");
            mock[objKey] = this.getMockValue(value);
        }
        return mock;
    }
}
const generatorObjects = new GenerationTypesObject();
export default generatorObjects;
