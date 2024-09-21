import Image from "next/image"

export function FoodCartCard(props) {
    return (
        <>
            <div className="food-cart-card-container relative flex flex w-full items-center p-4 gap-4 text-black border rounded-lg">
                <div>
                    <Image
                    alt= 'Imagen Comida'
                    src='https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png'
                    width={100}
                    height={100} />
                </div>
                <div className=" flex-1 flex flex-col gap-2">
                    <p className="m-0 text-2xl">{props.data.dish.name}</p>
                    <p className="m-0 text-xl">Cantidad: {props.data.quantity}</p>
                    <p className="m-0 text-xl">Subtotal: $ {parseFloat(props.data.dish.unitPrice * props.data.quantity).toFixed(2)}</p>
                </div>
            </div>
        </>
    )
}