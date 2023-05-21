import { useState } from "react";


const ShopSection = () => {
    const [toys, setToys]= useState([])
    const subCategorys = [
        {
            'category': "5 to 7 Years",
            'onesubCategory': [
                "Geometric Shape Toy",
                "Plastic Robert",
                "Shape Puzzles",
            ]
        },
        {
            'category': "8 to 13 Years",
            'twosubCategory': [
                "Toy Blocks",
                "Toy House",
                "Wood Block Tower",
            ]
        },
        {
            'category': "14 Years or Above",
            'threesubCategory': [
                "Air craft",
                "Civil Engineering",
                "Lego Toys",
            ]
        },
        
        
       
      ];
      const filterproduct = (name) => {
        fetch('http://localhost:5000/allToys')
        .then(res => res.json())
        .then(data => {
            
            data.filter(subCat => subCat.subCategory == name)
            setToys(data)
            console.log(data);
        })
      }
    return (
        <div>
            <div className="w-4/12 pr-6">
                <ul>
                    <li>
                        <span className="text-3xl font bold py-3 block px-3 primary-bg-color">5 to 7 Years</span>
                        <ul className="border border-slate-200">
                            {
                                subCategorys[0].onesubCategory.map((cat, index) => {
                                    return <li onClick={() =>filterproduct(cat)} className="border-b border-b-slate-200 pl-7 py-3" key={index}>{cat}</li>
                                })
                            }
                        </ul>
                    </li>
                    <li>
                        <span className="text-3xl font bold py-3 block px-3 primary-bg-color">8 to 13 Years</span>
                        <ul className="border border-slate-200">
                            {
                                subCategorys[1].twosubCategory.map((cat, index) => {
                                    return <li className="border-b border-b-slate-200 pl-7 py-3" key={index}>{cat}</li>
                                })
                            }
                        </ul>
                    </li>
                    <li>
                        <span className="text-3xl font bold py-3 block px-3 primary-bg-color">8 to 13 Years</span>
                        <ul className="border border-slate-200">
                            {
                                subCategorys[2].threesubCategory.map((cat, index) => {
                                    return <li className="border-b border-b-slate-200 pl-7 py-3" key={index}>{cat}</li>
                                })
                            }
                        </ul>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    );
};

export default ShopSection;