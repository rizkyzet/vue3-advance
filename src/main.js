import Router from './routes'

import { createApp } from 'vue'
import {store} from './stores'

import Suspense from './Suspense.vue'
import Alert from './Alert.vue'
import MultiVModel from './MultiVModel.vue'
import VueRouter from './VueRouter.vue'
import DynamicRouteSuspense from './DynamicRouteSuspense.vue'
import NestedRouteLayout from './NestedRouteLayout.vue'
import NavGuards from './NavGuards.vue'
import VuexStateMutations from './VuexStateMutations.vue'
import VuexActions from './VuexActions.vue'
import VuexMap from './VuexMap.vue'
import VuexModules from './VuexModules.vue'
import ScriptSetup from './ScriptSetup.vue'


createApp(ScriptSetup).use(Router).use(store).mount('#app')
