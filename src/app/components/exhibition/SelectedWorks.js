import dynamic from 'next/dynamic';

import AnonymousGroupCard from './AnonymousGroupCard';
import IceFlowerCard from './IceFlowerCard';
import NasserCard from './NasserCard';
import ShabnamCard from './ShabnamCard';
import AhooraCard from './AhooraCard';
import SamanehCard from './SamanehCard';
import { AfsanehCard2 } from './AfsanehCard1';
import { AfsanehCard1 } from './AfsanehCard1';
import MandakCard from './MandakCard';
import AnonymousCard from './AnonymousCard';
import ZeinabCard from './ZeinabCard';
import SahelCard from './SahelCard';
import SoheilaCard from './SoheilaCard.js';

export const components = {
  anonymous_group: dynamic(() => import('./AnonymousGroupCard')),
  ice_flower: dynamic(() => import('./IceFlowerCard')),
  nasser: dynamic(() => import('./NasserCard')),
  shabnam: dynamic(() => import('./ShabnamCard')),
  ahoora: dynamic(() => import('./AhooraCard')),
  samaneh: dynamic(() => import('./SamanehCard')),
  afsaneh1: dynamic(() => import('./AfsanehCard1')),
  afsaneh2: dynamic(() => import('./AfsanehCard1')),
  mandak: dynamic(() => import('./MandakCard')),
  anonymous: dynamic(() => import('./AnonymousCard')),
  zeinab: dynamic(() => import('./ZeinabCard')),
  sahel: dynamic(() => import('./SahelCard')),
  soheila: dynamic(() => import('./SoheilaCard.js')),
};
