
import Banner from '../components/Banner';
import Sidber from '../components/Sidber';
import { Outlet, useLoaderData } from 'react-router-dom';
export default function Home() {

    const categories = useLoaderData()


    return (
        <div className="h-[500px] rounded-b-xl mx-3 bg-[#9538E2]">
            <Banner></Banner>
            <div className="bg-gray-100 p-10">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Explore Cutting-Edge Gadgets
                </h2>

                <div className="flex sm:justify-center flex-col lg:flex-row gap-6">
                    <div className="bg-white shadow-md p-5 rounded-lg lg:w-1/4">
                        <Sidber categories={categories} />
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
