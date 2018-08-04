import { HomeModule } from './home/home.module';
import { ArticleModule } from './article/article.module';
import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent
    ],
    imports: [
        ArticleModule,
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        HttpClientModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
