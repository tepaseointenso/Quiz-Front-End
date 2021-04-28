import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { checkCircleFill, xCircleFill, playCircleFill } from 'ngx-bootstrap-icons';

const icons = {
  checkCircleFill,
  xCircleFill,
  playCircleFill
};



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ManageTasksComponent } from './manage-tasks/manage-tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { MatSelectModule} from '@angular/material/select'
import { MatButtonModule} from '@angular/material/button';
import { NotasComponent } from './notas/notas.component'




@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    ManageTasksComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(icons),
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
