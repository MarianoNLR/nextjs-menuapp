import Image from "next/image"

export function FoodCard(props) {
    console.log(props.data)
    return (
        <>
            <div className="food-card-container relative flex items-center p-4 text-black border rounded-lg" onClick={(e) => props.handleShowModal(props.data)}>
                <div className=" flex-1 flex flex-col gap-2">
                    <p className="m-0 text-2xl pb-2">{props.name}</p>
                    <p className="m-0 text-xl">{props.description}</p>
                    <p className="m-0 text-xl">${props.price}</p>
                </div>
                <div>
                    <Image
                    alt= 'Imagen Comida'
                    src={props.image}
                    width={100}
                    height={100} />
                </div>
            </div>
        </>
    )
}