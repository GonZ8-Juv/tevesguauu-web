export type Recommendation = {
  id: string
  slug: string
  title: string
  emoji: string
  excerpt: string
  content: string
  tips?: string[]
  highlight?: string
  category: string
  featured?: boolean
}
