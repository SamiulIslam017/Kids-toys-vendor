import { useEffect, useState } from "react";
import Card from "./Card";
import CardTwo from "./cardTwo";





const ShopSection = () => {
    
    const [cat,setCat] = useState([])
    const [cat1,setCat1] = useState([])
    const [active, setActive] = useState(false);


    useEffect(() => {
        fetch('https://kids-toy-vendor-server.vercel.app/alltoys')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setCat(data)
        })
    },[])
    console.log(cat);
    
    
    
    const handleCat1 = () => {
        const copyCat = [...cat];
        const cat1 = copyCat.filter(pd => pd.subCategory == "Geometric Shape Toy")
        setCat1(cat1)
        setActive(true)
    }
    const handleCat2 = () => {
        const copyCat = [...cat]
        const cat2 = copyCat.filter(pd => pd.subCategory == "Plastic Robert")
        setCat1(cat2);
        setActive(true)
    }
    const handleCat3 = () => {
        const copyCat = [...cat]
        const cat3 = copyCat.filter(pd => pd.subCategory == "Shape Puzzles")
        setCat1(cat3);
        setActive(true)
    }
    const handleCat4 = () => {
        const copyCat = [...cat]
        const cat4 = copyCat.filter(pd => pd.subCategory == "Toy Blocks")
        setCat1(cat4);
        setActive(true)
    }
    const handleCat5 = () => {
        const copyCat = [...cat]
        const cat5 = copyCat.filter(pd => pd.subCategory == "Toy House")
        setCat1(cat5);
        setActive(true)
    }
    const handleCat6 = () => {
        const copyCat = [...cat]
        const cat6 = copyCat.filter(pd => pd.subCategory == "Wood Block Tower")
        setCat1(cat6);
        setActive(true)
    }
    const handleCat7 = () => {
        const copyCat = [...cat]
        const cat7 = copyCat.filter(pd => pd.subCategory == "Air craft")
        setCat1(cat7);
        setActive(true)
    }
    const handleCat8 = () => {
        const copyCat = [...cat]
        const cat8 = copyCat.filter(pd => pd.subCategory == "Civil Engineering")
        setCat1(cat8);
        setActive(true)
    }
    const handleCat9 = () => {
        const copyCat = [...cat]
        const cat9 = copyCat.filter(pd => pd.subCategory == "Lego Toys")
        setCat1(cat9);
        setActive(true)
    }
    console.log(cat1);
    return (
        <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <div className="w-4/12">
                <div className="p-2 border border-slate-200">
                    <h2 className="py-4 px-2 bg-custom text-2xl font-bold rounded-md">5 to 7 Years</h2>
                    <ul className="ml-6 flex flex-col gap-2">
                        <li className="cursor-pointer" onClick={handleCat1}>Geometric Shape Toy</li>
                        <li className="cursor-pointer" onClick={handleCat2}>Plastic Robert</li>
                        <li className="cursor-pointer" onClick={handleCat3}>Shape Puzzles</li>
                    </ul>
                </div>
                <div className="p-2 border border-slate-200">
                    <h2 className="py-4 px-2 bg-custom text-2xl font-bold">8 to 13 Years</h2>
                    <ul className="ml-6 flex flex-col gap-2">
                        <li className="cursor-pointer" onClick={handleCat4}>Toy Blocks</li>
                        <li className="cursor-pointer" onClick={handleCat5}>Toy House</li>
                        <li className="cursor-pointer" onClick={handleCat6}>Wood Block Tower</li>
                    </ul>
                </div>
                <div className="p-2 border border-slate-200">
                    <h2 className="py-4 px-2 bg-custom text-2xl font-bold">14 Years or Above</h2>
                    <ul className="ml-6 flex flex-col gap-2">
                        <li className="cursor-pointer" onClick={handleCat7}>Air craft</li>
                        <li className="cursor-pointer" onClick={handleCat8}>Civil Engineering</li>
                        <li className="cursor-pointer" onClick={handleCat9}>Lego Toys</li>
                    </ul>
                </div>
                
            </div>
            
            <div className="w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    active === true ? cat1?.map(prod => <Card key={prod._id} prod={prod}></Card>) : cat?.slice(0,6).map(prod => <CardTwo key={prod._id} prod={prod}></CardTwo>)
                }
            </div>
        </div>
    );
};

export default ShopSection;