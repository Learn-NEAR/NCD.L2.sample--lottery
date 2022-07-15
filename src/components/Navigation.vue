<template>
    <div class="">

        <ChangeContractMobile />

        <div class="w-full flex justify-between bg-white text-gray-900 px-5 md:px-9">

            <!-- Brand title -->
            <a href="#" class="flex text-lg font-medium my-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 text-yellow-400 h-7 w-7" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                Smart lottery
            </a>

            <!-- Place for POPUP button (past here) -->
            <ChangeContract />

            <div class="">
                <div v-if="accountId" class="ml-auto hidden md:flex">
                    <!-- Account btn -->
                    <a href="#"
                        class="flex bg-yellow-400 text-base font-medium rounded-md py-2 px-5 my-5 hover:bg-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {{ accountId }}
                    </a>
                    <!-- Balance -->
                    <!-- <a href="#" class="block flex bg-yellow-400  font-medium rounded-md py-2 px-5 my-5 ml-7 hover:bg-yellow-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {{getBalance}}
                            <span class="mx-1 my-0.5 leading-7 text-5xl font-bold sm:text-sm ">
                                Ⓝ
                            </span>    
                        </a> -->
                    <!-- Logout btn -->
                    <button @click="signOut"
                        class="flex bg-yellow-400 text-base font-medium rounded-md py-2 px-5 my-5 ml-7 hover:bg-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6 text-gray-900" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </div>
                <div v-else class="ml-auto hidden md:flex">
                    <button @click="signIn"
                        class="block flex bg-yellow-400 text-base font-medium rounded-md py-2 px-5 my-5 ml-7 hover:bg-yellow-300">
                        Login
                    </button>
                </div>
                <!-- Burger menu -->
                <a href="#" class="sm:block md:hidden flex mt-6 ml-auto text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import ChangeContract from '@/components/ChangeContract.vue'
import ChangeContractMobile from '@/components/ChangeContractMobile.vue'

export default {
    components: {
        ChangeContract,
        ChangeContractMobile,
    },
    props: {
        accountId: Object,
        signIn: Function,
        signOut: Function
    }
}
</script>