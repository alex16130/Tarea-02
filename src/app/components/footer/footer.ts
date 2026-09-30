import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid grid-cols-[1fr_1fr_1fr_1fr_1.4fr] gap-8 mb-12">
        @for (col of columns; track col.title) {
          <div>
            <h4 class="font-medium text-[#0f2e28] mb-3">{{ col.title }}</h4>
            <ul class="space-y-2 text-sm text-gray-500">
              @for (item of col.items; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </div>
        }
        <div>
          <span class="text-lg font-semibold text-[#0f2e28]">Ascone</span>
          <p class="text-sm text-gray-500 mt-4">
            181 Bay Street, Wellington Tower, Suite 292 Toronto, Ontario M5J 2T3
          </p>
        </div>
      </div>

      <div class="border-t pt-6 flex items-center justify-between text-sm text-gray-500">
        <span>© Ascone Finance Ltd 2023.</span>
        <div class="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Disclosure</span>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  columns = [
    { title: 'Account', items: ['Saving', 'Join Accounts', 'Crypto', 'Freelance', 'Commodities'] },
    { title: 'Help', items: ['Customer Help', 'Community', 'Blog'] },
    { title: 'Finance', items: ['Cards', 'Linked Accounts', 'Payment'] },
    { title: 'Company', items: ['About Us', 'Contact', 'Sustainability', 'Career'] },
  ];
}