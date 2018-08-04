import { ArticleRoutngModule } from './article-routng.module';

describe('ArticleRoutngModule', () => {
  let articleRoutngModule: ArticleRoutngModule;

  beforeEach(() => {
    articleRoutngModule = new ArticleRoutngModule();
  });

  it('should create an instance', () => {
    expect(articleRoutngModule).toBeTruthy();
  });
});
