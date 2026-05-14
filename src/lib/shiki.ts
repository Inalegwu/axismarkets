import {
    type BundledLanguage,
    type BundledTheme,
    type HighlighterGeneric,
    createHighlighter,
} from "shiki";

const sequoia = {
  name: "sequoia",
  backgroundColor: "#0F1014",
  settings: [
    {
      scope: ["comment"],
      settings: {
        foreground: "#43444D",
      },
    },
    {
      scope: ["constant"],
      settings: {
        foreground: "#8eb6f5",
      },
    },
    {
      scope: [
        "constant.numeric",
        "constant.language",
        "constant.charcter.escape",
      ],
      settings: {
        foreground: "#ffbb88",
      },
    },
    {
      scope: ["entity.name"],
      settings: {
        foreground: "#ffbb88",
      },
    },
    {
      scope: [
        "entity.name.section",
        "entity.name.tag",
        "entity.name.namespace",
        "entity.name.type",
      ],
      settings: {
        foreground: "#c58fff",
      },
    },
    {
      scope: ["entity.other.attribute-name", "entity.other.inherited-class"],
      settings: {
        foreground: "#fdfdfe",
      },
    },
    {
      scope: ["invalid"],
      settings: {
        foreground: "#f58ee0",
      },
    },
    {
      scope: ["invalid.deprecated"],
      settings: {
        foreground: "#575861",
      },
    },
    {
      scope: ["keyword"],
      settings: {
        foreground: "#8eb6f5",
      },
    },
    {
      scope: ["meta.tag", "meta.brace"],
      settings: {
        foreground: "#868690",
      },
    },
    {
      scope: ["meta.import", "meta.export"],
      settings: {
        foreground: "#8eb6f5",
      },
    },
    {
      scope: "meta.directive.vue",
      settings: {
        foreground: "#fdfdfe",
      },
    },
    {
      scope: "meta.property-name.css",
      settings: {
        foreground: "#c58fff",
      },
    },
    {
      scope: "meta.property-value.css",
      settings: {
        foreground: "#9898a6",
      },
    },
    {
      scope: "meta.tag.other.html",
      settings: {
        foreground: "#575861",
      },
    },
    {
      scope: ["punctuation"],
      settings: {
        foreground: "#575861",
      },
    },
    {
      scope: ["punctuation.accessor"],
      settings: {
        foreground: "#8eb6f5",
      },
    },
    {
      scope: ["punctuation.definition.string"],
      settings: {
        foreground: "#9898a6",
      },
    },
    {
      scope: ["punctuation.definition.tag"],
      settings: {
        foreground: "#43444D",
      },
    },
    {
      scope: ["storage.type", "storage.modifier"],
      settings: {
        foreground: "#8eb6f5",
      },
    },
    {
      scope: ["string"],
      settings: {
        foreground: "#9898a6",
      },
    },
    {
      scope: ["support"],
      settings: {
        foreground: "#c58fff",
      },
    },
    {
      scope: ["support.constant"],
      settings: {
        foreground: "#9898a6",
      },
    },
    {
      scope: ["support.function"],
      settings: {
        foreground: "#f58ee0",
      },
    },
    {
      scope: ["variable"],
      settings: {
        foreground: "#ffbb88",
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "variable.other",
        "variable.language",
        "variable.function",
        "variable.argument",
      ],
      settings: {
        foreground: "#868690",
      },
    },
    {
      scope: ["variable.parameter"],
      settings: {
        foreground: "#fdfdfe",
      },
    },
  ],
};

declare global {
  var __highlighter: HighlighterGeneric<BundledLanguage, BundledTheme>;
}

if (global.__highlighter) {
  global.__highlighter = await createHighlighter({
    themes: [sequoia],
    langs: ["typescript", "javascript", "zig", "rust"],
  });
}

export const highlighter = global.__highlighter;
