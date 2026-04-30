import PocketBase from 'pocketbase'
import imageStars from '@/assets/image-5d08c.png'

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL)
pb.autoCancellation(false)

// Intercept getUrl to serve local assets for specific synchronized records
const originalGetUrl = pb.files.getUrl.bind(pb.files)
pb.files.getUrl = (record, filename, queryParams) => {
  if (filename === 'src/assets/image-5d08c.png') {
    return imageStars
  }
  return originalGetUrl(record, filename, queryParams)
}

export default pb
