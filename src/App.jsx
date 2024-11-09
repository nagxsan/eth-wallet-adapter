import './App.css'

// TanStack Example
// import axios from "axios"
// import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"

// const queryClient = new QueryClient()

// async function getter() {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//   return response.data
// }

// export default function App() {

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Posts />
//     </QueryClientProvider>
//   )
// }

// function Posts() {
//   const { data, isLoading, error } = useQuery({ queryKey: ['posts'], queryFn: getter })
//   console.log(data)

//   if (error) {
//     return <div>Error</div>
//   } else if (isLoading) {
//     return 'Loading...'
//   } else {
//     return (
//       <div>
//         {JSON.stringify(data)}
//       </div>
//     )
//   }
// }

// Viem example
import { createPublicClient, http } from "viem"
import { mainnet } from "viem/chains"
import { useState } from "react"

export default function App() {
  
  const [blockNumber, setBlockNumber] = useState('')

  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  })

  async function getBlockNumber() {
    const blockNum = await client.getBlockNumber()
    setBlockNumber(blockNum.toString())
  }

  return (
    <div>
      <button onClick={async () => await getBlockNumber()}>Get Block Number</button>
      <div>{blockNumber}</div>
    </div>
  )
}
