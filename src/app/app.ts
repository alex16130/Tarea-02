import { Component } from '@angular/core';
import { AnnouncementBar } from './components/announcement-bar/announcement-bar';
import { Navbar } from './components/navbar/navbar';
import { InsightHero } from './components/insight-hero/insight-hero';
import { ArticlesSection } from './components/articles-section/articles-section';
import { CtaBanner } from './components/cta-banner/cta-banner';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [AnnouncementBar, Navbar, InsightHero, ArticlesSection, CtaBanner, Footer],
  template: `
    <app-announcement-bar />
    <app-navbar />
    <app-insight-hero />
    <app-articles-section />
    <app-cta-banner />
    <app-footer />
  `,
})
export class App {}