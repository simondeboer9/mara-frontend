import DashboardLayout from "@/components/layout/DashboardLayout";
import InspectorInfoPanel from "@/components/visual-inspector/InspectorInfoPanel";
import PageBehaviorCanvas from "@/components/visual-inspector/PageBehaviorCanvas";
import PageSelector from "@/components/visual-inspector/PageSelector";
import VersionTimeline from "@/components/visual-inspector/VersionTimeline";
import VisualInspectorHeader from "@/components/visual-inspector/VisualInspectorHeader";
import VisualInspectorPeriodSelector from "@/components/visual-inspector/VisualInspectorPeriodSelector";
import { getVisualInspectorData } from "@/lib/visual-inspector/mockData";

type VisualInspectorPageProps = {
  searchParams: Promise<{
    klant?: string;
    page?: string;
    device?: string;
    version?: string;
    period?: string;
    traffic?: string;
  }>;
};

export default async function VisualInspectorPage({
  searchParams,
}: VisualInspectorPageProps) {
  const params = await searchParams;
  const data = getVisualInspectorData({
    klantId: params.klant,
    pageId: params.page,
    device: params.device,
    versionId: params.version,
    period: params.period,
    traffic: params.traffic,
  });

  return (
    <DashboardLayout>
      <VisualInspectorHeader klantNaam={data.klantNaam} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: "24px",
          marginBottom: "24px",
        }}
      >
        <VisualInspectorPeriodSelector
          klantId={data.klantId}
          selectedPageId={data.selectedPage.id}
          selectedDevice={data.selectedDevice}
          selectedVersionId={data.selectedVersion.id}
          selectedPeriod={data.selectedPeriod}
          selectedTraffic={data.selectedTrafficParam}
          periods={data.periods}
        />
        <PageSelector
          klantId={data.klantId}
          selectedPageId={data.selectedPage.id}
          selectedDevice={data.selectedDevice}
          selectedVersionId={data.selectedVersion.id}
          selectedPeriod={data.selectedPeriod}
          selectedTraffic={data.selectedTrafficParam}
          pages={data.pages}
        />
      </div>
      <VersionTimeline
        klantId={data.klantId}
        selectedPageId={data.selectedPage.id}
        selectedDevice={data.selectedDevice}
        selectedVersionId={data.selectedVersion.id}
        selectedPeriod={data.selectedPeriod}
        selectedTraffic={data.selectedTrafficParam}
        versions={data.versions}
      />

      <div
        style={{
          display: "grid",
          gap: "24px",
        }}
      >
        <InspectorInfoPanel
          klantId={data.klantId}
          selectedPage={data.selectedPage}
          selectedVersion={data.selectedVersion}
          selectedDevice={data.selectedDevice}
          selectedPeriod={data.selectedPeriod}
          selectedTraffic={data.selectedTraffic}
          selectedTrafficParam={data.selectedTrafficParam}
          trafficOptions={data.trafficOptions}
        />
        <PageBehaviorCanvas
          selectedPage={data.selectedPage}
          selectedDevice={data.selectedDevice}
          selectedVersion={data.selectedVersion}
          selectedTraffic={data.selectedTraffic}
          trafficOptions={data.trafficOptions}
          dwellSections={data.dwellSections}
          pageHeight={data.pageHeight}
        />
      </div>
    </DashboardLayout>
  );
}
