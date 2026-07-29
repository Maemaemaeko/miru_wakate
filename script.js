const sourceContainer = document.getElementById("source-text");

async function renderDocument() {
const response = await fetch("content.md");
if (!response.ok) {
  throw new Error("本文を読み込めませんでした。");
}
const sourceText = await response.text();

const boldPhrases = [
  "従来の問題設定が置いている前提や制約のために、本質的に扱えない対象が存在すること",
  "提案タスクの着想につながった観察や思考過程",
  "新規タスクが自然に導かれる問いである",
  "現実のニーズと既存の問題設定との間にあるギャップを示し、そのギャップを埋めるための自然な問いとして新規タスクを位置付けることが重要だとわかる。",
];
const impactExamples = [
  { prefix: "- VQA² [17]では、", title: "・VQA² [17]" },
  { prefix: "- Agriculture-Vision [12]では、", title: "・Agriculture-Vision [12]" },
  { prefix: "- Interactive Medical Image Segmentation [24]では、", title: "・Interactive Medical Image Segmentation [24]" },
  { prefix: "- FIction [16]では、", title: "・FIction [16]" },
  { prefix: "- Structure from Collision [14]では、", title: "・Structure from Collision [14]" },
];
const needExamples = [
  "Agriculture-Vision: A Large Aerial Image Database for Agricultural Pattern Analysis [12]:",
  "Learning to detect unseen object classes by between-class attribute transfer [13]:",
  "Structure from Collision [14]:",
  "Panoptic Segmentation [15]:",
];

function normalizeLeadingSpaces(text) {
  return text.replace(/^ +/, (spaces) => "　".repeat(spaces.length));
}

function appendFormattedText(element, text) {
  let cursor = 0;
  while (cursor < text.length) {
    const remaining = text.slice(cursor);
    const citation = remaining.match(/\[(\d+)\]/);
    const boldCandidates = boldPhrases
      .map((phrase) => ({ phrase, index: remaining.indexOf(phrase) }))
      .filter(({ index }) => index >= 0);
    const bold = boldCandidates.sort((a, b) => a.index - b.index)[0];
    const citationIndex = citation?.index ?? Infinity;
    const boldIndex = bold?.index ?? Infinity;

    if (citationIndex === Infinity && boldIndex === Infinity) {
      element.append(document.createTextNode(remaining));
      break;
    }

    const nextIndex = Math.min(citationIndex, boldIndex);
    element.append(document.createTextNode(remaining.slice(0, nextIndex)));

    if (boldIndex <= citationIndex) {
      const strong = document.createElement("strong");
      strong.textContent = bold.phrase;
      element.append(strong);
      cursor += boldIndex + bold.phrase.length;
    } else {
      const citationLink = document.createElement("a");
      citationLink.className = "citation-link";
      citationLink.href = `#ref-${citation[1]}`;
      citationLink.textContent = citation[0];
      citationLink.setAttribute("aria-label", `参考文献${citation[1]}へ移動`);
      element.append(citationLink);
      cursor += citationIndex + citation[0].length;
    }
  }
}

function appendStarEmphasis(element, text) {
  element.append(document.createTextNode("・"));
  const emphasizedText = document.createElement("span");
  emphasizedText.className = "star-emphasis-text";
  const titleText = text.replace(/^・/, "");
  const normalizedTitle = /\[\d+\]$/.test(titleText.trim())
    ? `${titleText}：`
    : titleText;
  appendFormattedText(emphasizedText, normalizedTitle);
  element.append(emphasizedText);
}

let inEvidenceBlock = false;
let inDefinitionBlock = false;
const sourceLines = sourceText
  .split(/\r?\n/)
  .filter((line) => line.trim() && line.trim() !== "公開資料")
  .filter((line) => ![
    "- 現実世界にどのような未解決のニーズがあるのか",
    "- 従来の問題設定では、なぜそのニーズを満たせないのか？",
    "わかりやすいポイント",
  ].includes(line.trim()))
  .map((line) => {
    const trimmed = line.trim();
    if (trimmed === "新しいタスクの必要性を示すためには、主に次の2要素が必要であると考える。") {
      return "新しいタスクの必要性を示すためには、現実世界にどのような未解決のニーズがあるのか、そして従来の問題設定ではなぜそのニーズを満たせないのかを明確にする必要がある。";
    }
    if (trimmed === "上記の要素に追加で、提案タスクの着想につながった観察や思考過程が記されていると、新規タスクが自然に導かれる問いであることが読者にわかり、”わかりやすさ”につながると考える。") {
      return "さらに、提案タスクの着想につながった観察や思考過程が記されていると、そのタスクが必要性から自然に導かれた問いであることを読者が理解しやすくなる。";
    }
    return line;
  });
const referencesIndex = sourceLines.findIndex((line) => line.trim() === "【参考文献】");
const summaryIndex = sourceLines.findIndex((line) => line.trim() === "## まとめ");
const displayLines = referencesIndex >= 0 && summaryIndex > referencesIndex
  ? [
      ...sourceLines.slice(0, referencesIndex),
      ...sourceLines.slice(summaryIndex),
      ...sourceLines.slice(referencesIndex, summaryIndex),
    ]
  : sourceLines;

displayLines.forEach((part) => {
  const trimmed = part.trim();
  const isHeading = trimmed.startsWith("## ");
  const headingText = isHeading ? trimmed.slice(3) : "";
  if (isHeading) {
    inEvidenceBlock = false;
    inDefinitionBlock = false;
  }
  if (/^1\.\s/.test(trimmed)) inDefinitionBlock = true;
  if (/^[1-5]\.\s/.test(trimmed)) inEvidenceBlock = false;
  if (trimmed === "【根拠】") inEvidenceBlock = true;

  const impactExample = impactExamples.find(({ prefix }) => trimmed.startsWith(prefix));
  if (impactExample) {
    const wrapper = document.createElement("div");
    wrapper.className = "example-entry";
    const title = document.createElement("div");
    title.className = "star-emphasis";
    appendStarEmphasis(title, impactExample.title);
    const description = document.createElement("div");
    description.className = "example-description";
    appendFormattedText(description, trimmed.slice(impactExample.prefix.length));
    wrapper.append(title, description);
    sourceContainer.append(wrapper);
    return;
  }

  const needExample = needExamples.find((prefix) => trimmed.startsWith(prefix));
  if (needExample) {
    const wrapper = document.createElement("div");
    wrapper.className = "example-entry";
    const title = document.createElement("div");
    title.className = "star-emphasis";
    appendStarEmphasis(title, needExample.slice(0, -1));
    const description = document.createElement("div");
    description.className = "example-description";
    appendFormattedText(description, trimmed.slice(needExample.length).trimStart());
    wrapper.append(title, description);
    sourceContainer.append(wrapper);
    return;
  }

  const element = document.createElement(headingText ? "h2" : "div");
  element.className = headingText
    ? "document-heading"
    : "document-line";
  const isStarEmphasis = trimmed.startsWith("- ");
  const isPlainBullet =
    trimmed === "- 現実世界にどのような未解決のニーズがあるのか" ||
    trimmed === "- 従来の問題設定では、なぜそのニーズを満たせないのか？";
  if (isStarEmphasis && !isPlainBullet) element.classList.add("star-emphasis");
  if (/^[1-5]\.\s/.test(trimmed)) element.classList.add("definition-heading");
  if (inEvidenceBlock) element.classList.add("evidence-block");
  if (inDefinitionBlock) element.classList.add("definition-block");
  if (trimmed === "【根拠】") element.classList.add("evidence-label");
  if (trimmed === "【参考文献】") element.classList.add("reference-heading");

  const referenceMatch = trimmed.match(/^\[(\d+)\]\s+(.+)$/);
  if (referenceMatch) {
    element.id = `ref-${referenceMatch[1]}`;
    element.classList.add("reference-entry");
    const titleMatch = referenceMatch[2].match(/“([^”]+)”/);
    const query = titleMatch?.[1] ?? referenceMatch[2];
    const link = document.createElement("a");
    link.className = "reference-link";
    link.href = `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = normalizeLeadingSpaces(part);
    link.setAttribute("aria-label", `参考文献${referenceMatch[1]}をGoogle Scholarで開く`);
    element.append(link);
  } else if (headingText) {
    element.textContent = headingText;
  } else if (isPlainBullet) {
    element.textContent = `・${trimmed.replace(/^-\s*/, "")}`;
  } else if (isStarEmphasis) {
    appendStarEmphasis(element, trimmed.replace(/^-\s*/, ""));
  } else {
    appendFormattedText(element, normalizeLeadingSpaces(part));
  }

  sourceContainer.append(element);
});
}

renderDocument().catch((error) => {
  sourceContainer.textContent = error.message;
});
