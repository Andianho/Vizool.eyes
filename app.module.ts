import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { DatePicker } from '@ionic-native/date-picker';
import { Network } from '@ionic-native/network';
import { Toast } from '@ionic-native/toast';

import { MyApp } from './app.component';
import { Header } from './header';
import { HomePage } from './home';
import { PatientRecord} from './patientRecord';
import { StudyGroup } from './studyGroup';
import { PatientCode } from './patientCode';
import { PatientCodeNew } from './patientCodeNew';
import { ChooseBoyGirl } from './chooseBoyGirl';
import { Clothes } from './clothes';
import { BuildHome } from './buildHome';
import { Thumb } from './thumb';
import { Emotions } from './emotions';
import { PatientIndicators } from './patientIndicators';
import { PatientReview } from './patientReview';
import { Symptoms } from './symptoms';
import { AngularDraggableModule } from 'angular2-draggable';
import { DragnDrop } from './dragndrop';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    Header,
    HomePage,
    PatientRecord,
    StudyGroup,
    PatientCode,
    ChooseBoyGirl,
    Clothes,
    BuildHome,
    Thumb,
    Emotions,
    PatientIndicators,
    PatientReview,
    Symptoms,
    PatientCodeNew,
    DragnDrop
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularDraggableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PatientRecord,
    StudyGroup,
    PatientCode,
    ChooseBoyGirl,
    Clothes,
    BuildHome,
    Emotions,
    Thumb,
    PatientIndicators,
    PatientReview,
    Symptoms,
    PatientCodeNew,
    DragnDrop
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    Toast
  ]
})
export class AppModule {}
