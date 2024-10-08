import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { useUserInfo } from '@/hooks/use-user-info'
import { AccountProvider } from '@/contexts/account'
import { useRouter } from 'next/router'
import { FollowDesktop } from '@/views/account/components/follow-desktop'
import { AccountTab } from '@/views/account/components/account-tab'
import { useUserList } from '@/views/account/hooks/use-user-list'
import { UserListType } from '@/api/user/types'
import { MemexProfile } from './components/profile'
import { PrimaryLayout } from '@/components/layouts/primary'
import { PageFallback } from '@/components/page-fallback'

export const AccountPage = () => {
  const { query } = useRouter()
  const tokenAddr = (query.address || '') as string
  const {
    userInfo,
    otherUserInfo,
    isFetchingOtherUserInfo,
    isFetchingUserInfo,
    refetchUserInfo,
    refetchOtherUserInfo,
  } = useUserInfo(tokenAddr)
  const currenUserAddr = String(userInfo?.wallet_address || '')
  const isOtherUser = tokenAddr !== currenUserAddr
  const followersResults = useUserList(UserListType.Followers)
  const followingResults = useUserList(UserListType.Following)

  const refetchFollow = () => {
    followersResults.refetch()
    followingResults.refetch()
  }

  return (
    <AccountProvider
      value={{
        userInfo: isOtherUser ? otherUserInfo : userInfo,
        isPending: isFetchingUserInfo || isFetchingOtherUserInfo,
        isOtherUser: isOtherUser,
        refetchUserInfo: isOtherUser ? refetchOtherUserInfo : refetchUserInfo,
        followersResults,
        followingResults,
        refetchFollow,
      }}
    >
      <div className="flex-1 min-h-main flex gap-2 flex-col overflow-auto !ml-0 ">
        {/* <div
          className="bg-cover bg-center h-72"
          style={{ backgroundImage: `url(/images/memex-profile-bg.jpg)` }}
        /> */}
        <aside
          className={cn(
            'flex flex-col gap-4 sticky top-20 mb-2',
            'static gap-2'
          )}
        >
          <MemexProfile />
          <div className="hidden mt-4">
            <FollowDesktop />
          </div>
        </aside>

        <AccountTab />
      </div>
    </AccountProvider>
  )
}

AccountPage.getLayout = (page: ReactNode) => (
  <PrimaryLayout disablePadding>
    <PageFallback>{page}</PageFallback>
  </PrimaryLayout>
)

export default AccountPage
