import { Component } from '@angular/core';

@Component({
  selector: 'app-insight-hero',
  template: `
    <section class="bg-[#e4ede9] px-6 py-16">
      <div class="max-w-6xl mx-auto grid grid-cols-[1fr_1.6fr] gap-10 items-center">
        <div>
          <p class="text-xs font-medium text-gray-500 mb-2">INSIGHT</p>
          <h1 class="text-5xl font-semibold text-[#0f2e28] leading-tight mb-8">News & Resources</h1>
          <div class="flex gap-2">
            <span class="text-[#0f2e28]">✦</span>
            <span class="text-gray-400">✦</span>
            <span class="text-gray-300">✦</span>
          </div>
        </div>

        <div class="grid grid-cols-[1fr_1fr] rounded-xl overflow-hidden bg-white">
          <img src="crypto-card.jpg" class="h-full w-full object-cover" alt="" />
          <div class="p-6 flex flex-col justify-between">
            <div>
              <p class="text-xs font-medium text-teal-700 mb-2">TRENDING NOW</p>
              <h3 class="font-semibold text-[#0f2e28] mb-2">Crypto update: key trends, price movements, and analytics</h3>
              <p class="text-sm text-gray-500">
                The cryptocurrency market has once again taken center stage as investors, traders,
                and institutions closely watch shifting dynamics.
              </p>
            </div>
            <div class="flex items-center gap-2 mt-4">
              <div class="w-6 h-6 rounded-full bg-gray-300"></div>
              <span class="text-sm">Maggie Bannon</span>
              <span class="text-xs text-gray-400">March 4, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class InsightHero {}