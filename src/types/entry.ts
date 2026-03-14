import type { RenderedContent } from 'astro:content'

export interface PropsType {
  class?: string
  title: string
  url: string
  published: Date
  updated?: Date
  tags: string[]
  category: string | null
  image: string
  description: string
  draft: boolean
  style: string
  words?: number
  minutes?: number
  excerpt?: string
}

export interface EntryType {
  id: string
  data: PropsType
  filePath: string | undefined
  body: string | undefined
  degest: string | undefined
  rendered: RenderedContent | undefined
}
