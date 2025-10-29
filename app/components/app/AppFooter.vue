<template>
  <footer class="bg-[#F3F2FA] text-gray-700 py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-5">
      
      <!-- Column 1: Logo + Description -->
      <div>
        <div class="flex items-center space-x-2 mb-4">
          <img src="/img/fologo.png" alt="IntelliToggle Logo" class="h-10 w-auto" />
        </div>
        <p class="text-[0.8rem] text-[#4A4B4D] mb-4 leading-relaxed">
          IntelliToggle is built by AORTEM, a company focused on powering scalable,
          multi-platform developer tools.
        </p>
        <!-- GitHub Icon -->
        <a
          href="#"
          class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 hover:bg-gray-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 text-white" viewBox="0 0 24 24">
            <path
              d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.6 11.6 0 016 0C16.5 6 17.5 6.3 17.5 6.3c.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6A12 12 0 0012 0z"
            />
          </svg>
        </a>
      </div>

      <!-- Column 2: Resources -->
      <div class="text-sm ml-20">
        <h4 class="font-semibold text-gray-500 mb-4">Resources</h4>
        <ul class="space-y-3 text-sm">
          <li><a href="#" class="font-semibold hover:text-[#1A1C3D]">Why IntelliToggle Is Different</a></li>
          <li><a href="#" class="font-semibold hover:text-[#1A1C3D]">Customer Support</a></li>
          <li><a href="#" class="font-semibold hover:text-[#1A1C3D]">Terms & Conditions</a></li>
          <li><a href="#" class="font-semibold hover:text-[#1A1C3D]">Privacy Policy</a></li>
        </ul>
      </div>

      <!-- Column 3: Company -->
      <div class="ml-10 text-sm">
        <h4 class="font-medium text-gray-500 mb-4">Company</h4>
        <ul class="space-y-3 text-sm">
          <li><a href="#" class="font-semibold hover:text-[#1A1C3D]">Pricing</a></li>
          <li><a href="#" class="font-semibold hover:text-[#1A1C3D]">Documentation</a></li>
          <li><a href="#" class="font-semibold hover:text-[#1A1C3D]">About Us</a></li>
        </ul>
      </div>

      <!-- Column 4: Newsletter -->
      <div class="">
        <h4 class="font-semibold text-[#1A1C3D] mb-4">Subscribe to Newsletter</h4>
        <form class="flex items-stretch bg-white rounded-md shadow-sm mr-10 ">
          <input
            type="email"
            placeholder="Enter email address"
            class="flex-grow px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none rounded-lg"
          />
          <button
            type="submit"
            class="bg-[#F7B500] text-[#1A1C3D] font-semibold px-6 flex items-center justify-center hover:bg-[#FFCA2C] transition text-sm rounded-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>
