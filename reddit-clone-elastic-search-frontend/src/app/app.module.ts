import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstPageComponent } from './first-page/first-page.component';
import { FirstPageCommunitiesComponent } from './first-page-communities/first-page-communities.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JwtInterceptor } from './login-page/JwtInterceptor';
import { UserService } from './services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { FindCommunityByNameComponent } from './find-community-by-name/find-community-by-name.component';
import { FindCommunityByDescriptionComponent } from './find-community-by-description/find-community-by-description.component';
import { FindCommunityByRulesComponent } from './find-community-by-rules/find-community-by-rules.component';
import { FindCommunityByUserComponent } from './find-community-by-user/find-community-by-user.component';
import { FindCommunityByPostCountComponent } from './find-community-by-post-count/find-community-by-post-count.component';
import { FindCommunityByPostCountGreaterThanComponent } from './find-community-by-post-count-greater-than/find-community-by-post-count-greater-than.component';
import { FindCommunityByPostCountLessThanComponent } from './find-community-by-post-count-less-than/find-community-by-post-count-less-than.component';
import { FindCommunityByAverageKarmaComponent } from './find-community-by-average-karma/find-community-by-average-karma.component';
import { FindCommunityByAverageKarmaGreaterThanComponent } from './find-community-by-average-karma-greater-than/find-community-by-average-karma-greater-than.component';
import { FindCommunityByAverageKarmaLessThanComponent } from './find-community-by-average-karma-less-than/find-community-by-average-karma-less-than.component';
import { FindCommunityByNameAndUserComponent } from './find-community-by-name-and-user/find-community-by-name-and-user.component';
import { FindCommunityByNameOrUserComponent } from './find-community-by-name-or-user/find-community-by-name-or-user.component';
import { FindCommunityByNameFuzzyQueryComponent } from './find-community-by-name-fuzzy-query/find-community-by-name-fuzzy-query.component';
import { FindCommunityByDescriptionPhraseQueryComponent } from './find-community-by-description-phrase-query/find-community-by-description-phrase-query.component';
import { ChooseCommunitySearchComponent } from './choose-community-search/choose-community-search.component';
import { ChoosePostSearchComponent } from './choose-post-search/choose-post-search.component';
import { FindPostByTitleComponent } from './find-post-by-title/find-post-by-title.component';
import { FindPostByTextComponent } from './find-post-by-text/find-post-by-text.component';
import { FindPostByUserComponent } from './find-post-by-user/find-post-by-user.component';
import { FindPostByFlairComponent } from './find-post-by-flair/find-post-by-flair.component';
import { FindPostByCommunityComponent } from './find-post-by-community/find-post-by-community.component';
import { FindPostByTitleFuzzyQueryComponent } from './find-post-by-title-fuzzy-query/find-post-by-title-fuzzy-query.component';
import { FindPostByTextPhraseQueryComponent } from './find-post-by-text-phrase-query/find-post-by-text-phrase-query.component';
import { FindPostByCommentCountComponent } from './find-post-by-comment-count/find-post-by-comment-count.component';
import { FindPostByCommentCountGreaterThanComponent } from './find-post-by-comment-count-greater-than/find-post-by-comment-count-greater-than.component';
import { FindPostByCommentCountLessThanComponent } from './find-post-by-comment-count-less-than/find-post-by-comment-count-less-than.component';
import { FindPostByKarmaComponent } from './find-post-by-karma/find-post-by-karma.component';
import { FindPostByKarmaGreaterThanComponent } from './find-post-by-karma-greater-than/find-post-by-karma-greater-than.component';
import { FindPostByKarmaLessThanComponent } from './find-post-by-karma-less-than/find-post-by-karma-less-than.component';
import { FindPostByFlairAndUserComponent } from './find-post-by-flair-and-user/find-post-by-flair-and-user.component';
import { FindPostByFlairOrUserComponent } from './find-post-by-flair-or-user/find-post-by-flair-or-user.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { AddNewCommunityComponent } from './add-new-community/add-new-community.component';
import { AddNewCommunityPdfComponent } from './add-new-community-pdf/add-new-community-pdf.component';
import { AddNewPostPdfComponent } from './add-new-post-pdf/add-new-post-pdf.component';
import { FindPostByCommentTextComponent } from './find-post-by-comment-text/find-post-by-comment-text.component';
import { AddNewCommentComponent } from './add-new-comment/add-new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    FirstPageCommunitiesComponent,
    RegisterPageComponent,
    LoginPageComponent,
    HomePageComponent,
    ProfileComponent,
    FindCommunityByNameComponent,
    FindCommunityByDescriptionComponent,
    FindCommunityByRulesComponent,
    FindCommunityByUserComponent,
    FindCommunityByPostCountComponent,
    FindCommunityByPostCountGreaterThanComponent,
    FindCommunityByPostCountLessThanComponent,
    FindCommunityByAverageKarmaComponent,
    FindCommunityByAverageKarmaGreaterThanComponent,
    FindCommunityByAverageKarmaLessThanComponent,
    FindCommunityByNameAndUserComponent,
    FindCommunityByNameOrUserComponent,
    FindCommunityByNameFuzzyQueryComponent,
    FindCommunityByDescriptionPhraseQueryComponent,
    ChooseCommunitySearchComponent,
    ChoosePostSearchComponent,
    FindPostByTitleComponent,
    FindPostByTextComponent,
    FindPostByUserComponent,
    FindPostByFlairComponent,
    FindPostByCommunityComponent,
    FindPostByTitleFuzzyQueryComponent,
    FindPostByTextPhraseQueryComponent,
    FindPostByCommentCountComponent,
    FindPostByCommentCountGreaterThanComponent,
    FindPostByCommentCountLessThanComponent,
    FindPostByKarmaComponent,
    FindPostByKarmaGreaterThanComponent,
    FindPostByKarmaLessThanComponent,
    FindPostByFlairAndUserComponent,
    FindPostByFlairOrUserComponent,
    AddNewPostComponent,
    AddNewCommunityComponent,
    AddNewCommunityPdfComponent,
    AddNewPostPdfComponent,
    FindPostByCommentTextComponent,
    AddNewCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ UserService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
