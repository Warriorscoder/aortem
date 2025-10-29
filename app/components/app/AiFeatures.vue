<template>
  <section
    class="relative py-15 sm:py-20 bg-gradient-to-b from-[#42389E] to-[#0F1026] text-white overflow-hidden"
  >
    <!-- Background image overlay -->
    <div class="absolute inset-0">
      <img
        src="/img/bg-coming.jpg"
        alt="Background"
        class="w-full h-full object-cover opacity-30"
      />
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#42389E]/70 to-[#0F1026]/95"
    ></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <!-- Coming Soon Badge -->
      <span
        class="bg-[#F9A71E] text-[#1A1C3D] text-sm sm:text-[0.8rem] font-semibold px-5 py-1 rounded-full shadow-md inline-block"
      >
        Coming Soon
      </span>

      <!-- Heading -->
      <h2 class="mt-3 text-lg sm:text-[1.8rem] font-medium tracking-tight">
        DartCodeAI That Actually Changes Flagging
      </h2>

      <!-- Features Grid -->
      <div
        class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[3rem] max-w-5xl mx-auto"
      >
        <!-- Feature 1 -->
        <div
          class="bg-white/5 backdrop-blur- border border-white/20 rounded-lg px-6 py-3 text-left hover:bg-white/20 transition-all duration-300 flex flex-col"
        >
          <div
            class="bg-white/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4 mx-auto"
          >
            <img src="/img/icon1.png" alt="icon1" />
          </div>
          <h3 class="text-md font-bold mx-auto">
            AutoFlag AI
            <span class="text-gray-300">(LLM-Assisted Flag Creation)</span>
          </h3>
          <p class="mt-2 text-gray-300 text-sm leading-relaxed text-center">
            Create new flags just by typing what you need. The AI names it, sets
            rules, and configures targeting for you.
          </p>
        </div>

        <!-- Feature 2 -->
        <div
          class="bg-white/5 backdrop-blur- border border-white/20 rounded-lg px-6 py-3 text-left hover:bg-white/20 transition-all duration-300 flex flex-col"
        >
          <div
            class="bg-white/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4 mx-auto"
          >
            <img src="/img/icon2.png" alt="icon1" />
          </div>
          <h3 class="text-md font-bold mx-auto">
            SmartRamp AI
            <span class="text-gray-300">(AI-Driven Rollout Optimization)</span>
          </h3>
          <p class="mt-2 text-gray-300 text-sm leading-relaxed text-center">
            Rollouts that adjust themselves. AI expands, pauses, or rolls back
            based on real-time metrics.
          </p>
        </div>

        <!-- Feature 3 -->
        <div
          class="bg-white/5 backdrop-blur- border border-white/20 rounded-lg px-6 py-3 text-left hover:bg-white/20 transition-all duration-300 flex flex-col"
        >
          <div
            class="bg-white/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4 mx-auto"
          >
            <img src="/img/icon3.png" alt="icon1" />
          </div>
          <h3 class="text-md font-bold mx-auto">
            ExplainFlags AI
            <span class="text-gray-300">(LLM Root-Cause + Insights)</span>
          </h3>
          <p class="mt-2 text-gray-300 text-sm leading-relaxed text-center">
            Understand issues instantly with AI-generated, plain-language
            insights tied to your flags.
          </p>
        </div>

        <!-- Feature 4 -->
        <div
          class="bg-white/5 backdrop-blur- border border-white/20 rounded-lg px-6 py-3 text-left hover:bg-white/20 transition-all duration-300 flex flex-col"
        >
          <div
            class="bg-white/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4 mx-auto"
          >
            <img src="/img/icon4.png" alt="icon1" />
          </div>
          <h3 class="text-md font-bold mx-auto">
            AutoSegment AI
            <span class="text-gray-300">(Behavioral Segmentation)</span>
          </h3>
          <p class="mt-2 text-gray-300 text-sm leading-relaxed text-center">
            Target the right users automatically. AI builds segments from live
            behavior—no manual rules.
          </p>
        </div>
      </div>

      <!-- Enterprise Only -->
      <h3 class="mt-10 text-2xl sm:text-3xl font-semibold text-[#F7B500]">
        Enterprise Only
      </h3>

      <!-- CTA Form -->
      <div
        class="mt-10 max-w-5xl mx-auto bg-white/10 border border-white/20 rounded-lg p-3"
      >
        <div
          class="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <h4 class="text-sm sm:text-md font-semibold">
            <span class="text-[#F7B500] font-bold">Be The First</span> To Try
            Out Our New AI Features.
          </h4>
          <form
            class="flex items-center bg-transparent border border-white/20 rounded-lg overflow-hidden p-1"
          >
            <input
              type="email"
              placeholder="Enter email address"
              class="flex-1 bg-transparent text-white placeholder-gray-300 px-4 py-1 focus:outline-none"
            />
            <button
              type="submit"
              class="bg-[#F7B500] text-[#1A1C3D] font-semibold px-3 py-2 hover:bg-[#FFBF33] transition-colors duration-200 rounded-lg"
            >
              Join AI Early Access
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
