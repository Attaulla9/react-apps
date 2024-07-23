import { truncateText } from "@utils/helpers.js";

function ProductCard(props) {
    return (
      <>
        <main className="py-6">
            <div className="w-72 shadow-md rounded m-3">
            <div className="h-3/4 w-full">
                <img className="w-full h-full object-cover rounded-t" src={props?.product?.images[0] ?props?.product?.images[0] : "https://flowbite.com/docs/images/examples/image-1@2x.jpg"} alt="piña" />
            </div>
            <div className="w-full  p-3">
                <a href="#" className=" hover:text-yellow-600 text-gray-700">
                <span className=" font-semibold  tracking-wide ">{props?.product?.title}</span>
                </a>
                <p className="text-gray-600 text-sm leading-5 mt-1">{truncateText(props?.product?.description)}</p>
            </div>
            </div>
        </main>
      </>
    )
  }
  
  export default ProductCard;
  