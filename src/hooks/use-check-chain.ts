import { useAccount, useSwitchChain } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'

export const useCheckAccount = () => {
  const { address, isConnected, chainId: walletChainId } = useAccount()
  const { switchChainAsync } = useSwitchChain()
  const { openConnectModal } = useConnectModal()

  const checkForConnect = () => {
    if (!isConnected || !address) {
      openConnectModal?.()
      return false
    }
    return true
  }

  const checkForChain = async (chainId: number | string | undefined) => {
    if (!chainId) return false

    chainId = +chainId
    console.log("walletcahinid ======>>>>>>>>",walletChainId)
    if (walletChainId === chainId) return true

    try {
      await switchChainAsync({ chainId })
      return true
    } catch (error) {
      return false
    }
  }

  const checkAccount = async (chainId: number | string | undefined) => {
    if (!checkForConnect()) return false
    if (!(await checkForChain(chainId))) return false

    return true
  }

  return {
    address,
    isConnected,
    walletChainId,
    checkForConnect,
    checkForChain,
    checkAccount,
  }
}
