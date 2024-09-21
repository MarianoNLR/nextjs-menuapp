import Image from "next/image"

export function RestaurantCard(props) {
    return (
        <>
            <div className="restaurant-card-container relative flex items-center p-4 text-black border rounded-lg" onClick={(e) => props.handleOnClick(props.name)}>
                <div className="flex-1">
                    <p className="m-0 text-lg">{props.name}</p>
                    <p className="m-0 text-sm">{props.address}</p>
                </div>
                <div>
                    <Image
                    alt= 'Imagen restaurante'
                    src={props.image}
                    width={100}
                    height={100} />
                </div>
            </div>
        </>
    )
}