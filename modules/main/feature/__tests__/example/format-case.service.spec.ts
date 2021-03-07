import { TestBed } from '@angular/core/testing'
import { FormatCaseService } from '@ngca/module/main/feature/example/format-case.service'

describe('user service', () => {
  let formatCaseService: FormatCaseService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatCaseService],
    })
    formatCaseService = TestBed.inject(FormatCaseService)
  })

  it('camelize', () => {
    const text = formatCaseService.camelize('foo-bar')

    expect(text).toBe('fooBar')
  })
})
