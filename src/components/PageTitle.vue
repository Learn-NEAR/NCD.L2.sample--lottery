<template>
    <div class="w-full mt-9 px-5 md:px-9">
        <div class="w-full xl:w-1/2 mx-auto bg-white rounded-md shadow-2xl py-6">
            <h2 class="text-center font-medium text-gray-800 text-3xl mx-4">This page was created not for the game,
                just for testing
            </h2>
        </div>
    </div>
    <div class="w-full sm:block md:block lg:flex xl:flex px-5 mt-9 md:px-9">
        <!-- Lottery info block -->
        <div class="w-full bg-white rounded-md px-5 py-6 shadow-2xl">
            <!-- Block info title -->
            <p class="text-sm font-medium text-gray-400">Info about lottery</p>
            <!-- Onew row -->
            <div class="block  xl:pr-0 text-gray-900">
                <div
                    class="flex w-full xl:w-1/2 mx-auto border-2 bg-yellow-400 border-yellow-400 my-3 p-3 rounded-md font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="ml-3">Pot</p>
                    <p class="ml-auto">{{ pot }}<span class="font-bold"> Ⓝ</span></p>
                </div>
            </div>
            <!-- Onew row -->
            <div class="sm:block md:block lg:block xl:flex sm:pr-5 xl:pr-0 text-gray-900">
                <div class="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <p class="ml-3">Chance of victory</p>
                    <p class="ml-auto">
                        {{ lotteryExplanation == '' ? lotteryExplanation : lotteryExplanation.match(/(\d+)/)[0] + '%' }}
                    </p>
                </div>
                <!-- <div class="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        <p class="ml-3">Date</p>
                        <p class="ml-auto">13/07/21 11:00 Am</p>
                    </div> -->
            </div>
            <!-- Onew row -->
            <!-- Onew row -->
            <div class="sm:block md:block lg:block xl:flex sm:pr-5 xl:pr-0 text-gray-900">
                <div class="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p class="ml-3">Owner</p>
                    <p class="ml-auto">{{ owner }}</p>
                </div>
                <div class="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                    </svg>
                    <p class="ml-3">Winner</p>
                    <p class="ml-auto">{{ winner == null ? 'No winner yet' : winner }}</p>
                </div>
            </div>
            <!-- Onew row -->
            <!-- Onew row -->
            <div class="sm:block md:block lg:block xl:flex sm:pr-5 xl:pr-0 text-gray-900">
                <div class="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="ml-3">Fee</p>
                    <p class="ml-auto">{{ fee }}</p>
                </div>
                <div class="flex w-full mx-3 my-3 pb-2 py-2 border-b font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <p class="ml-3">Fee strategy</p>
                    <p class="ml-auto">{{ feeStrategy }}</p>
                </div>
            </div>
            <!-- Onew row -->
        </div>
        <!-- Playing block -->
        <div class="w-full bg-white rounded-md px-5 py-6 shadow-2xl md:ml-0 my-9 lg:mb-0 lg:mt-0 lg:ml-9 ">
            <!-- Wrapper playing block -->
            <div class="block md:flex">
                <div class="">
                    <!-- Block info title -->
                    <p class="text-sm font-medium text-gray-400">Place your bet</p>
                    <!-- Playblock title -->
                    <p class="text-gray-900 font-bold text-2xl my-2">First time is free to play
                        <br class="hidden md:block"> and you may win!
                    </p>
                    <!-- Playblock desc-->
                    <p class="text-gray-600 font-normal w-2/3">
                        If you've already played once then any other play
                        costs you a fee. This fee is calculated as 1 NEAR X
                        the square of the total number of unique players
                    </p>
                </div>
                <div v-if="hasPlayed" class="ml-auto mt-10">
                    <p class="text-gray-500 flex font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                        Fee
                    </p>
                    <p class="text-gray-900 text-xl font-bold mt-2 ml-2">{{ fee }}</p>
                </div>
            </div>
            <div class="w-full flex justify-center">
                <button v-if="accountId" @click="play" style="box-shadow: 0px 4px 15px rgba(255, 206, 34, 0.75);"
                    class="bg-yellow-400 py-3 w-full md:w-1/2 rounded-md mt-10 font-medium shadow-2xl text-gray-900 hover:bg-yellow-300">Play</button>
                <button v-else @click="signIn" style="box-shadow: 0px 4px 15px rgba(255, 206, 34, 0.75);"
                    class="bg-yellow-400 py-3 w-full md:w-1/2 rounded-md mt-10 font-medium shadow-2xl text-gray-900 hover:bg-yellow-300">Play</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        accountId: String,
        owner: String,
        winner: String,
        pot: String,
        fee: Number,
        feeStrategy: String,
        hasPlayed: Boolean,
        lastPlayed: String,
        active: Boolean,
        feesExplanation: String,
        lotteryExplanation: String,
        play: Function,
        reset: Function
    }
}
</script>