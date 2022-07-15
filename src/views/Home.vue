<template>
  <!--Decoration -->
  <DecorationDots />
  <DecorationLines />
  <DecorationCircleLg />
  <DecorationCircleMd />
  <DecorationCircleSm />

  <!-- Header-->
  <header class="min-h-screen">
    <Navigation :accountId="accountId" :signIn="signIn" :signOut="signOut" />
    <PageTitle :accountId="accountId" :owner="owner" :winner="winner" :pot="pot" :fee="fee" :feeStrategy="feeStrategy"
      :hasPlayed="hasPlayed" :lastPlayed="lastPlayed" :active="active" :feesExplanation="feesExplanation"
      :lotteryExplanation="lotteryExplanation" :play="play" :reset="reset" />
  </header>

  <Footer />

</template>

<script>

import DecorationDots from '@/components/decoration/DecorationDots.vue'
import DecorationLines from '@/components/decoration/DecorationLines.vue'
import DecorationCircleLg from '@/components/decoration/DecorationCircleLg.vue'
import DecorationCircleMd from '@/components/decoration/DecorationCircleMd.vue'
import DecorationCircleSm from '@/components/decoration/DecorationCircleSm.vue'
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import Footer from '@/components/Footer.vue'
import { useWallet } from "@/composables/useWallet"
import { useLottery } from "@/composables/near"
import { onBeforeMount } from '@vue/runtime-core'

export default {
  name: 'App',
  components: {
    DecorationDots,
    DecorationLines,
    DecorationCircleLg,
    DecorationCircleMd,
    DecorationCircleSm,
    Navigation,
    PageTitle,
    Footer
  },
  setup() {
    const { accountId, getAccountId, signIn, signOut } = useWallet()
    const {
      owner,
      winner,
      pot,
      fee,
      feeStrategy,
      hasPlayed,
      lastPlayed,
      active,
      feesExplanation,
      lotteryExplanation,
      getOwner,
      getWinner,
      getPot,
      getFee,
      getFeeStrategy,
      getHasPlayed,
      getLastPlayed,
      getActive,
      getExplainFees,
      getExplainLottery,
      play,
      reset } = useLottery()

    onBeforeMount(async () => {
      accountId.value = getAccountId()
      owner.value = await getOwner()
      winner.value = await getWinner()
      pot.value = await getPot()
      fee.value = await getFee()
      feeStrategy.value = await getFeeStrategy()
      hasPlayed.value = accountId.value && await getHasPlayed(accountId.value)
      lastPlayed.value = await getLastPlayed()
      active.value = await getActive()
      feesExplanation.value = await getExplainFees()
      lotteryExplanation.value = await getExplainLottery()
    })

    return {
      accountId,
      getAccountId,
      signIn,
      signOut,
      owner,
      winner,
      pot,
      fee,
      feeStrategy,
      hasPlayed,
      lastPlayed,
      active,
      feesExplanation,
      lotteryExplanation,
      play,
      reset
    }
  }
}
</script>