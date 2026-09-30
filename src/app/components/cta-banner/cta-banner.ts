import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cta-banner',
  imports: [MatButtonModule],
  template: `
    <section class="max-w-6xl mx-auto px-6">
      <div class="bg-[#0f2e28] text-white rounded-2xl p-12 grid grid-cols-2 items-center relative overflow-hidden">
        <div>
          <h2 class="text-4xl font-semibold mb-4">
            Change the way you use your <em class="font-serif italic">money</em>
          </h2>
          <p class="text-gray-300 mb-6">
            Join over million people who choose Ascone for fast and secure future banking.
          </p>
          <button mat-flat-button class="!rounded-full !bg-white !text-[#0f2e28]">Get Started Now</button>
        </div>
        <img src="cta-money.jpg" class="rounded-xl justify-self-end w-2/3" alt="" />
      </div>
    </section>
  `,
})
export class CtaBanner {}