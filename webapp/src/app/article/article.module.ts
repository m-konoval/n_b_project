import { ArticleRoutngModule } from './article-routng.module';
import { ArticleService } from './article.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';

@NgModule({
    imports: [
        CommonModule,
        ArticleRoutngModule
    ],
    declarations: [ArticleComponent],
    providers: [ArticleService]
})
export class ArticleModule { }
