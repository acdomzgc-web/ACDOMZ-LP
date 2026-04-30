import pb from '@/lib/pocketbase/client'

export interface Plan {
  id: string
  name: string
  description: string
  price_one_time: string
  price_sub_setup: string
  price_sub_monthly: string
  features: string[]
  one_time_benefits: string[]
  subscription_benefits: string[]
  order: number
}

export const getPlans = async () => {
  return pb.collection('plans').getFullList<Plan>({
    sort: 'order',
  })
}
