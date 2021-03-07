import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from '@ngca/app/desktop/app/app.module'
import { AppConfig } from '@ngca/app/desktop/environments/environment'

if (AppConfig.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)

  // todo production logging
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err))
