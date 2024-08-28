import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];
const text ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.";

const Hero = () => {
    return (
        <div className='grid gap-28 lg:grid-cols-2 items-center max-lg: sect-center'>
            <div>
                <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
                    We are changing the way people shop.
                </h1>

                <p className='mt-8 max-w-xl text-lg leading-8'>
                    {text}
                </p>
                <div className='mt-10 '>
                    <Link to='products' className='btn btn-primary '>
                        Our Products
                    </Link>
                </div>
            </div>
            <div className='max-lg:hidden h-[28rem] lg:carousel carousel-center p-8 space-x-8 bg-neutral rounded-box'>
                {
                    carouselImages.map((image) => {
                        return (
                            <div key={image} className='carousel-item'>
                                <img src={image} alt='img' className='rounded-box h-full w-80 object-cover'></img>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Hero;