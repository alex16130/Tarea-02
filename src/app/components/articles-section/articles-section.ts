import { Component } from '@angular/core';

@Component({
  selector: 'app-articles-section',
  template: `
    <section class="max-w-6xl mx-auto px-6 py-16 grid grid-cols-[220px_1fr] gap-10">
      <div>
        <h2 class="font-semibold text-[#0f2e28] mb-4">Categories</h2>
        <ul class="bg-gray-50 rounded-lg p-2 text-sm text-gray-600">
          @for (cat of categories; track cat) {
            <li class="px-3 py-2 rounded-md cursor-pointer"
                [class.bg-white]="cat === 'All Articles'"
                [class.text-[#0f2e28]]="cat === 'All Articles'"
                [class.border-l-2]="cat === 'All Articles'"
                [class.border-[#0f2e28]]="cat === 'All Articles'">
              {{ cat }}
            </li>
          }
        </ul>
      </div>

      <div>
        <h2 class="font-semibold text-[#0f2e28] mb-4">All Articles</h2>
        <div class="grid grid-cols-2 gap-8">
          @for (article of articles; track article.title) {
            <article>
              <img [src]="article.img" class="rounded-lg h-48 w-full object-cover mb-3" alt="" />
              <p class="text-xs font-medium text-teal-700 mb-1">{{ article.category }}</p>
              <h3 class="font-medium text-[#0f2e28] mb-2">{{ article.title }}</h3>
              <p class="text-xs text-gray-500">
                <span class="underline">{{ article.author }}</span> • {{ article.date }}
              </p>
            </article>
          }
        </div>

        <div class="flex items-center justify-between mt-12 text-sm">
          <button class="px-4 py-2 rounded-full border">Previous</button>
          <div class="flex gap-2">
            @for (page of pages; track page) {
              <span class="w-8 h-8 flex items-center justify-center rounded-full"
                    [class.bg-[#0f2e28]]="page === 1"
                    [class.text-white]="page === 1">
                {{ page }}
              </span>
            }
          </div>
          <button class="px-4 py-2 rounded-full border">Next</button>
        </div>
      </div>
    </section>
  `,
})
export class ArticlesSection {
  categories = ['All Articles', 'Finance', 'Artificial Intelegence', 'Government', 'Engineering'];

  articles = [
    { img: 'finance1.jpg', category: 'FINANCE', title: 'Inflation and your investments: What you need to know', author: 'Ngolo Kante', date: 'March 1, 2025' },
    { img: 'finance2.jpg', category: 'ARTIFICIAL INTELEGENCE', title: 'Software best practices for more flexible, scalable software', author: 'Sergio Aguero', date: 'February 28, 2025' },
    { img: 'finance3.jpg', category: 'GOVERNMENT', title: 'USA lets its currency weaken a key barrier to manage the fall', author: 'Maggie Bannon', date: 'February 2, 2025' },
    { img: 'finance4.jpg', category: 'FINANCE', title: 'Common tax return mistakes and how to avoid them', author: 'Justin Schulz', date: 'February 16, 2025' },
    { img: 'finance5.jpg', category: 'ARTIFICIAL INTELEGENCE', title: 'How a Web3 internet could upend digital economy', author: 'Luiza Laus', date: 'January 16, 2025' },
    { img: 'finance6.jpg', category: 'GOVERNMENT', title: 'Russia Supply & Overwhelming Demand Driving Investor Reset', author: 'Yamac Isik', date: 'January 10, 2025' },
  ];

  pages = [1, 2, 3, 8];
}