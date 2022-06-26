import * as model from "./model";

// takes a JSON response and deserializes it into the required model objects / types
export function deserialize(json: any, type: string): any {
  // handle arrays
  if (type.endsWith("[]")) {
    const arrayType = type.substring(0, type.length - 2);
    return json.map((item: any) => deserialize(item, arrayType));
  }

  // handle model objects
  if (model.models.includes(type)) {
    const modelObject = new (<any>model)[type]();
    const properties = (<any>model)[type].propertyTypes;
    for (const property of properties) {
      if (json[property.name] !== undefined) {
        modelObject[property.name] = deserialize(
          json[property.name],
          property.type
        );
      }
    }
    return modelObject;
  }

  // handle date types
  if (type === "Date") {
    return new Date(json);
  }

  // handle additional properties
  const match = type.match(/\{ \[name: string\]: (.*) \}/);
  if (match) {
    const typeName = match[1];
    const modelObject: { [name: string]: any } = {};
    for (const key in json) {
      modelObject[key] = deserialize(json[key], typeName);
    }
    return modelObject;
  }

  return json;
}

export function serialize(item: any, type: string): string {
  return typeof item === "object" ? JSON.stringify(item) : item.toString();
}
