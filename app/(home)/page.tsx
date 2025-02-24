import { HomeCarousel } from '@/components/sharred/home/home-carousel'
import data from '@/lib/data'

const page = () => {
  return <HomeCarousel items={data.carousels} />
}

export default page
