import React, { PropsWithChildren } from 'react';
import { useListContext } from 'vtex.list-context';
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

  if (false) {
    console.log(children, list)
  }

  return (
    isMobile
    ?
      <div> Estamos en mobile </div>
    :
      <div>{bulletsContent}</div>
  )
}

export default BulletGroup
