import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule],
  template: `
    <header class="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
      <div class="flex items-center gap-2">
        <span class="text-xl font-semibold text-[#0f2e28]">Ascone</span>
      </div>
      <nav class="flex gap-8 text-sm text-gray-600">
        @for (link of links; track link) {
          <a href="#" [class.text-[#0f2e28]]="link === 'Insight'" [class.font-medium]="link === 'Insight'">{{ link }}</a>
        }
      </nav>
      <div class="flex items-center gap-3">
        <button mat-stroked-button class="!rounded-full">Login</button>
        <button mat-flat-button class="!rounded-full !bg-[#0f2e28]">Sign Up</button>
      </div>
    </header>
  `,
})
export class Navbar {
  links = ['Features', 'Company', 'Insight'];
}