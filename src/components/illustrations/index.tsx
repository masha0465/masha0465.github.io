import type { ReactNode } from "react";
import { CloudInfra } from "./CloudInfra";
import { CobotWheelSetup } from "./CobotWheelSetup";
import { DbAccessControl } from "./DbAccessControl";
import { IndustrialCell } from "./IndustrialCell";
import { K8sCluster } from "./K8sCluster";
import { ChatbotQa, ProcessBoard } from "./Misc";
import { MobileDevices } from "./MobileDevices";
import { VisionInspection } from "./VisionInspection";
import { WebServerClouds } from "./WebServerClouds";
import { WorkflowSystem } from "./WorkflowSystem";

export type IllustrationProps = { slice?: boolean };
type Render = (p: IllustrationProps) => ReactNode;

/**
 * Original system illustrations per project slug. These are concept drawings of the
 * systems described in the career document — not product photos or vendor artwork.
 */
const MAP: Record<string, Render> = {
  "evo-w-olt-test-simulator": (p) => <IndustrialCell {...p} />,
  "qa-system-0-to-1": (p) => <WorkflowSystem {...p} />,
  "clevis-vmi-verification": (p) => <VisionInspection {...p} />,
  "onboarding-setup-manual": (p) => <CobotWheelSetup {...p} />,

  "im-webmanager-e2e": (p) => <DbAccessControl {...p} variant="e2e" />,
  "dbsafer-e2e-framework": (p) => <DbAccessControl {...p} variant="e2e" />,
  "k8s-test-environment": (p) => <K8sCluster {...p} />,
  "ncp-csp-infra-automation": (p) => <CloudInfra {...p} />,
  "webmanager-playwright-framework": (p) => <DbAccessControl {...p} variant="e2e" />,
  "pnp-qna-bot-qa": (p) => <ChatbotQa {...p} />,
  "webmanager-first-release": (p) => <DbAccessControl {...p} variant="release" />,
  "dbsafer-api-automation": (p) => <DbAccessControl {...p} variant="api" />,
  "clickup-process": (p) => <ProcessBoard {...p} />,
  "nosql-8db-verification": (p) => <DbAccessControl {...p} variant="db" />,
  "postgresql-module-compat": (p) => <DbAccessControl {...p} variant="db" />,

  "webtob-multi-cloud": (p) => <WebServerClouds {...p} variant="multicloud" />,
  "webtob5-gs-certification": (p) => <WebServerClouds {...p} variant="gs" />,
  "webtob5-performance": (p) => <WebServerClouds {...p} variant="perf" />,
  "openssl-security-patch": (p) => <WebServerClouds {...p} variant="openssl" />,
  "webtob-release-qa-automation": (p) => <WebServerClouds {...p} variant="release" />,

  "nhn-mobile-qa": (p) => <MobileDevices {...p} />,
};

export function hasIllustration(slug: string): boolean {
  return slug in MAP;
}

/** Renders the illustration for a project, or nothing if none is registered. */
export function ProjectIllustration({ slug, slice }: { slug: string } & IllustrationProps) {
  const render = MAP[slug];
  return render ? <>{render({ slice })}</> : null;
}
