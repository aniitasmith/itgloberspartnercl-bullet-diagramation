import React, { PropsWithChildren } from 'react';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import { BulletsSchema } from './BulletTypes';
import { useDevice } from 'vtex.device-detector';
import { getBulletAsTSXList } from './modules/bulletsAsList';

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || [];

  console.log("bullets", bullets)

  const bulletsContent = getBulletAsTSXList(bullets);
  const newListContextValue = list.concat(bulletsContent)

  if (false) {
    console.log(children, list)
  }
  return (
    <ListContextProvider list={newListContextValue}>
    {
      isMobile
      ?
      children
      :
      <div>{bulletsContent} </div>
    }
    </ListContextProvider>
  );

}

export default BulletGroup
