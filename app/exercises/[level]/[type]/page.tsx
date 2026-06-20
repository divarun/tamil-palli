import { ExerciseClient } from "./_client";

export function generateStaticParams() {
  return [
    { level: "novice", type: "letter-recognition" },
    { level: "novice", type: "match-pair" },
    { level: "novice", type: "fill-blank" },
    { level: "intermediate", type: "fill-blank" },
    { level: "intermediate", type: "match-pair" },
    { level: "advanced", type: "comprehension" },
    { level: "advanced", type: "fill-blank" },
  ];
}

type Props = { params: Promise<{ level: string; type: string }> };

export default async function ExercisePage({ params }: Props) {
  const { level, type } = await params;
  return <ExerciseClient level={level} type={type} />;
}
