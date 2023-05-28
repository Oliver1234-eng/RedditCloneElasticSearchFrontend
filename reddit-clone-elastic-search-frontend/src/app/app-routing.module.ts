import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { FirstPageCommunitiesComponent } from './first-page-communities/first-page-communities.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { combineLatest } from 'rxjs';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
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


const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'communities', component: FirstPageCommunitiesComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'find-community-by-name', component: FindCommunityByNameComponent},
  {path: 'find-community-by-description', component: FindCommunityByDescriptionComponent},
  {path: 'find-community-by-rules', component: FindCommunityByRulesComponent},
  {path: 'find-community-by-user', component: FindCommunityByUserComponent},
  {path: 'find-community-by-post-count', component: FindCommunityByPostCountComponent},
  {path: 'find-community-by-post-count-greater-than', component: FindCommunityByPostCountGreaterThanComponent},
  {path: 'find-community-by-post-count-less-than', component: FindCommunityByPostCountLessThanComponent},
  {path: 'find-community-by-average-karma', component: FindCommunityByAverageKarmaComponent},
  {path: 'find-community-by-average-karma-greater-than', component: FindCommunityByAverageKarmaGreaterThanComponent},
  {path: 'find-community-by-average-karma-less-than', component: FindCommunityByAverageKarmaLessThanComponent},
  {path: 'find-community-by-name-and-user', component: FindCommunityByNameAndUserComponent},
  {path: 'find-community-by-name-or-user', component: FindCommunityByNameOrUserComponent},
  {path: 'find-community-by-name-fuzzy-query', component: FindCommunityByNameFuzzyQueryComponent},
  {path: 'find-community-by-description-phrase-query', component: FindCommunityByDescriptionPhraseQueryComponent},
  {path: 'choose-community-search', component: ChooseCommunitySearchComponent},
  {path: 'choose-post-search', component: ChoosePostSearchComponent},
  {path: 'find-post-by-title', component: FindPostByTitleComponent},
  {path: 'find-post-by-text', component: FindPostByTextComponent},
  {path: 'find-post-by-user', component: FindPostByUserComponent},
  {path: 'find-post-by-flair', component: FindPostByFlairComponent},
  {path: 'find-post-by-community', component: FindPostByCommunityComponent},
  {path: 'find-post-by-title-fuzzy-query', component: FindPostByTitleFuzzyQueryComponent},
  {path: 'find-post-by-text-phrase-query', component: FindPostByTextPhraseQueryComponent},
  {path: 'find-post-by-comment-count', component: FindPostByCommentCountComponent},
  {path: 'find-post-by-comment-count-greater-than', component: FindPostByCommentCountGreaterThanComponent},
  {path: 'find-post-by-comment-count-less-than', component: FindPostByCommentCountLessThanComponent},
  {path: 'find-post-by-karma', component: FindPostByKarmaComponent},
  {path: 'find-post-by-karma-greater-than', component: FindPostByKarmaGreaterThanComponent},
  {path: 'find-post-by-karma-less-than', component: FindPostByKarmaLessThanComponent},
  {path: 'find-post-by-flair-and-user', component: FindPostByFlairAndUserComponent},
  {path: 'find-post-by-flair-or-user', component: FindPostByFlairOrUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
