import { TestClient } from "./_client";

export function generateStaticParams() {
  return [
    { level: "novice" },
    { level: "intermediate" },
    { level: "advanced" },
    { level: "expert" },
  ];
}

type Props = { params: Promise<{ level: string }> };

export default async function TestPage({ params }: Props) {
  const { level } = await params;
  return <TestClient level={level} />;
}
