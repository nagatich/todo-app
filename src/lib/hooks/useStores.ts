import React from 'react'
import { MobXProviderContext } from 'mobx-react'

import stores from 'stores'

export const useStores = () => React.useContext(MobXProviderContext) as typeof stores
