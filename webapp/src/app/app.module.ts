import { ArticleModule } from './article/article.module';
import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './home/category/category.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        CategoryComponent
    ],
    imports: [
        ArticleModule,
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
