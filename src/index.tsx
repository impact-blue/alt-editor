import type {
  OutputBlockData,
  OutputData,
  BlockTool,
} from "@editorjs/editorjs";
// @ts-expect-error
import Paragraph from "@editorjs/paragraph";
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
      outputData.blocks.map(({ id, type, data }) => {
        const blockTool = new Paragraph({
          api: {
            i18n: {
              t: (dictKey: string) => dictKey,
            },
            styles: {
              block: "cdx-block",
              inlineToolButton: "ce-inline-tool",
              inlineToolButtonActive: "ce-inline-tool--active",
              input: "cdx-input",
              loader: "cdx-loader",
              button: "cdx-button",
              settingsButton: "cdx-settings-button",
              settingsButtonActive: "cdx-settings-button--active",
            },
          },
          config: {},
          data,
        });

        return {
          id,
          html: blockTool.render(), // HTMLElement
        };
      }),
    [outputData]
  );

  return (
    <>
      {blockTools.map(({ id, html }) => (
        <div key={id}>
          <div dangerouslySetInnerHTML={{ __html: html.outerHTML }} />
        </div>
      ))}
    </>
  );
};

export { ALTEditor };
export type { ALTEditorOutputData, ALTEditorOutputBlockData };
