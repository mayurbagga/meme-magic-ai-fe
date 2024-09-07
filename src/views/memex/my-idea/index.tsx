import { type ReactNode } from 'react'

import { CustomSuspense } from '@/components/custom-suspense'
import { MemexIdeaCard } from '../components/idea-card'
import { IdeaEmpty } from '../components/idea-empty'
import { IdeaCardSkeleton } from '../components/idea-card/skeleton'
import { useIdeaList } from '../hooks/use-idea-list'
import { MemexListType } from '@/api/memex/types'
import { MemexInfiniteScroll } from '../components/memex-infinite-scroll'
import { getMemexLayout } from '..'

export const MyIdeaPage = () => {
  const {
    list,
    idoInfos,
    total,
    isLoading,
    refetch,
    refetchIdoInfos,
    fetchNextPage,
  } = useIdeaList(MemexListType.My)

  return (
    <CustomSuspense
      isPending={isLoading}
      fallback={<IdeaCardSkeleton />}
      nullback={<IdeaEmpty />}
    >
      <MemexInfiniteScroll list={list} total={total} fetchNext={fetchNextPage}>
        {list.map((idea, i) => (
          <MemexIdeaCard
            key={idea?.hash}
            idea={idea}
            ideaInfo={idoInfos[i]}
            refetchInfo={refetchIdoInfos}
            onCommentSuccess={refetch}
            listType={MemexListType.My}
          />
        ))}
      </MemexInfiniteScroll>
    </CustomSuspense>
  )
}

MyIdeaPage.getLayout = (page: ReactNode) => getMemexLayout(page, true)

export default MyIdeaPage
