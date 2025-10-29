<template>
  <section class="flex justify-center items-center my-20 px-4">
    <div
      class="relative w-full max-w-4xl rounded-2xl bg-gradient-to-b from-[#42389E] to-[#0F1026] text-white py-10 shadow-xl overflow-hidden"
    >
      <!-- Background grid image -->
      <div class="absolute inset-0 z-20 ">
        <img
          src="/img/bgf.png"
          alt="grid background"
          class="w-full h-full object-cover opacity-20"
        />
      </div>

      <!-- Gradient overlay (optional for richer tone) -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#42389E]/80 to-[#0F1026]/90"></div>

      <!-- Content -->
      <div class="relative text-center z-10 px-6">
        <h2 class="text-2xl font-bold leading-snug">
          Launch Features Confidently With AI<br class="hidden sm:block" />
          Driven Feature Flags
        </h2>
        <p class="mt-4 text-lg text-gray-300">
          Start for free, scale as your team grows
        </p>

        <!-- Buttons -->
        <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            class="bg-[#F7B500] text-[#1A1C3D] font-semibold py-3 px-8 rounded-md shadow-md text-sm hover:bg-[#FFCA2C] transition"
          >
            Start for $1/mo
          </a>
          <a
            href="#"
            class="border border-[#F7B500] text-[#F7B500] font-semibold py-3 px-8 rounded-md text-sm hover:bg-[#F7B500] hover:text-[#1A1C3D] transition"
          >
            Join AI Early Access
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

