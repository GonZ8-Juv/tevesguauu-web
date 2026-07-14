import type { Recommendation } from '../../types/recommendation'
import Button from '../ui/Button'
import Card from '../ui/Card'

type RecommendationCardProps = {
  recommendation: Recommendation
  onRead: (recommendation: Recommendation) => void
}

function RecommendationCard({ recommendation, onRead }: RecommendationCardProps) {
  return (
    <Card className="flex h-full flex-col border border-[#F7AFC5]/25">
      <div className="flex items-start justify-between gap-4">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-[#F7AFC5]/30 text-3xl"
          aria-hidden="true"
        >
          {recommendation.emoji}
        </span>

        {recommendation.featured ? (
          <span className="rounded-full bg-[#FFF8FA] px-3 py-1 text-xs font-bold text-[#D94A7F]">
            Recomendación destacada
          </span>
        ) : null}
      </div>

      <p className="mt-5 text-sm font-bold text-[#D94A7F]">{recommendation.category}</p>
      <h3 className="mt-2 text-2xl font-extrabold text-[#E85A93]">{recommendation.title}</h3>
      <p className="mt-3 flex-1 text-base leading-7 text-[#2B2B2B]/80">
        {recommendation.excerpt}
      </p>

      <Button
        type="button"
        variant="outline"
        className="mt-6 w-full"
        onClick={() => onRead(recommendation)}
      >
        Leer recomendación
      </Button>
    </Card>
  )
}

export default RecommendationCard
