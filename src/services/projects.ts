import pb from '@/lib/pocketbase/client'

export interface ProjectRecord {
  id: string
  title: string
  company: string
  niche: string
  description: string
  features: string
  image: string
  created: string
  updated: string
  collectionId: string
}

export const getProjects = () =>
  pb.collection('projects').getFullList<ProjectRecord>({
    sort: 'created',
  })

export const getProjectImageUrl = (record: ProjectRecord) => {
  if (!record.image) return null
  return pb.files.getURL(record, record.image)
}
