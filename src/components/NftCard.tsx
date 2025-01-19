import Image from 'next/image'

type Props = {
  image: string
  name: string
  balance: number
}

export default function NftCard({image, name, balance}: Props) {
  return (
    <div className="space-y-2 border border-neutral-300 rounded-lg p-2 bg-white">
      <Image src={image} alt={name} className="w-full h-48 object-cover rounded-md" width={500} height={500} />

      <div>
        <h3 className="text-lg font-semibold text-custom-primary">{name}</h3>
        <p className="text-neutral-600 font-medium">
          Balance: <span className="font-bold text-custom-black">{balance}</span>
        </p>
      </div>
    </div>
  )
}
