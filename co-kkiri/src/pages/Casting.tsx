import EvaluationChip from "@/components/commons/Chips/EvaluationChip";
import { EVALUATION_COMMENT } from "@/constants/evaluationChip";

export default function Casting() {
  const { compliments, improvements } = EVALUATION_COMMENT;
  return (
    <div>
      <EvaluationChip label={compliments.member.creative} />
    </div>
  );
}
