import pb from '@/lib/pocketbase/client'

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar?: string
  order?: number
  created?: string
  updated?: string
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  return pb.collection('testimonials').getFullList<Testimonial>({
    sort: 'order,created',
  })
}
