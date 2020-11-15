import type { OutputBlockData, OutputData } from "@editorjs/editorjs";
import { useMemo } from "react";
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
      type: "paragraph",
      data: {
        text: "<p>TEST</p>",
      },
    },
  ],
};

const ALTEditor: FunctionComponent = () => {
  const blockTools = useMemo(
    () =>
      outputData.blocks.map(({ id }) => {
        return {
          id,
          html: `<p>data</p>`,
        };
      }),
    [outputData]
  );

  return (
    <>
      {blockTools.map(({ id, html }) => (
        <div key={id}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      ))}
    </>
  );
};

export { ALTEditor };
export type { ALTEditorOutputData, ALTEditorOutputBlockData };
