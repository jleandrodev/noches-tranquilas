"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="font-nunito text-[18px] font-bold text-[#1a2e35] mt-8 mb-3 first:mt-0 flex items-center gap-2 leading-snug">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-nunito text-[15px] font-bold text-[#217587] mt-5 mb-2 leading-snug">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[14px] text-[#4a6a72] leading-[1.75] mb-4">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-[#1a2e35]">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-[#217587]">{children}</em>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 space-y-2 list-none counter-reset-[item]">{children}</ol>
  ),
  li: ({ children, ...props }) => {
    const isOrdered = (props as { ordered?: boolean }).ordered;
    return (
      <li className="flex items-start gap-2.5 text-[14px] text-[#4a6a72] leading-relaxed">
        {isOrdered ? (
          <span
            className="shrink-0 w-5 h-5 rounded-full bg-[#217587] text-white text-[10px] font-bold flex items-center justify-center mt-0.5"
          >
            {(props as { index?: number }).index !== undefined ? ((props as { index?: number }).index ?? 0) + 1 : "•"}
          </span>
        ) : (
          <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#217587]/60" />
        )}
        <span>{children}</span>
      </li>
    );
  },
  blockquote: ({ children }) => (
    <blockquote
      className="my-4 pl-4 py-3 pr-4 rounded-2xl text-[13px] text-[#3d6670] leading-relaxed"
      style={{
        background: "linear-gradient(135deg, rgba(33,117,135,0.07), rgba(53,168,192,0.04))",
        borderLeft: "3px solid #217587",
      }}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <div
          className="my-4 rounded-2xl p-4 overflow-x-auto"
          style={{ background: "rgba(33,117,135,0.06)", border: "1px solid rgba(33,117,135,0.10)" }}
        >
          <code className="text-[12px] text-[#217587] font-mono leading-relaxed whitespace-pre">
            {children}
          </code>
        </div>
      );
    }
    return (
      <code
        className="text-[12px] font-mono px-1.5 py-0.5 rounded-md text-[#217587]"
        style={{ background: "rgba(33,117,135,0.08)" }}
      >
        {children}
      </code>
    );
  },
  hr: () => (
    <hr className="my-6 border-none h-px bg-gradient-to-r from-transparent via-[#e2edf0] to-transparent" />
  ),
  table: ({ children }) => (
    <div className="my-4 overflow-x-auto rounded-2xl" style={{ border: "1px solid #e8f4f7" }}>
      <table className="w-full text-[13px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead style={{ background: "rgba(33,117,135,0.06)" }}>{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2.5 text-left text-[11px] font-bold text-[#217587] uppercase tracking-wide">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2.5 text-[#4a6a72] border-t border-[#e8f4f7]">{children}</td>
  ),
};

interface ArticleBodyProps {
  content: string;
}

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
