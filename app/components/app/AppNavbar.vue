<template>
  <header class="bg-[#42389E] sticky top-0 z-50">

    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
      
      <div class="flex-shrink-0 flex items-center ">
      
        <a href="/" aria-label="Homepage">
          <img class="h-[44px]" src="/img/logo2.png" alt="IntelliToggle logo" />
        </a>
      </div>
      
      <div class="hidden md:flex items-center space-x-8 text-sm">
        <a href="#" class="text-gray-200 hover:text-white px-3 py-2 rounded-md ">Home</a>
        <a href="#" class="text-gray-200 hover:text-white px-3 py-2 rounded-md ">About</a>
        <a href="#" class="text-gray-200 hover:text-white px-3 py-2 rounded-md ">Pricing</a>
      </div>
      
      <!-- CTA Button -->
      <div>
        <a href="#" class="hidden md:inline-block text-[#42399E] text-lg font-semibold py-1 px-4 rounded-lg shadow-lg bg-[#F9A71E]">
          Start Sandbox
        </a>
        
        <!-- Mobile Menu Button (placeholder) -->
        <button class="md:hidden text-white" aria-label="Open main menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>

    </nav>
  </header>
</template>

