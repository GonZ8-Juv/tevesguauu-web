type SectionTitleAlign = 'left' | 'center' | 'right'

type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: SectionTitleAlign
}

const alignClasses: Record<SectionTitleAlign, string> = {
  left: 'items-start text-left',
  center: 'mx-auto items-center text-center',
  right: 'ml-auto items-end text-right',
}

function SectionTitle({ eyebrow, title, description, align = 'center' }: SectionTitleProps) {
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClasses[align]}`}>
      {eyebrow ? (
        <p className="w-fit rounded-full bg-[#F7AFC5]/35 px-4 py-2 text-sm font-bold text-[#D94A7F]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-extrabold text-[#E85A93] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="max-w-2xl text-base leading-7 text-[#8A8A8A] sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionTitle
