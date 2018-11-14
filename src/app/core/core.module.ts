import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import {ConfigService} from './index';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [],
  imports: [MaterialModule],
  providers: [ConfigService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule { }
