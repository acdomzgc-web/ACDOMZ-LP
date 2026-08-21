import pb from '@/lib/pocketbase/client'

export interface Plan {
  id: string
  name: string
  tagline?: string
  description: string
  price_one_time: string
  features: string[]
  order: number
}

export const getPlans = async () => {
  return pb.collection('plans').getFullList<Plan>({
    sort: 'order',
  })
}
