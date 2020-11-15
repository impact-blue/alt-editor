import type { OutputBlockData, OutputData } from "@editorjs/editorjs";
import type { FunctionComponent } from "react";

interface ALTEditorOutputData extends OutputData {
  blocks: ALTEditorOutputBlockData[];
}

interface ALTEditorOutputBlockData extends OutputBlockData {
  id: string;
}

const outputData: ALTEditorOutputData = {
  blocks: [
    {
      id: "0000",
      type: "text",
      data: {
        text: "<p>TEST</p>",
      },
    },
  ],
};

const ALTEditor: FunctionComponent = () => (
  <div>
    {outputData.blocks.map(({ id, type, data }) => (
      <div key={id}>
        <div>type: {type}</div>
        <div>data: {JSON.stringify(data)}</div>
      </div>
    ))}
  </div>
);

export { ALTEditor };
export type { ALTEditorOutputData, ALTEditorOutputBlockData };
