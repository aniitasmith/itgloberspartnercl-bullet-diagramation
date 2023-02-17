import React, { PropsWithChildren } from 'react';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import { BulletsSchema } from './BulletTypes';
import { getBulletAsTSXList } from './modules/bulletsAsList';

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>) => {
  const { list } = useListContext() || [];

  const bulletsContent = getBulletAsTSXList(bullets);
  const newListContextValue = list.concat(bulletsContent)

  return (
    <ListContextProvider list={newListContextValue}>
      {children}
    </ListContextProvider>
  )
}

export default BulletGroup
