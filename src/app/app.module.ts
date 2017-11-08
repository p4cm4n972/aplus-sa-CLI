import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/app-home.component';
import { HistoryComponent } from './history/history.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { PartnerComponent } from './partner/partner.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    ProductComponent,
    ProductDetailComponent,
    PartnerComponent,
    SkillComponent,
    ContactComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'history', component: HistoryComponent},
      { path: 'skill', component: SkillComponent},
      { path: 'product', component: ProductComponent},
      { path: 'product/:id', component: ProductDetailComponent},
      { path: 'partner', component: PartnerComponent},
      { path: 'news', component: NewsComponent},
      { path: 'contact', component: ContactComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
