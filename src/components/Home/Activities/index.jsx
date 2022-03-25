import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Activities = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-16 py-8 flex'>
        <p className='border-b border-purple-pantone-500 flex-none font-medium text-lg'>Actividades recientes</p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3.8}
        slidesPerGroup={1}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        // onSlideChange={() => console.log('change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {
            ({ isActive, isNext, isPrev }) => (
              <div className={`bg-gray-100 rounded-xl ${isActive | isPrev | isNext ? '' : 'opacity-50'}`}>
                <div className='flex items-end justify-end pt-20 pr-4 pb-4'>
                  <img src="images/escudo_java.png" alt="" className='h-32' />
                </div>
              </div>
            )
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            ({ isActive, isNext, isPrev }) => (
              <div className={`bg-gray-100 rounded-xl ${isActive | isPrev | isNext ? '' : 'opacity-50'}`}>
                <div className='flex items-end justify-end pt-20 pr-4 pb-4'>
                  <img src="images/escudo_git.png" alt="" className='h-32' />
                </div>
              </div>
            )
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            ({ isActive, isNext, isPrev }) => (
              <div className={`bg-gray-100 rounded-xl ${isActive | isPrev | isNext ? '' : 'opacity-50'}`}>
                <div className='flex items-end justify-end pt-20 pr-4 pb-4'>
                  <img src="images/escudo_c.png" alt="" className='h-32' />
                </div>
              </div>
            )
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            ({ isActive, isNext, isPrev }) => (
              <div className={`bg-gray-100 rounded-xl ${isActive | isPrev | isNext ? '' : 'opacity-50'}`}>
                <div className='flex items-end justify-end pt-20 pr-4 pb-4'>
                  <img src="images/escudo_java.png" alt="" className='h-32' />
                </div>
              </div>
            )
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            ({ isActive, isNext, isPrev }) => (
              <div className={`bg-gray-100 rounded-xl ${isActive | isPrev | isNext ? '' : 'opacity-50'}`}>
                <div className='flex items-end justify-end pt-20 pr-4 pb-4'>
                  <img src="images/escudo_git.png" alt="" className='h-32' />
                </div>
              </div>
            )
          }
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
