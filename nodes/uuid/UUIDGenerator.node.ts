import { IExecuteFunctions } from "n8n-core";

import {
  IDataObject,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";
import { v4 as uuidv4 } from "uuid";

export class UUIDGenerator implements INodeType {
  description: INodeTypeDescription = {
    displayName: "UUID Generator",
    name: "UUID Generator",
    icon: "file:uuid.svg",
    group: ["input"],
    version: 1,
    description: "Generete unique id for any",
    defaults: {
      name: "UUID Generator",
    },
    inputs: ["main"],
    outputs: ["main"],
    credentials: [],
    properties: [],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const uuid = { uuid: uuidv4() };
    let returnItems = this.helpers.returnJsonArray(
      uuid as unknown as IDataObject[]
    );

    return this.prepareOutputData(returnItems);
  }
}
