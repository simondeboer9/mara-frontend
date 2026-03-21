"use client";

import { useRouter } from "next/navigation";
import type { VisualInspectorPageOption } from "@/lib/visual-inspector/mockData";

type PageSelectorProps = {
  klantId: string;
  selectedPageId: string;
  selectedDevice: string;
  selectedVersionId: string;
  selectedPeriod: string;
  selectedTraffic: string;
  pages: VisualInspectorPageOption[];
};

export default function PageSelector({
  klantId,
  selectedPageId,
  selectedDevice,
  selectedVersionId,
  selectedPeriod,
  selectedTraffic,
  pages,
}: PageSelectorProps) {
  const router = useRouter();

  return (
    <section
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        marginBottom: "24px",
      }}
    >
      <label
        htmlFor="visual-inspector-page-selector"
        style={{ display: "block", fontSize: "14px", color: "#6b7280", marginBottom: "12px" }}
      >
        Paginaselector
      </label>
      <select
        id="visual-inspector-page-selector"
        value={selectedPageId}
        onChange={(e) => {
          const nextUrl = `/visual-inspector?klant=${klantId}&page=${e.target.value}&device=${selectedDevice}&version=${selectedVersionId}&period=${selectedPeriod}&traffic=${selectedTraffic}`;
          const currentScrollY = window.scrollY;

          router.replace(nextUrl, { scroll: false });

          requestAnimationFrame(() => {
            window.scrollTo({ top: currentScrollY });
          });
          setTimeout(() => {
            window.scrollTo({ top: currentScrollY });
          }, 0);
        }}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #dbe4ee",
          background: "#f8fafc",
          color: "#111827",
        }}
      >
        {pages.map((page) => (
          <option key={page.id} value={page.id}>
            {page.label} ({page.path})
          </option>
        ))}
      </select>
    </section>
  );
}
