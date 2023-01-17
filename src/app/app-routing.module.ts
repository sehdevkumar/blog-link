import { WriteStoryComponent } from './components/write-story/write-story.component'
import { AppRoutePath } from './typings/platform-typings'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: AppRoutePath.home,
    component: LandingPageComponent,
  },

  {
    path: AppRoutePath.writeStory,
    component: WriteStoryComponent,
  },
  {
    path: '',
    redirectTo: AppRoutePath.home,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
