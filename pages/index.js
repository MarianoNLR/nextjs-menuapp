import { RestaurantList } from "@/components/restaurantList";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
      localStorage.removeItem('order')
  })

  return (
    <>
      <RestaurantList></RestaurantList>
    </>
  )
}
