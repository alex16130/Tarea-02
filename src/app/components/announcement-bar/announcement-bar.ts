import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-announcement-bar',
  imports: [MatIconModule],
  template: `
    <div class="bg-[#0f2e28] text-white text-sm py-2 px-4 flex items-center justify-center gap-2 relative">
      <span>🚀 Session 2024 • Early-bird registration now open ></span>
      <button class="absolute right-4">
        <mat-icon class="!text-base">close</mat-icon>
      </button>
    </div>
  `,
})
export class AnnouncementBar {}