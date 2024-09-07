import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '../ui/button'
import { Dialog } from '@headlessui/react'
import { toast } from 'sonner'
import { BigNumber } from 'bignumber.js'
import { useAccount, useWalletClient, useWriteContract } from 'wagmi'
import Web3 from 'web3'

interface MemeDetails {
  symbol: string
  fullname: string
  description: string
  chainName: string
  logo: string
  coinType: string
  twitter: string
  telegram: string
  website: string
  poster: string
  marketing: string
  tokenAddressBase:string
}

const MemeCardList: React.FC = () => {
  const [memes, setMemes] = useState<MemeDetails[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [selectedMeme, setSelectedMeme] = useState<MemeDetails | null>(null)
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false)
  const [isSellModalOpen, setIsSellModalOpen] = useState(false)
  const [ amount, setAmount ] = useState( '' )
    const { address, chainId } = useAccount()
    const { data: provider } = useWalletClient()
  
  const buyTransactionFunc = async (tokenAddress: any, amount: any) => {
    try {
      const data = {
        userAddress: address,
        chainId: chainId,
        tokenAddress: tokenAddress,
        amount: amount,
      }

      const response = await axios.post(
        'https://magicmeme-backend.potp.xyz/memehub/getBuyCalldata',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      console.log('response =========>>>>>>>>>', response.data.data)

      const callData = response.data.data

      const web3 = new Web3(provider)

      const transactionData = {
        data: callData.calldata[0],
        to: callData.to,
        from: callData.from,
        value: callData.value,
        gasLimit: 800000,
      }

      console.log('send transaction function ======>>>>>>>', transactionData)

      const signedTx = await web3.eth.sendTransaction(transactionData)

      toast.message(signedTx.transactionHash)

      console.log(
        'Transaction successful, hash: ========>>>>>>>>',
        signedTx.transactionHash
      )

      return signedTx
    } catch (e) {
      console.log('error =======>>>>>>>>', e)
    }
  }

   const sellTransactionFunc = async (tokenAddress: any, amount: any) => {
     try {
       const data = {
         userAddress: address,
         chainId: chainId,
         tokenAddress: tokenAddress,
         amount: amount,
       }

       const response = await axios.post(
         'https://magicmeme-backend.potp.xyz/memehub/getSellCalldata',
         data,
         {
           headers: {
             'Content-Type': 'application/json',
           },
         }
       )

       console.log('response =========>>>>>>>>>', response.data.data)

       const callData = response.data.data

       const web3 = new Web3(provider)

       const transactionData = {
         data: callData.calldata[0],
         to: callData.to,
         from: callData.from,
         value: callData.value,
         gasLimit: 800000,
       }

       console.log('send transaction function ======>>>>>>>', transactionData)

       const signedTx = await web3.eth.sendTransaction(transactionData)

       toast.message(signedTx.transactionHash)

       console.log(
         'Transaction successful, hash: ========>>>>>>>>',
         signedTx.transactionHash
       )

       return signedTx
     } catch (e) {
       console.log('error =======>>>>>>>>', e)
     }
   }

  useEffect(() => {
    const fetchMemes = async () => {
      setIsLoading(true)
      try {
        const response = await axios.post(
          'https://magicmeme-backend.potp.xyz/memehub/getDetails',
          {
            chainId: chainId,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        setMemes( response.data ) 
        console.log("meme list========>>>",response.data)
      } catch (error: any) {
        setErrorMessage('Failed to fetch memes')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMemes()
  }, [])

  const openBuyModal = (meme: MemeDetails) => {
    setSelectedMeme(meme)
    setIsBuyModalOpen(true)
  }

  const openSellModal = (meme: MemeDetails) => {
    setSelectedMeme(meme)
    setIsSellModalOpen(true)
  }

  const closeModals = () => {
    setIsBuyModalOpen(false)
    setIsSellModalOpen(false)
    setAmount('')
  }

  const handleBuy = () => {
    // alert( `Buying ${ amount } of ${ selectedMeme?.fullname }` )
    
    buyTransactionFunc(
      selectedMeme?.tokenAddressBase,
      Web3.utils.toWei(amount, 'ether').toString()
    )
        toast.message(`Bought total ${amount} of ${selectedMeme?.fullname}`)

    // closeModals()
  }

  const handleSell = () => {
    // alert(
    //   `Selling ${amount} of ${Web3.utils.toWei(amount, 'ether').toString()}`
    // )
    
    // closeModals()
    console.log('selectedMeme?.tokenAddressBase ======>>>>',selectedMeme?.tokenAddressBase)
     sellTransactionFunc(
       selectedMeme?.tokenAddressBase,
       Web3.utils.toWei(amount, 'ether').toString()
    )
    toast.message(`Sold total ${amount} of ${selectedMeme?.fullname}`)
  }

  if (isLoading) {
    return <div className="text-center mt-6">Loading...</div>
  }

  if (errorMessage) {
    return <div className="text-center mt-6 text-red-500">{errorMessage}</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Meme List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memes.map((meme) => (
          <div key={meme.symbol} className="bg-white shadow-md rounded-lg p-6">
            {/* Meme Image */}
            <div className="flex justify-center mb-4">
              <img
                src={meme.logo}
                alt={meme.symbol}
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>

            <div className="text-center">
              <h2 className="text-xl font-bold">{meme.fullname}</h2>
              <p className="text-sm text-gray-500 mb-4">{meme.symbol}</p>
            </div>

            {/* Meme Description */}
            <p className="text-gray-700 mb-4 text-center">{meme.description}</p>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-4">
              {meme.twitter && (
                <a
                  href={meme.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Twitter
                </a>
              )}
              {meme.telegram && (
                <a
                  href={meme.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Telegram
                </a>
              )}
              {meme.website && (
                <a
                  href={meme.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Website
                </a>
              )}
            </div>

            {/* Buy and Sell Buttons */}
            <div className="flex justify-between mt-6">
              <Button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full mr-2"
                onClick={() => openBuyModal(meme)}
              >
                Buy
              </Button>

              <Button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-full ml-2"
                onClick={() => openSellModal(meme)}
              >
                Sell
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Buy Modal */}
      <Dialog
        open={isBuyModalOpen}
        onClose={closeModals}
        className="relative z-10"
      >
        <div className="fixed inset-0 bg-black bg-opacity-30"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <Dialog.Title className="text-lg font-bold mb-4">
              Buy amount for buying {selectedMeme?.fullname}
            </Dialog.Title>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter ether"
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <div className="flex justify-end space-x-4">
              <Button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                onClick={closeModals}
              >
                Cancel
              </Button>
              <Button
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={handleBuy}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Sell Modal */}
      <Dialog
        open={isSellModalOpen}
        onClose={closeModals}
        className="relative z-10"
      >
        <div className="fixed inset-0 bg-black bg-opacity-30"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <Dialog.Title className="text-lg font-bold mb-4">
              Sell {selectedMeme?.fullname}
            </Dialog.Title>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <div className="flex justify-end space-x-4">
              <Button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                onClick={closeModals}
              >
                Cancel
              </Button>
              <Button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={handleSell}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default MemeCardList
