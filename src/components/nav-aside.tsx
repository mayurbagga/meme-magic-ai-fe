
import { Children, ComponentProps, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { IoGift, IoLanguageOutline } from 'react-icons/io5'
import { IoGiftOutline } from 'react-icons/io5'
import { FaRegLightbulb } from 'react-icons/fa'
import { FaLightbulb } from 'react-icons/fa'
import { IoDiamondOutline } from 'react-icons/io5'
import { IoDiamond } from 'react-icons/io5'
import { RiNotification3Line, RiRocketFill, RiRocketLine } from 'react-icons/ri'
import { RiNotification3Fill } from 'react-icons/ri'
import { FaRegHandshake } from 'react-icons/fa'
import { FaHandshake } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa6'
import { CheckIcon } from '@radix-ui/react-icons'
import { IoIosMore } from 'react-icons/io'
import { MdLogout } from 'react-icons/md'

import { Button } from '@/components/ui/button'
import { useUserStore } from '@/stores/use-user-store'
import { useLang } from '@/hooks/use-lang'
import { resources } from '@/i18n'
import { cn } from '@/lib/utils'
import { Routes } from '@/routes'
import { memehubLinks } from '@/config/link'
import { Logo } from './logo'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'
import { SocialLinks } from './social-links'
import { joinPaths } from '@/utils'
import { useResponsive } from '@/hooks/use-responsive'
import DialogHowWork from './dialog-how-work'
import { fmt } from '@/utils/fmt'
import RewardButton from './reward-button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { useDisconnect } from 'wagmi'
import { Avatar } from './ui/avatar'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useSignLogin } from '@/hooks/use-sign-login'

const langs = Object.entries(resources as Record<string, { name: string }>)

interface Props {
  collapseSize?: keyof ReturnType<typeof useResponsive>
}

