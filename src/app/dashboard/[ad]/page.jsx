import React from 'react'
import Ad_detail from '@/components/ad-details/Ad_detail';

const page = ({params}) => {

  return (
    <div>
      <Ad_detail adId={params.ad} />
    </div>
  )
}

export default page