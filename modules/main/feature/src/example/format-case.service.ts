import { Injectable } from '@angular/core'
import { camelize } from 'humps'

@Injectable()
export class FormatCaseService {
  public camelize(text: string) {
    return camelize(text)
  }
}