export const NavTopBar = ({
  className,
  collapseSize = 'isLaptop',
  ...props
}: ComponentProps<'header'> & Props) => {
  // Changed from 'div' to 'header' for semantic purposes
  const { t, i18n } = useTranslation()
  const { setLang } = useLang()
  const { pathname, ...router } = useRouter()
  const { userInfo } = useUserStore()
  const responsive = useResponsive()
  const [isCollapsed, setIsCollapsed] = useState(responsive[collapseSize])
  const { openConnectModal } = useConnectModal()
  const { disconnect } = useDisconnect()
  const { logout } = useSignLogin()

  const userNavs = [
    {
      title: t('profile'),
      path: joinPaths(Routes.Account, userInfo?.wallet_address || ''),
      icon: <FaRegUser />,
      iconActive: <FaUser />,
      isActive: pathname.includes(Routes.Account),
    },
  ]

  const navs = [
    // {
    //   title: t('memex.idea'),
    //   path: Routes.MemexIdea,
    //   icon: <FaRegLightbulb />,
    //   iconActive: <FaLightbulb />,
    //   isActive: pathname.includes(Routes.MemexIdea),
    // },
    {
      title: t('Coin'),
      path: Routes.Main,
      icon: <RiRocketLine />,
      iconActive: <RiRocketFill />,
      isActive: pathname === Routes.Main,
    },
    ...(userInfo ? userNavs : []),
    // {
    //   title: t('award'),
    //   path: Routes.Reward,
    //   icon: <IoDiamondOutline />,
    //   iconActive: <IoDiamond />,
    //   isActive: pathname === Routes.Reward,
    // },
    // {
    //   title: t('Notification'),
    //   path: Routes.Notification,
    //   icon: <RiNotification3Line />,
    //   iconActive: <RiNotification3Fill />,
    //   isActive: pathname === Routes.Notification,
    // },
    // {
    //   title: t('airdrop.no.icon'),
    //   path: Routes.Airdrop,
    //   icon: <IoGiftOutline />,
    //   iconActive: <IoGift />,
    //   isActive: pathname === Routes.Airdrop,
    // },
    // {
    //   title: t('alliance'),
    //   path: Routes.Alliance,
    //   icon: <FaRegHandshake />,
    //   iconActive: <FaHandshake />,
    //   isActive: pathname === Routes.Alliance,
    // },
  ]

  const PopoverPubilic = ({ children }: { children: React.ReactNode }) => {
    return (
      <Popover>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent
          className="border border-zinc-200 rounded-sm flex space-x-2 items-center hover:bg-slate-100 cursor-pointer p-2"
          side="bottom" // Changed from 'top' to 'bottom' for top bar dropdown
          align="end"
          alignOffset={-2}
          onClick={() => {
            logout()
            disconnect()
          }}
        >
          <MdLogout />
          <p>{t('disconnect')}</p>
        </PopoverContent>
      </Popover>
    )
  }

  useEffect(() => {
    setIsCollapsed(responsive[collapseSize])
  }, [responsive, collapseSize])

  return (
    <header
      className={cn(
        'flex items-center justify-between w-full h-16 px-4 bg-white shadow-md',
       
        className
      )}
      {...props}
    >
      <div className="flex items-center">
        <Logo
          showMeme
          showLogo={!isCollapsed}
          className="mr-4"
          linkClass="pl-1"
        />

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            {navs.map((n, i) => (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink
                  className={cn(
                    'text-m flex items-center space-x-2 cursor-pointer',
                    n.isActive && 'font-bold'
                  )}
                  onClick={() => router.push(n.path)}
                  title={n.title}
                >
                  {n.isActive ? n.iconActive : n.icon}
                  {!isCollapsed && <span>{n.title}</span>}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              {/* 
              <NavigationMenuTrigger
                showClose={!isCollapsed}
                className={cn(
                  'text-xl flex justify-start space-x-2 py-5 pl-2',
                  isCollapsed && 'space-x-0 p-2 justify-center'
                )}
                title={t('language')}
              >
                <IoLanguageOutline size={22} />
                {!isCollapsed && <span>{t('Languages')}</span>}
              </NavigationMenuTrigger> 
              */}
              {/* 
              <NavigationMenuContent>
                <div className={cn('w-52 p-2 space-y-1', isCollapsed && 'w-32')}>
                  {langs.map(([code, { name }], i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      shadow="none"
                      className={cn(
                        'w-full justify-start hover:bg-zinc-200 rounded-lg p-4',
                        i18n.language === code && 'bg-zinc-100'
                      )}
                      onClick={() => setLang(code)}
                    >
                      {name}
                      {i18n.language === code && (
                        <CheckIcon className="h-5 w-5" />
                      )}
                    </Button>
                  ))}
                </div>
              </NavigationMenuContent> 
              */}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* 
      <Button
        shadow="none"
        onClick={() => router.push(Routes.MemexCreate)}
        className={cn(
          'bg-blue-400 text-white rounded-full border-none py-6 text-lg',
          'mt-2 max-xl:text-base ml-1 max-xl:text-md',
          isCollapsed && 'p-2'
        )}
        size={isCollapsed ? 'icon-lg' : 'default'}
      >
        {isCollapsed ? (
          <img src="/icons/writer.svg" alt="writer" />
        ) : (
          t('post-idea')
        )}
      </Button> 
      */}

      {/* 
      <DialogHowWork isCollapsed={isCollapsed} /> 
      */}

      {/* 
      <SocialLinks
        x={memehubLinks.x}
        tg={memehubLinks.tg}
        gitbook={memehubLinks.gitbook}
        size={isCollapsed ? 20 : 28}
        buttonProps={{ size: isCollapsed ? 'icon' : 'icon-lg' }}
        className={cn(
          'justify-start',
          isCollapsed && 'flex-col space-x-0 space-y-1 ml-1'
        )}
      /> 
      */}

      <div
        className={cn('flex items-center space-x-4 cursor-pointer')}
        onClick={() => {
          if (userInfo) return

          openConnectModal?.()
        }}
      >
        {!isCollapsed ? (
          <div className="flex items-center">
            <Avatar src={userInfo?.logo} className="rounded-full w-10 h-10" />
            <div className="flex flex-col space-y-1">
              <span className="text-sm ml-2 font-semibold">
                {userInfo?.name}
              </span>
              <span
                className={cn(
                  'text-xs ml-2 text-gray-500',
                  !userInfo && 'text-base text-black font-bold'
                )}
              >
                {userInfo
                  ? fmt.addr(userInfo?.wallet_address)
                  : t('login-before')}
              </span>
            </div>
            <PopoverPubilic>
              <IoIosMore
                className={cn('ml-4 cursor-pointer', !userInfo && 'hidden')}
              />
            </PopoverPubilic>
          </div>
        ) : (
          <PopoverPubilic>
            <Avatar src={userInfo?.logo} className="rounded-full w-10 h-10" />
          </PopoverPubilic>
        )}
        {/* <RewardButton
          shadow="none"
          showReferral={isCollapsed ? false : true}
          className={cn('border-none', isCollapsed ? 'p-2' : 'mt-0')}
        /> */}
      </div>
    </header>
  )
}

// import { Children, ComponentProps, useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
// import { useTranslation } from 'react-i18next'
// import { IoGift, IoLanguageOutline } from 'react-icons/io5'
// import { IoGiftOutline } from 'react-icons/io5'
// import { FaRegLightbulb } from 'react-icons/fa'
// import { FaLightbulb } from 'react-icons/fa'
// import { IoDiamondOutline } from 'react-icons/io5'
// import { IoDiamond } from 'react-icons/io5'
// import { RiNotification3Line, RiRocketFill, RiRocketLine } from 'react-icons/ri'
// import { RiNotification3Fill } from 'react-icons/ri'
// import { FaRegHandshake } from 'react-icons/fa'
// import { FaHandshake } from 'react-icons/fa6'
// import { FaRegUser } from 'react-icons/fa6'
// import { FaUser } from 'react-icons/fa6'
// import { CheckIcon } from '@radix-ui/react-icons'
// import { IoIosMore } from 'react-icons/io'
// import { MdLogout } from 'react-icons/md'

// import { Button } from '@/components/ui/button'
// import { useUserStore } from '@/stores/use-user-store'
// import { useLang } from '@/hooks/use-lang'
// import { resources } from '@/i18n'
// import { cn } from '@/lib/utils'
// import { Routes } from '@/routes'
// import { memehubLinks } from '@/config/link'
// import { Logo } from './logo'
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuContent,
// } from '@/components/ui/navigation-menu'
// import { SocialLinks } from './social-links'
// import { joinPaths } from '@/utils'
// import { useResponsive } from '@/hooks/use-responsive'
// import DialogHowWork from './dialog-how-work'
// import { fmt } from '@/utils/fmt'
// import RewardButton from './reward-button'
// import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
// import { useDisconnect } from 'wagmi'
// import { Avatar } from './ui/avatar'
// import { useConnectModal } from '@rainbow-me/rainbowkit'
// import { useSignLogin } from '@/hooks/use-sign-login'

// const langs = Object.entries(resources as Record<string, { name: string }>)

// interface Props {
//   collapseSize?: keyof ReturnType<typeof useResponsive>
// }

// export const NavAside = ({
//   className,
//   collapseSize = 'isLaptop',
//   ...props
// }: ComponentProps<'div'> & Props) => {
//   const { t, i18n } = useTranslation()
//   const { setLang } = useLang()
//   const { pathname, ...router } = useRouter()
//   const { userInfo } = useUserStore()
//   const responsive = useResponsive()
//   const [isCollapsed, setIsCollapsed] = useState(responsive[collapseSize])
//   const { openConnectModal } = useConnectModal()
//   const { disconnect } = useDisconnect()
//   const { logout } = useSignLogin()

//   const userNavs = [
//     {
//       title: t('profile'),
//       path: joinPaths(Routes.Account, userInfo?.wallet_address || ''),
//       icon: <FaRegUser />,
//       iconActive: <FaUser />,
//       isActive: pathname.includes(Routes.Account),
//     },
//   ]

//   const navs = [
//     // {
//     //   title: t('memex.idea'),
//     //   path: Routes.MemexIdea,
//     //   icon: <FaRegLightbulb />,
//     //   iconActive: <FaLightbulb />,
//     //   isActive: pathname.includes(Routes.MemexIdea),
//     // },
//     {
//       title: t('Coin'),
//       path: Routes.Main,
//       icon: <RiRocketLine />,
//       iconActive: <RiRocketFill />,
//       isActive: pathname === Routes.Main,
//     },
//     ...(userInfo ? userNavs : []),
//     // {
//     //   title: t('award'),
//     //   path: Routes.Reward,
//     //   icon: <IoDiamondOutline />,
//     //   iconActive: <IoDiamond />,
//     //   isActive: pathname === Routes.Reward,
//     // },
//     // {
//     //   title: t('Notification'),
//     //   path: Routes.Notification,
//     //   icon: <RiNotification3Line />,
//     //   iconActive: <RiNotification3Fill />,
//     //   isActive: pathname === Routes.Notification,
//     // },
//     // {
//     //   title: t('airdrop.no.icon'),
//     //   path: Routes.Airdrop,
//     //   icon: <IoGiftOutline />,
//     //   iconActive: <IoGift />,
//     //   isActive: pathname === Routes.Airdrop,
//     // },
//     // {
//     //   title: t('alliance'),
//     //   path: Routes.Alliance,
//     //   icon: <FaRegHandshake />,
//     //   iconActive: <FaHandshake />,
//     //   isActive: pathname === Routes.Alliance,
//     // },
//   ]

//   const PopoverPubilic = ({ children }: { children: React.ReactNode }) => {
//     return (
//       <Popover>
//         <PopoverTrigger>{children}</PopoverTrigger>
//         <PopoverContent
//           className="border border-zinc-200 rounded-sm flex space-x-2 items-center hover:bg-slate-100 cursor-pointer p-2 w-40"
//           side="top"
//           align="end"
//           alignOffset={-2}
//           onClick={() => {
//             logout()
//             disconnect()
//           }}
//         >
//           <MdLogout />
//           <p>{t('disconnect')}</p>
//         </PopoverContent>
//       </Popover>
//     )
//   }

//   useEffect(() => {
//     setIsCollapsed(responsive[collapseSize])
//   }, [responsive, collapseSize])

//   return (
//     <aside
//       className={cn(
//         'flex flex-col space-y-4 w-56 pt-4 select-none',
//         isCollapsed && 'w-10 items-center',
//         className
//       )}
//       {...props}
//     >
//       <Logo
//         showMeme
//         showLogo={!isCollapsed}
//         className="w-28"
//         linkClass="pl-1"
//       />

//       <NavigationMenu className="grid grid-cols-1 max-w-full">
//         <NavigationMenuList className="grid grid-cols-1 space-x-0 space-y-3">
//           {navs.map((n, i) => (
//             <NavigationMenuItem key={i} className="w-full cursor-pointer">
//               <NavigationMenuLink
//                 className={cn(
//                   'text-xl w-full flex justify-start py-5 space-x-2 pl-2 cursor-pointer',
//                   n.isActive && 'font-bold',
//                   isCollapsed && 'space-x-0 p-2 justify-center'
//                 )}
//                 onClick={() => router.push(n.path)}
//                 title={n.title}
//               >
//                 {n.isActive ? n.iconActive : n.icon}
//                 {!isCollapsed && <span>{n.title}</span>}
//               </NavigationMenuLink>
//             </NavigationMenuItem>
//           ))}
//           <NavigationMenuItem className="w-full">
//             {/* <NavigationMenuTrigger
//               showClose={!isCollapsed}
//               className={cn(
//                 'text-xl w-full flex justify-start space-x-2 py-5 pl-2',
//                 isCollapsed && 'space-x-0 p-2 justify-center'
//               )}
//               title={t('language')}
//             >
//               <IoLanguageOutline size={22} />
//               {!isCollapsed && <span>{t('Languages')}</span>}
//             </NavigationMenuTrigger> */}
//             {/* <NavigationMenuContent>
//               <div className={cn('w-52 p-2 space-y-1', isCollapsed && 'w-32')}>
//                 {langs.map(([code, { name }], i) => (
//                   <Button
//                     key={i}
//                     variant="ghost"
//                     shadow="none"
//                     className={cn(
//                       'w-full justify-start hover:bg-zinc-200 rounded-lg p-4',
//                       i18n.language === code && 'bg-zinc-100'
//                     )}
//                     onClick={() => setLang(code)}
//                   >
//                     {name}
//                     {i18n.language === code && (
//                       <CheckIcon className="h-5 w-5" />
//                     )}
//                   </Button>
//                 ))}
//               </div>
//             </NavigationMenuContent> */}
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>

//       {/* <Button
//         shadow="none"
//         onClick={() => router.push(Routes.MemexCreate)}
//         className={cn(
//           'bg-blue-400 text-white rounded-full border-none py-6 text-lg',
//           'mt-2 max-xl:text-base ml-1 max-xl:text-md',
//           isCollapsed && 'p-2'
//         )}
//         size={isCollapsed ? 'icon-lg' : 'default'}
//       >
//         {isCollapsed ? (
//           <img src="/icons/writer.svg" alt="writer" />
//         ) : (
//           t('post-idea')
//         )}
//       </Button> */}

//       {/* <DialogHowWork isCollapsed={isCollapsed} /> */}

//       {/* <SocialLinks
//         x={memehubLinks.x}
//         tg={memehubLinks.tg}
//         gitbook={memehubLinks.gitbook}
//         size={isCollapsed ? 20 : 28}
//         buttonProps={{ size: isCollapsed ? 'icon' : 'icon-lg' }}
//         className={cn(
//           'justify-start',
//           isCollapsed && 'flex-col space-x-0 space-y-1 ml-1'
//         )}
//       /> */}

//       <div
//         className={cn(
//           'flex flex-col items-start fixed left-4 bottom-4 cursor-pointer'
//         )}
//         onClick={() => {
//           if (userInfo) return

//           openConnectModal?.()
//         }}
//       >
//         {!isCollapsed ? (
//           <div className="flex items-center">
//             <Avatar src={userInfo?.logo} className="rounded-full w-10 h-10" />
//             <div className="flex flex-col space-y-1">
//               <span className="text-sm ml-2 font-semibold">
//                 {userInfo?.name}
//               </span>
//               <span
//                 className={cn(
//                   'text-xs ml-2 text-gray-500',
//                   !userInfo && 'text-base text-black font-bold'
//                 )}
//               >
//                 {userInfo
//                   ? fmt.addr(userInfo?.wallet_address)
//                   : t('login-before')}
//               </span>
//             </div>
//             <PopoverPubilic>
//               <IoIosMore
//                 className={cn('ml-24 cursor-pointer', !userInfo && 'hidden')}
//               />
//             </PopoverPubilic>
//           </div>
//         ) : (
//           <PopoverPubilic>
//             <Avatar src={userInfo?.logo} className="rounded-full w-10 h-10" />
//           </PopoverPubilic>
//         )}
//         <RewardButton
//           shadow="none"
//           showReferral={isCollapsed ? false : true}
//           className={cn(
//             'border-none w-[90%] justify-between mt-3',
//             isCollapsed && 'w-fit p-2'
//           )}
//         />
//       </div>
//     </aside>
//   )
// }
