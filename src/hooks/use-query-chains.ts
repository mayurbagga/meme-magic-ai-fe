import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { chainApi } from '@/api/chain'
import { useChainsStore } from '@/stores/use-chains-store'
import { baseSepolia } from 'viem/chains'

export const useQueryChains = () => {
  const { setChains, setChainsMap } = useChainsStore()
   const customeChain = {
     code: 0,
     message: 'ok',
     data: [
       {
         id: '56',
         network: 'evm',
         name: 'bsc',
         displayName: 'BNB Chain',
         native: {
           decimals: 18,
           name: 'BNB',
           symbol: 'BNB',
         },
         is_supported: true,
         logo: 'https://storage.memehub.ai/chains/logo/bsc.png',
         explorer: 'https://bscscan.com',
       },
       {
         id: '84532',
         network: 'evm',
         name: 'BaseSepolia',
         displayName: 'Base Sepolia',
         native: {
           decimals: 18,
           name: 'ETH',
           symbol: 'ETH',
         },
         is_supported: true,
         logo: 'https://storage.memehub.ai/chains/logo/base-sepolia.png',
         explorer: 'https://sepolia.basescan.org',
       },
     ],
   }

  const {
    data: chains,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [chainApi.getChain.name],
    queryFn: chainApi.getChain,
    select: ({ data }) => data,
    refetchInterval: 30_000,
    retry: 10,
    retryDelay: 3_000,
  })

  useEffect( () =>
  {
    
          console.log('chains===>>>>>', chains)

    if ( chains )
    {
      setChains(chains)
      setChainsMap(chains)
    }
  }, [chains])

  return {
    chains: chains ?? [],
    isLoading,
    isFetching,
    refetch,
  }
}
