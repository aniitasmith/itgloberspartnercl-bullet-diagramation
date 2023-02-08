//@ts-ignore
import React, { PropsWithChildren } from 'react';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import { BulletsSchema } from './BulletTypes';
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
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

  const CSS_HANDLES = ['bullet__container'];
  const handles = useCssHandles(CSS_HANDLES);

  return (
    <ListContextProvider list={newListContextValue}>
    {
      isMobile
      ?
      <div className={handles.bullet__container}>
        {bulletsContent}
      </div>
      :
      children
    }
    </ListContextProvider>
  )
}

export default BulletGroup
