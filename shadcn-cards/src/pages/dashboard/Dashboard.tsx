import { CardImage } from "@/components/cards"
import { useLoaderData } from "react-router"

export default function Dashboard() {
  const data = useLoaderData()

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid gap-4 md:grid-cols-4">
        <CardImage cards={data.cards} />
      </div>
    </div>
  )
}
